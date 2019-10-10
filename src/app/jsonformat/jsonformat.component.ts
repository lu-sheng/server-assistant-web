import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsonformat',
  templateUrl: './jsonformat.component.html',
  styleUrls: ['./jsonformat.component.css']
})
export class JsonformatComponent implements OnInit {

  jsonStr: string;
  jsonFormatStr: string;
  errorMsg:string
  constructor() { }

  ngOnInit() {
  }

  formatJson() {
    if (this.jsonStr == undefined) {
      alert("输入内容为空")
    } else {
      try{
        this.jsonFormatStr = this.jsonFormat(this.jsonStr);
      }catch(e){
        this.errorMsg="请检查json格式是否正确"
      }
    }
  }
  cleanJson() {
    this.jsonStr = "";
    this.jsonFormatStr = "";
    this.errorMsg="";
  }

  //  方法2：pre + JSON.stringify
  jsonFormat(str) {
    // str = JSON.stringify(JSON.parse(str), null, "\t");
    // 设置缩进为2个空格
    str = JSON.stringify(JSON.parse(str), null, 4);
    return str;
  };



}
