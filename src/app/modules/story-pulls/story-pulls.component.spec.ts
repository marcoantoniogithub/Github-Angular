import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPullsComponent } from './story-pulls.component';

describe('StoryPullsComponent', () => {
  let component: StoryPullsComponent;
  let fixture: ComponentFixture<StoryPullsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryPullsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPullsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
