'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function update(req, res) {
    console.log('github webhook triggered !');
    console.log(req);
    if (!res.headersSent) {
        return res.status(200).send();
    }
}
//# sourceMappingURL=update.js.map