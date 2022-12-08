import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextspeechComponent } from './textspeech.component';

describe('TextspeechComponent', () => {
  let component: TextspeechComponent;
  let fixture: ComponentFixture<TextspeechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextspeechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextspeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
