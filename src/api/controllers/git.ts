'use strict';
import { ISwaggerRequest, ISwaggerResponse } from '../../interfaces';

module.exports = {
  update,
  getCurrentVersion,
};

function update(req: ISwaggerRequest, res: ISwaggerResponse) {
  console.log('github webhook triggered !');
  console.log(req);
  const answer = {version: 'vDTC'};
  if (!res.headersSent) { return res.status(200).json(answer); }
}
function getCurrentVersion(req: ISwaggerRequest, res: ISwaggerResponse) {
  console.log('current version requested !');
  const answer = {version: 'vDTC'};

  if (!res.headersSent) { return res.status(200).json(answer); }
}
