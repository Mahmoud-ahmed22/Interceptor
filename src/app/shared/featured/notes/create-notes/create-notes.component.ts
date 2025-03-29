import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  noteForm:any;
  success: boolean = false;
constructor(private fb:FormBuilder) {
  
}

get f() {
  return this.noteForm.controls
}

ngOnInit(): void {
  this.initform();
}
submitForm(){
  if (this.noteForm.valid) {
    console.log(this.noteForm.value);
    this.success = true;
  }
};

initform() {
  this.noteForm = this.fb.group({
    title: ['', Validators.required],
    priority: ['', Validators.required],
    tag: ['', Validators.required],
    content: ['', Validators.required],
    category: ['', Validators.required],
  });
}

}