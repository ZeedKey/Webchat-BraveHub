import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate {

    constructor(private jwtService: JwtService) {}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();
        const message: string = 'Несанкионированный доступ';
        try{
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];

            console.log(bearer);
            console.log(token);

            if(bearer!=='Bearer' || !token){
                throw new UnauthorizedException({message: message})
            }
            const user = this.jwtService.verify(token)
            req.user = user;
            return true;
        } catch (e) {
            throw new UnauthorizedException({message: message})
        }
    }

}