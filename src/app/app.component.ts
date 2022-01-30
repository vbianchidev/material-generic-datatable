import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { DeserializeArray, JsonArray } from "cerializr";
import { Car } from './resources/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars$: Observable<Car[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cars$ = this.http
      .get("http://localhost:3000/cars")
      .pipe(
        map((res: JsonArray) => DeserializeArray(res, Car))
      );
  }
}
