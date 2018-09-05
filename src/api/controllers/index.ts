'use strict';
import { ISwaggerRequest, ISwaggerResponse } from '../../interfaces';

module.exports = {
  ping,
};

function ping(req: ISwaggerRequest, res: ISwaggerResponse) {
  if (!res.headersSent) { return res.status(200).json('pong'); }
}
