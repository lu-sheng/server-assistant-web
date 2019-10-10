import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TimestampService {
  //  timestamp: string;
  // timestampStr: string;
  //  timestampToStringUrl = 'http://localhost:9090/server/timestampToString/${this.timestamp}';  // URL to web api
  //  strToTimestampUrl = 'http://localhost:9090/timestampToString/${timestampStr}';

  private serviceUrl = 'http://127.0.0.1:9090';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})
  };

  constructor(private http: HttpClient) {

  }
  
  getTimestampStr(timestamp:string):Observable<JSON>{
    return this.http.get<JSON>("/server/timestampToString/"+timestamp);
}

getTimestamp(timestampStr:string,param):Observable<JSON>{

  return this.http.get<JSON>("/server/stringToTimestamp?"+
  "timeStr="+param["timeStr"]+"&dateFormat="+param["dateFormat"]);
}

}
