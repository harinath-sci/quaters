import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MATERIAL_SANITY_CHECKS_FACTORY } from '@angular/material/core/common-behaviors/common-module';

@Component({
  selector: 'app-quart1',
  templateUrl: './quart1.component.html',
  styleUrls: ['./quart1.component.css']
})
export class Quart1Component implements OnInit {
  Quart1: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      ID: new FormControl('',[Validators.required]),
      type: new FormControl('',[Validators.required]),
      count: new FormControl('',[Validators.required]),
  })
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.Quart1.value)
    this.httpClient.post('https://quarters-b9975-default-rtdb.firebaseio.com/quart.json',this.Quart1.value)
    .subscribe((response)=> console.log(response))
  }

}
