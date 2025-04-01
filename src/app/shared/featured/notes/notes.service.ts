import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }

  userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5jb20iLCJpYXQiOjE3NDM1MzU3ODEsImV4cCI6MTc0MzU3ODk4MX0.IMpOIJhQjgCxEGeTk0xRrxwPXAJMwWZAAjA-9sh8qKU";



  createNotes(data:any) {
    const url = "http://localhost:8000/notes";

    return this.http.post(url, data);
  }


}
