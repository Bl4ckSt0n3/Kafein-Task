import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

const apiUrl = {
  createNoteUrl: () => "http://localhost:4200/api/create/",
  getAllNotesUrl: () => "http://localhost:4200/api/",
  updateNoteUrl: () => "http://localhost:4200",
  deleteNoteUrl: () => "http://localhost:4200"
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
  public update(id: number) {

  }
  
  public remove(id: number) {

  }
}
