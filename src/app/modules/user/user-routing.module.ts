import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'create', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
