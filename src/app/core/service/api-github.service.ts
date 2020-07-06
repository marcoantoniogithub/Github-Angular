import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {

  constructor(private http: HttpClient) { }

  getTeste(): Observable<any>{
    return this.http.get('https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=1')
  }
}
