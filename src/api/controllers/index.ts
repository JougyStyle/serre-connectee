'use strict';

import { Request, Response } from 'express';

module.exports = {
  ping,
};

function ping(req, res) {
  if (!res.headersSent) { return res.status(200).json('pong'); }
}
