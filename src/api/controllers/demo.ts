'use strict';
import { ISwaggerRequest, ISwaggerResponse } from '../../interfaces';

module.exports = {
  doDemo,
};

function doDemo(req: ISwaggerRequest, res: ISwaggerResponse) {
  const demoparam = req.swagger.params.demoparam.value;
  if (!res.headersSent) { return res.status(200).json({fct: 'doDemo', param: demoparam}); }
}
