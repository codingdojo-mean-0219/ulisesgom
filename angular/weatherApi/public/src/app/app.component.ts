import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private _httpService: HttpService) {}

  getWeatherFromService(self: object ,city: string,) {
    let observable = this._httpService.getWeather(city);
    observable.subscribe(data => {
      console.log(data)
      self['city'] = data['name']
      self['humidity'] = data['main']['humidity'];
      self['averageTemp'] = data['main']['temp'];
      self['highTemp'] = data['main']['temp_max'];
      self['lowTemp'] = data['main']['temp_min'];
      self['status'] = data['weather'][0]['description'];
    })
  }
}
