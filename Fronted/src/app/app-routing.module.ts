import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatPostComponent } from './creat-post/creat-post.component';

const routes: Routes = [
  {
    path:'', component:CreatPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
