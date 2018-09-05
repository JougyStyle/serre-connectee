'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    ping,
};
function ping(req, res) {
    if (!res.headersSent) {
        return res.status(200).json('pong');
    }
}
//# sourceMappingURL=index.js.map