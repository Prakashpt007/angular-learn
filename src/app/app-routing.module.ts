import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { ApiRequestComponent } from './api-request/api-request.component';
import { BindingComponent } from './binding/binding.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { DarkLightModeComponent } from './dark-light-mode/dark-light-mode.component';
import { ParentStudentComponent } from './data-sharing/parent-student/parent-student.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { HttpGetRequestComponent } from './http-get-request/http-get-request.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { PipesComponent } from './pipes/pipes.component';
import { PromiseObjectCallComponent } from './promise-object-call/promise-object-call.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  {
    path: 'data-sharing',
    component: ParentStudentComponent,
  },

  // {
  //   path: 'template-driven-forms',
  //   component: TemplateDrivenFormComponent
  // },

  {
    path: 'forms',
    component: FormComponent,
  },
  {
    path: 'binding',
    component: BindingComponent,
  },

  {
    path: 'pipes',
    component: PipesComponent,
  },

  {
    path: 'lifecycle-hooks',
    component: LifecycleHooksComponent,
  },
  {
    path: 'api-request',
    component: ApiRequestComponent,
  },
  {
    path: 'search-table',
    component: SearchTableComponent,
  },
  {
    path: 'view-child',
    component: ViewChildComponent,
  },
  {
    path: 'dark-light-mode',
    component: DarkLightModeComponent,
  },
  {
    path: 'promise-call',
    component: PromiseObjectCallComponent,
  },
  {
    path: 'http-get-request',
    component: HttpGetRequestComponent,
  },
  {
    path: 'custom-directive',
    component: CustomDirectiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
