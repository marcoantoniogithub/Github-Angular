import { Component, OnInit } from '@angular/core';
import { ApiGithubService } from 'src/app/core/service/api-github.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private apiGithubService: ApiGithubService) { 
    
  }

  ngOnInit(): void {
    
  }

  teste(){
    this.apiGithubService.getTeste().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

}
