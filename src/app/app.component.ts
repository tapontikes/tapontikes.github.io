import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import {CountdownDate} from './model/CountdownDate';
import * as moment from 'moment';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'After9';
  baseUrl = environment.baseUrl;
  openDate;


  constructor(private http: HttpClient) {

  }


  getTimeOpen() {
    this.http.get(this.baseUrl + '/api/countdown').subscribe( (obj: CountdownDate) => {
      this.openDate = moment(obj.open);
    });
  }

  ngOnInit(): void {
    this.getTimeOpen();
  }


}
