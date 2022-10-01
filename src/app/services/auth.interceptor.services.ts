import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login/login.service";

@Injectable()
export class AuhtInterceptor implements HttpInterceptor{

    constructor(private login: LoginService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let auhtRequest =req;

        const token = this.login.getToken();

        if(token != null){
            auhtRequest = auhtRequest.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`}
            });
            
        }
        return next.handle(auhtRequest);
    }

}

export const AUTHINTERCEPTORPROVIDERS = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuhtInterceptor,
        multi: true
    }
]  