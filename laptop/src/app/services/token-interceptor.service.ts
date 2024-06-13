import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    var token =JSON.parse(localStorage.getItem("token") || '{}');
    let jwtToken=req.clone({
      setHeaders:{
        Authorization:'Bearer '+token
      }
    })
    console.log(token);
    return next.handle(jwtToken)
  }
}
