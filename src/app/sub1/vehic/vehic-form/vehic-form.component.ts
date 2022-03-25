import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MATERIAL_SANITY_CHECKS_FACTORY } from '@angular/material/core/common-behaviors/common-module';
@Component({
  selector: 'app-vehic-form',
  templateUrl: './vehic-form.component.html',
  styleUrls: ['./vehic-form.component.css']
})
export class VehicFormComponent implements OnInit {
  VehicForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      ID: new FormControl('',[Validators.required]),
      count: new FormControl('',[Validators.required]),
  })
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.VehicForm.value)
    this.httpClient.post('https://quarters-b9975-default-rtdb.firebaseio.com/vehicle.json',this.VehicForm.value)
    .subscribe((response)=> console.log(response))
  }
}
