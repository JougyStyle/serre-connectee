'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    push,
    getCurrentVersion,
};
function push(req, res) {
    console.log('github webhook triggered !');
    const githubEvent = req.body;
    // - githubEvent.head_commit is the last (and frequently the only) commit
    // - githubEvent.pusher is the user of the pusher pusher.name and pusher.email
    // - timestamp of final commit: githubEvent.head_commit.timestamp
    // - branch:  githubEvent.ref (refs/heads/master)
    console.log('WebHook Push Event: ');
    console.log(JSON.stringify(githubEvent, null, 4));
    const response = { received: true };
    if (!res.headersSent) {
        return res.status(200).json(response);
    }
}
function getCurrentVersion(req, res) {
    console.log('current version requested !');
    const answer = { version: 'vDTC' };
    if (!res.headersSent) {
        return res.status(200).json(answer);
    }
}
//# sourceMappingURL=git.js.map