import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/dog.interface';
import { DogService } from 'src/app/service/dog.service';

@Component({
  selector: 'app-care',
  templateUrl: './care.component.html',
  styleUrls: ['./care.component.css']
})
export class CareComponent implements OnInit {
  dogs: Dog[];
  careInfo: boolean = false;
  constructor(private dogService: DogService) {
    this.dogs = []
   }
  
  ngOnInit(): void {
    this.dogService.getDogDetails().subscribe(dogResponse => {
      console.log('response', dogResponse);
      this.dogs = dogResponse;
    })
  }

  showCareInfo() {
    this.careInfo = !this.careInfo;
  }
}
