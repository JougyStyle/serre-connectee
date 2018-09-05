'use strict';
import * as fs from 'fs';
import { ISwaggerRequest, ISwaggerResponse } from '../../interfaces';
import * as lastGithubWebhookData from './../../../../lastGithubWebhookData.json';
import * as packageJSON from './../../../../package.json';

console.log('current version : ' + packageJSON.version);
let currentGithubWebhookData: IGithubHookContent = lastGithubWebhookData;
if (currentGithubWebhookData.commits && currentGithubWebhookData.commits[0] && currentGithubWebhookData.commits[0].timestamp) {
  console.log('La dernière version a été récupérée depuis Github, en date du : ' + currentGithubWebhookData.commits[0].timestamp);
}
// Des exemples de requêtes sont présentés dans la documentation de GitHub
interface IGithubHookContent {
  ref: string;
  before: string;
  after: string;
  created: boolean;
  deleted: boolean;
  forced: boolean;
  base_ref: any;
  compare: string;
  commits?: IGithubCommit[];
  head_commit?: IGithubCommit[];
  repository: IGithubRepository;
  pusher?: { name: string; email: string; };
  sender?: IGithubAccount;
}

interface IGithubCommit {
  id: string;
  tree_id: string;
  distinct: boolean;
  message: string;
  timestamp: string;
  url: string;
  author: { name: string; email: string; username: string; };
  committer: { name: string; email: string; username: string; };
  added: string[];
  removed: string[];
  modified: string[];
}

interface IGithubRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: IGithubAccount;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: number;
  updated_at: string;
  pushed_at: number;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: any;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: any;
  archived: boolean;
  open_issues_count: number;
  license: any;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  stargazers: number;
  master_branch: string;
}

interface IGithubAccount {
  name: string;
  email: string;
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;

}

interface IGithubHookHeaders {
  host: string;
  accept: string;
  'user-agent': string;
  'x-github-event': string;
  'x-github-delivery': string;
  'content-type': string;
  'x-hub-signature': string;
}

module.exports = {
  push,
  getCurrentVersion
};

function push(req: ISwaggerRequest, res: ISwaggerResponse) {
  console.log('github webhook triggered !');
  const githubEventInformation: IGithubHookContent = req.swagger.params.webhookInformation.value;
  // - githubEvent.head_commit is the last (and frequently the only) commit
  // - githubEvent.pusher is the user of the pusher pusher.name and pusher.email
  // - timestamp of final commit: githubEvent.head_commit.timestamp
  // - branch:  githubEvent.ref (refs/heads/master)

  execCommand('git pull')
  .then( () => console.log('source récupérée !'))
  .then( () => writeGithubWebhookInfo(githubEventInformation))
  .then( () => console.log('dernières informations enregistrées !'))
  .then( () => console.log('dernières informations enregistrées !'))
  .then( () => {
    const response = {received: true};
    if (!res.headersSent) { res.status(200).json(response); }
    return restartNode();
  });
}

function getCurrentVersion(req: ISwaggerRequest, res: ISwaggerResponse) {
  const lastV = currentGithubWebhookData.commits[0].timestamp;
  console.log('current version requested : ' + lastV);
  const answer = {version: lastV};
  if (!res.headersSent) { return res.status(200).json(answer); }
}

function restartNode() {
  console.log('restart !');
  process.on('exit', () => {
    require('child_process').spawn(process.argv.shift(), process.argv, {
        cwd: process.cwd(),
        detached : true,
        stdio: 'inherit',
    });
  });
  process.exit();
}
function writeGithubWebhookInfo(object: any) {
  currentGithubWebhookData = object;
  return new Promise( (resolve, reject) => {
    fs.writeFile('lastGithubWebhookData.json', JSON.stringify(object), 'utf8', (err: NodeJS.ErrnoException) => {
      if (err) { reject(err); } else { resolve(); }
    });
  });
}
function execCommand(command: string) {
  return new Promise( (resolve, reject) => {
    if (process.platform === 'win32') {
      const { spawn } = require('child_process');
      const bat = spawn('cmd.exe', ['/c', command]);

      bat.stdout.on('data', (data: any) => {
        console.log(data.toString());
      });

      bat.stderr.on('data', (data: any) => {
        console.log(data.toString());
      });

      bat.on('exit', (code: any) => {
        console.log(`Child exited with code ${code}`);
        resolve();
      });
    } else {
      const { exec } = require('child_process');
      exec('git pull', (error: any, stdout: any, stderr: any) => {
        if (error) {
          console.error(`exec error: ${error}`);
          reject(error);
          return;
        } else {
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
          resolve();
        }
      });
    }
  });
}
