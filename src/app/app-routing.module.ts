import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './modules/main-page/main-page.component';
import { StoryPullsComponent } from './modules/story-pulls/story-pulls.component';


const routes: Routes = [
  {
    path:'',
    component: MainPageComponent
  },
  {
    path:'storyPulls/:owner/:repo',
    component: StoryPullsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
