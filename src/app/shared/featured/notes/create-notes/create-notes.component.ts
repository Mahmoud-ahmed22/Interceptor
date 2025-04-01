import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  noteForm:any;
  success: boolean = false;
constructor(private fb:FormBuilder, private notesService:NotesService) {
  
}

get f() {
  return this.noteForm.controls
}

ngOnInit(): void {
  this.initform();
}
submitForm(){
  // if (this.noteForm.valid) {
    this.notesService.createNotes(this.noteForm.value).subscribe(res=>{
      console.log(res);
    }, err=> {
      console.log(err);
    });
    this.success = true;
  // }
};

initform() {
  this.noteForm = this.fb.group({
    title: ['', Validators.required],
    priority: ['', Validators.required],
    tags: ['', Validators.required],
    content: ['', Validators.required],
    category: ['', Validators.required],
  });
}

}