import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class ShortenerService {

  result: any;
  constructor(private http: HttpClient) { }

  submitUrl(url, userShortUrl) {
    const uri = 'https://apiurlshort.herokuapp.com/urls';
    const obj = {
      url: url,
      userShortUrl: userShortUrl
    };
    let short_url;
    this.http
      .post(uri, obj)
      .subscribe(res => {
        short_url = res['short_url'];
      }
      );
    return short_url;
  }

}
