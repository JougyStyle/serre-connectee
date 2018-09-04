'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    doDemo,
};
function doDemo(req, res) {
    const demoparam = req.swagger.params.demoparam.value;
    if (!res.headersSent) {
        return res.status(200).json({ fct: 'doDemo', param: demoparam });
    }
}
//# sourceMappingURL=demo.1.js.map