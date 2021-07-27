import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDogFormComponent } from './my-dog-form.component';

describe('MyDogFormComponent', () => {
  let component: MyDogFormComponent;
  let fixture: ComponentFixture<MyDogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDogFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
