import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { EditComponent } from './components/edit/edit.component';


@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
