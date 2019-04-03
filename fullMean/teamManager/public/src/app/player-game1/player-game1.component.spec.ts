import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGame1Component } from './player-game1.component';

describe('PlayerGame1Component', () => {
  let component: PlayerGame1Component;
  let fixture: ComponentFixture<PlayerGame1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerGame1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerGame1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
