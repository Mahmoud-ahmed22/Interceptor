import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }

  userToken = "";

  httpOptions = {
    headers: new HttpHeaders({
      'authorization': 'Bearer'
    })
  }

  createNotes(data:any) {
    const url = "http://localhost:8000/notes";

    return this.http.post(url, data, this.httpOptions);
  }


}
