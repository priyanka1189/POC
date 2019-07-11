import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

interface user {
  name: string,
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  private userlist: user[];
  private isGetUserListLoading: boolean;

  private observableUserSubject = new Subject();
  private observeUserList = this.observableUserSubject.asObservable();

  constructor(private http: HttpClient) { }

  setUserData(userlist) {
    this.userlist = userlist;
  }

  getUserData() {
    if (this.userlist && !this.isGetUserListLoading) {
      return this.userlist;
    } else if(!this.isGetUserListLoading) {
      this.getData();
    }
    return this.observeUserList;
  }

  getData() {
    this.isGetUserListLoading = true;
   return this.http.get('http://localhost:8080/testdata').subscribe((res: user[]) => {
      this.isGetUserListLoading = false;
      this.setUserData(res);
      this.observableUserSubject.next(res);
      console.log('response : ', res);
    });

  }
}
