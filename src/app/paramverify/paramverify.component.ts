import { Component, OnInit } from '@angular/core';
import {Site } from '../site';
@Component({
  selector: 'app-paramverify',
  templateUrl: './paramverify.component.html',
  styleUrls: ['./paramverify.component.css']
})
export class ParamverifyComponent implements OnInit {
  paramTypes = ["String", "Int", "Double", "JSONObject", "JSONArray"];
  paramsNum = [];
  i = 1;
  param={
    "paramType":"",
    "paramValue":""
  }
 params={}

  constructor() { }

  ngOnInit() {
  }

 
  addParam() {
    this.paramsNum.push("_"+this.i);
    this.params
    this.i++;
    console.info(this.paramsNum);
  }

  deleteParam(){
    this.paramsNum.pop();
    this.i--;
    if(this.i<1){
      this.i==1;
    }
    console.info(this.paramsNum);
  }

  generateCode(){
    
  }


  
  
  urls = ['www.runoob.com', 'www.google.com',
  'www.taobao.com', 'www.facebook.com'];
 model = new Site(1, '菜鸟教程', this.urls[0], 10000);
 submitted = false;
 onSubmit() { this.submitted = true; }
 // TODO: 完成后移除
 get diagnostic() { return JSON.stringify(this.model); }
 active = true;
 newSite() {
 this.model = new Site(5, '', '');
 this.active = false;
 setTimeout(() => this.active = true, 0);
 }

}
