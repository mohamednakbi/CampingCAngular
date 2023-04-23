import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }

  Activityform = this.builder.group({
    id: this.builder.control({ value: '', disabled: true }),
    name: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required),
    capacity: this.builder.control('', Validators.required),
    favourite: this.builder.control('', Validators.required),
    disponibility: this.builder.control(true),
    startTime: this.builder.control('', Validators.required),
    endTime: this.builder.control('', Validators.required),


  });

}
