import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MATERIAL_SANITY_CHECKS_FACTORY } from '@angular/material/core/common-behaviors/common-module';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-datas2',
  templateUrl: './datas2.component.html',
  styleUrls: ['./datas2.component.css']
})
export class Datas2Component implements OnInit {
  Datas2: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      ID: new FormControl('',[Validators.required]),
      acno: new FormControl('',[Validators.required]),
      ifsc: new FormControl('',[Validators.required]),
  })
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.Datas2.value)
    this.httpClient.post('https://quarters-b9975-default-rtdb.firebaseio.com/bank.json',this.Datas2.value)
    .subscribe((response)=> console.log(response))
  }
}
