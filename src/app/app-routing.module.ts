import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: 'products', loadChildren: ()=>
      import('../app/shared/featured/products/products.module').then((m)=> m.ProductsModule)
  },
  {
    path: 'notes', loadChildren: ()=>
    import('../app/shared/featured/notes/notes.module').then((m)=> m.NotesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
