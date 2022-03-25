import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MATERIAL_SANITY_CHECKS_FACTORY } from '@angular/material/core/common-behaviors/common-module';
@Component({
  selector: 'app-info1',
  templateUrl: './info1.component.html',
  styleUrls: ['./info1.component.css']
})
export class Info1Component implements OnInit {
  Info1: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      ID: new FormControl('',[Validators.required]),
      count: new FormControl('',[Validators.required]),
  })
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.Info1.value)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
    }
};
xhttp.open("GET", "hw", true);
xhttp.send();
  }
}
