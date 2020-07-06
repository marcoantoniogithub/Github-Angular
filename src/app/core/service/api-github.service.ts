import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {

  constructor(private http: HttpClient) { }

  getRepo(): Observable<any>{
    return this.http.get('https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=1')
  }

  getStoryPulls(link:string): Observable<any>{
    return this.http.get(link);
  }
}
