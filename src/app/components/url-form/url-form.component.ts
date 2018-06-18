import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ShortenerService } from '../../shortener.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.css']
})
export class UrlFormComponent implements OnInit {
  title = 'Url Shotener';
  short_url:string = '';
  url:string = '';
  angForm: FormGroup;
  constructor(private shortenerservice: ShortenerService, private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      url: ['', Validators.required],
      userShortUrl: ['']
    });
  }
  submitUrl(url, userShortUrl) {
    // this.short_url = this.shortenerservice.submitUrl(url, userShortUrl);
    // console.log(this.short_url);
    const uri = 'https://apiurlshort.herokuapp.com/urls';
    const obj = {
      url: url,
      userShortUrl: userShortUrl
    };
    this.http
      .post(uri, obj)
      .subscribe(
        data => this.short_url = data['short_url'],
        error => this.short_url = error.error['message']
        // res => {
        // this.short_url = res['short_url'];
      );
  }
  ngOnInit() {

  }

}
