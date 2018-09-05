'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    push,
    getCurrentVersion,
};
function push(req, res) {
    console.log('github webhook triggered !');
    console.log('headers: ');
    console.log(JSON.stringify(req.headers, null, 4));
    console.log('\n\n\n');
    const githubEventInformation = req.swagger.params.webhookInformation.value;
    // - githubEvent.head_commit is the last (and frequently the only) commit
    // - githubEvent.pusher is the user of the pusher pusher.name and pusher.email
    // - timestamp of final commit: githubEvent.head_commit.timestamp
    // - branch:  githubEvent.ref (refs/heads/master)
    console.log('content: ');
    console.log(JSON.stringify(githubEventInformation, null, 4));
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