import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRessponse } from '../models/ApiRessponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
  login(data:any):Observable<ApiRessponse>{
    return this.http.post<ApiRessponse>('http://localhost:8080/api/v1/auth/authenticate',data)
  }
}
