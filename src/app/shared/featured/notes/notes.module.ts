import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesRoutingModule } from './notes-routing.module';
import { UpdateNotesComponent } from './update-notes/update-notes.component';
import { ShowNotesComponent } from './show-notes/show-notes.component';
import { NotesComponent } from './notes/notes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateNotesComponent } from './create-notes/create-notes.component';


@NgModule({
  declarations: [
    UpdateNotesComponent,
    UpdateNotesComponent,
    CreateNotesComponent,
    ShowNotesComponent,
    NotesComponent,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class NotesModule { }
