
import { Request, Response } from 'express';
export interface ISwaggerRequest extends Request {
  swagger: any;
}
export interface ISwaggerResponse extends Response {
  headerSent: boolean;
}
