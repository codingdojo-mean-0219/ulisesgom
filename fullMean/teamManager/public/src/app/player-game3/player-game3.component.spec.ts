import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGame3Component } from './player-game3.component';

describe('PlayerGame3Component', () => {
  let component: PlayerGame3Component;
  let fixture: ComponentFixture<PlayerGame3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerGame3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerGame3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
