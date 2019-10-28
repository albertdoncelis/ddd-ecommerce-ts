import express, { Request, Response } from 'express';

export abstract class BaseController {
    protected req: Request;


    public execute(req: Request, res: Response): void {
        this.req = req;

    }
}