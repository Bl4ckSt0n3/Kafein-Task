import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

const apiUrl = {
  createNoteUrl: () => "http://localhost:4200/api/create/",
  getAllNotesUrl: () => "http://localhost:4200/api/",
  updateNoteUrl: () => "http://localhost:4200/api/update/",
  deleteNoteUrl: () => "http://localhost:4200/api/delete/",
  authUrl: () => "http://127.0.0.1:4200/api/auth/"
}

@Injectable({
  providedIn: 'root'
})

export class NoteAppService {

  constructor(private http: HttpClient) { }

  public create(data: any) {
    return this.http.post(apiUrl.createNoteUrl(), data).pipe(map((res: any) => res));
  }
  public read() {
    // console.log(this.http.get(apiUrl.getAllNotesUrl()));
    return this.http.get(apiUrl.getAllNotesUrl()).pipe(map((res: any) => res));
  }
  public update(data: any) {
    return this.http.post(apiUrl.updateNoteUrl(), data).pipe(map((res: any) => res));
  }
  
  public remove(id: number) {
    var data = {id : id};
    return this.http.post(apiUrl.deleteNoteUrl(), data).pipe(map((res: any) => res));
  }

  public login(username: any, password: any) {
    let userdata: any = {username: username, password: password};
    return this.http.post(apiUrl.authUrl(), userdata).pipe(map((res: any) => res));
  }
}
