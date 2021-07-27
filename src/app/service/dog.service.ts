import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Dog } from '../models/dog.interface';


@Injectable({
  providedIn: 'root'
})
export class DogService {

  private apiUrl = 'http://localhost:5000/dogs'
  constructor(private http: HttpClient) { }

  public getDogDetails(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiUrl);
  }
}
