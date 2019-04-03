import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGame2Component } from './player-game2.component';

describe('PlayerGame2Component', () => {
  let component: PlayerGame2Component;
  let fixture: ComponentFixture<PlayerGame2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerGame2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerGame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
