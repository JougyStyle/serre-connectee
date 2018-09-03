'use strict';
module.exports = {
    getElement,
};
function getElement(req, res) {
    if (!res.headersSent) {
        return res.status(200).json({ fct: 'getElement' });
    }
}
//# sourceMappingURL=element.js.map