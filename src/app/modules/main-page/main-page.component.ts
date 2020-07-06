import { Component, OnInit } from '@angular/core';
import { ApiGithubService } from 'src/app/core/service/api-github.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  dateRepositories:any;

  constructor(private apiGithubService: ApiGithubService) { 
    
  }

  ngOnInit(): void {
    this.getRepositories();
  }

  getRepositories(){
    this.apiGithubService.getRepo().subscribe(
      data => {
        this.dateRepositories = data;
        console.log(this.dateRepositories);
      },
      error => {
        console.log(error);
      }
    )
  }

  linkStoryPulls(link:string){
    console.log(link);
  }

}
