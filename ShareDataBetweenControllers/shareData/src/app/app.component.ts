import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient){
    this.http.get('localhost:8080/testdata').subscribe((res)=>{
        console.log('response : ',res);
    });
  }
  title = 'shareData';
}
