import { Component, OnInit } from '@angular/core';
import { ShortenerService } from '../../shortener.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.css']
})
export class UrlFormComponent implements OnInit {
title='Url Sotener';
angForm: FormGroup;
  constructor(private shortenerservice: ShortenerService, private fb: FormBuilder) { }

  ngOnInit() {
  }

}
