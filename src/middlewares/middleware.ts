import { NestMiddleware, Injectable } from "@nestjs/common";
import { Response, Request } from "express";

@Injectable()
export class Middleware implements NestMiddleware {
    use(req: Request ,res: Response, next) {
        console.log(`Middleware here => ${ JSON.stringify(req.body)}`);
        if(req.body.goThroughMiddleware) {
            next();
        } else {
            res.status(400).json({msg: 'Invalid entry for middleware'});
        }
    }
}