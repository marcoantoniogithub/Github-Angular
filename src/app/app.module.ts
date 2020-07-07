import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './modules/main-page/main-page.component';
import { ApiGithubService } from './core/service/api-github.service';
import { HttpClientModule } from '@angular/common/http';
import { StoryPullsComponent } from './modules/story-pulls/story-pulls.component'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    StoryPullsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiGithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
