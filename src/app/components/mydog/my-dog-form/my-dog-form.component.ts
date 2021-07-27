import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Dog } from 'src/app/models/dog.interface';

@Component({
  selector: 'app-my-dog-form',
  templateUrl: './my-dog-form.component.html',
  styleUrls: ['./my-dog-form.component.css']
})
export class MyDogFormComponent implements OnInit {
  @Output() addDog: EventEmitter<Dog> = new EventEmitter();

  name: string = '';
  sex: string = '';
  age: number = 0;
  id: number = NaN;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.name) {
      alert('Please add your dog!');
      return;
    }

    const newDog = {
      name: this.name,
      sex: this.sex,
      age: this.age,
      id: this.id++
    }

    this.addDog.emit(newDog);

    // to clear the form after it has been submitted
    this.name = '';
    this.age = NaN;
    this.sex = '';

  }
}
