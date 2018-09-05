'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const lastGithubWebhookData = require("./../../../../lastGithubWebhookData.json");
const packageJSON = require("./../../../../package.json");
console.log('current version : ' + packageJSON.version);
let currentGithubWebhookData = lastGithubWebhookData;
if (currentGithubWebhookData.commits && currentGithubWebhookData.commits[0] && currentGithubWebhookData.commits[0].timestamp) {
    console.log('La dernière version a été récupérée depuis Github, en date du : ' + currentGithubWebhookData.commits[0].timestamp);
}
module.exports = {
    push,
    getCurrentVersion,
};
function push(req, res) {
    console.log('github webhook triggered !');
    const githubEventInformation = req.swagger.params.webhookInformation.value;
    // - githubEvent.head_commit is the last (and frequently the only) commit
    // - githubEvent.pusher is the user of the pusher pusher.name and pusher.email
    // - timestamp of final commit: githubEvent.head_commit.timestamp
    // - branch:  githubEvent.ref (refs/heads/master)
    execCommand('git pull')
        .then(() => console.log('source récupérée !'))
        .then(() => writeGithubWebhookInfo(githubEventInformation))
        .then(() => console.log('dernières informations enregistrées !'))
        .then(() => {
        const response = { received: true };
        if (!res.headersSent) {
            return res.status(200).json(response);
        }
    });
}
function getCurrentVersion(req, res) {
    console.log('current version requested ! restart ongoing');
    const answer = { version: currentGithubWebhookData.commits[0].timestamp };
    if (!res.headersSent) {
        res.status(200).json(answer);
    }
    execCommand('git pull')
        .then(() => console.log('done !'));
    // restartNode();
    return;
}
function restartNode() {
    console.log('restart !');
    process.on('exit', () => {
        require('child_process').spawn(process.argv.shift(), process.argv, {
            cwd: process.cwd(),
            detached: true,
            stdio: 'inherit',
        });
    });
    process.exit();
}
function writeGithubWebhookInfo(object) {
    currentGithubWebhookData = object;
    return new Promise((resolve, reject) => {
        fs.writeFile('lastGithubWebhookData.json', JSON.stringify(object), 'utf8', (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}
function execCommand(command) {
    return new Promise((resolve, reject) => {
        const { spawn } = require('child_process');
        const bat = spawn('cmd.exe', ['/c', command]);
        bat.stdout.on('data', (data) => {
            console.log(data.toString());
        });
        bat.stderr.on('data', (data) => {
            console.log(data.toString());
        });
        bat.on('exit', (code) => {
            console.log(`Child exited with code ${code}`);
            resolve();
        });
    });
}
//# sourceMappingURL=git.js.map