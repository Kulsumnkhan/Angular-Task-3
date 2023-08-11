import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataHandlerService } from '../shared/service/data-handler.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{
  sectionForm: any;

  constructor( private dataServe : DataHandlerService ){}

  ngOnInit(): void {
    this.sectionForm = new FormGroup({
      sectionHeader: new FormControl('', Validators.required),
      sectionDetails: new FormControl('', Validators.required)
    })
  }

  addSection(){
    console.log(this.sectionForm.value);
    this.dataServe.getDataFunc(this.sectionForm.value);
    this.sectionForm.reset();
  }
}
