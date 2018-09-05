'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    update,
    getCurrentVersion,
};
function update(req, res) {
    console.log('github webhook triggered !');
    console.log(req);
    const answer = { version: 'vDTC' };
    if (!res.headersSent) {
        return res.status(200).json(answer);
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