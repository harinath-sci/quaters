import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MATERIAL_SANITY_CHECKS_FACTORY } from '@angular/material/core/common-behaviors/common-module';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detail: FormGroup = new FormGroup(
  {
    year: new FormControl('', [Validators.required]),
    degree: new FormControl('',[Validators.required]),
    branch: new FormControl('',[Validators.required]),
    section: new FormControl('',[Validators.required]),
})
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.detail.value)
  }
}
