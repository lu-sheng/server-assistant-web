import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { TimestampService } from '../timestamp.service'
import { timer } from 'rxjs';
// import { Observable, of } from 'rxjs';
// import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.css']
})
export class TimestampComponent implements OnInit {
  timestamp1: string;
  timestampStr1: string;
  timestamp2: string;
  timestampStr2: string;
  // nowtimestamp:string;

  nowDate = new Date();
  nowTimestamp = this.nowDate.getTime();
  nowTimestampStr = this.formatDate(this.nowDate);

  
// param={
//   "timeStr":this.timestampStr2,
//   "dateFormat":"yyyy-MM-dd HH:mm:ss"
// }

constructor(private timestampService: TimestampService) {

}


ngOnInit() {

}

//将时间戳转换为字符串
onClickTimestampToStr() {
  console.info(this.timestamp1)
  this.timestampService.getTimestampStr(this.timestamp1).subscribe((data) => {
    // console.info(data)
    this.timestampStr1 = data["timestampStr"];
  })

}

//将字符串转换为时间戳
onClickStrToTimestamp() {
  var param = {
    "timeStr": this.timestampStr2,
    "dateFormat": "yyyy-MM-dd HH:mm:ss"
  }
  // console.info(this.timestampStr2)
  this.timestampService.getTimestamp(this.timestampStr2, param).subscribe((data) => {
    // console.info(data);
    this.timestamp2 = data["timestamp"];

  })
}

//日期工具类
formatDate(nowTimestamp: Date){
  //三目运算符
  const Dates = nowTimestamp;

  //年份
  const Year: number = Dates.getFullYear();

  //月份下标是0-11
  const Months: any = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);

  //具体的天数
  const Day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();

  //小时
  const Hours = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();

  //分钟
  const Minutes = Dates.getMinutes() < 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();

  //秒
  const Seconds = Dates.getSeconds() < 10 ? '0' + Dates.getSeconds() : Dates.getSeconds();

  //返回数据格式
  return Year + '-' + Months + '-' + Day + ' ' + Hours + ':' + Minutes + ':' + Seconds;

}

}
