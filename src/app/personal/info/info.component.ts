import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MATERIAL_SANITY_CHECKS_FACTORY } from '@angular/material/core/common-behaviors/common-module';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  Val: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email :new FormControl('', [Validators.required, Validators.email]),
      f_name : new FormControl('',[Validators.required]),
      m_name : new FormControl('',[Validators.required]),
      num : new FormControl('',[Validators.required]),
      addr : new FormControl('',[Validators.required])
  })
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.Val.value)
    this.httpClient.post('https://quarters-b9975-default-rtdb.firebaseio.com/details.json',this.Val.value)
    .subscribe((response)=> console.log(response))
  }
}
