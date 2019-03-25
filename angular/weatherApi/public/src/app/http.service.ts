import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  
  getWeather(city: string) {
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=142891102fb8781ce46de4a2dc7f4be9");
  }
}
