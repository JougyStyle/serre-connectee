'use strict';

import { Request, Response } from 'express';

module.exports = {
  doDemo,
};

function doDemo(req, res) {
  const demoparam = req.swagger.params.demoparam.value;
  if (!res.headersSent) { return res.status(200).json({fct: 'doDemo', param: demoparam}); }
}
