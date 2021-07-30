import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSyntaxPageComponent } from './template-syntax-page.component';

describe('TemplateSyntaxPageComponent', () => {
  let component: TemplateSyntaxPageComponent;
  let fixture: ComponentFixture<TemplateSyntaxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateSyntaxPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSyntaxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
