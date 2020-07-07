import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiGithubService } from 'src/app/core/service/api-github.service';

@Component({
  selector: 'app-story-pulls',
  templateUrl: './story-pulls.component.html',
  styleUrls: ['./story-pulls.component.css']
})
export class StoryPullsComponent implements OnInit {

  datePulls:any;

  constructor(
    private activeroute: ActivatedRoute,
    private apiGithubService: ApiGithubService,
  ) { }

  ngOnInit(): void {
    let owner = this.activeroute.snapshot.paramMap.get('owner');
    let repo = this.activeroute.snapshot.paramMap.get('repo');
    this.apiGithubService.getStoryPulls(owner, repo).subscribe(
      data => {
        this.datePulls = data;
        console.log(this.datePulls);
        this.datePulls.map( element => {
          console.log(element.created_at);
        });
      },
      error => {
        console.log(error);
      }
    )
  }

  acessCommit(link:string): void {
    window.open(link);
  }

}
