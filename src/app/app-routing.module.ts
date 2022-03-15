import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleListComponent } from './example-list/example-list.component';

const routes: Routes = [
  {path:"example-list", component: ExampleListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
