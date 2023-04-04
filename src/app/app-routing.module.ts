import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { TwoFormGroupComponent } from './two-form-group/two-form-group.component';

const routes: Routes = [
  {
    path: 'task-1',
    component: TwoFormGroupComponent,
  },
  {
    path: 'task-2',
    component: InlineEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
