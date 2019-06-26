import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSearcherComponent } from './player-searcher.component';

describe('PlayerSearcherComponent', () => {
  let component: PlayerSearcherComponent;
  let fixture: ComponentFixture<PlayerSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
