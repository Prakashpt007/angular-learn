import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './data-sharing/student/student.component';
import { ParentStudentComponent } from './data-sharing/parent-student/parent-student.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { BindingComponent } from './binding/binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { TableSortPipe } from './table-sort.pipe';
import { TempConverterPipe } from './temp-converter.pipe';
import { CustomFileSizePipe } from './custom-file-size.pipe';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiRequestComponent } from './api-request/api-request.component';
import { LoaderComponent } from './service/loader.component';
import { LoaderInterceptor } from './service/loader.interceptor';
import { LoaderService } from './service/loader.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchTableComponent } from './search-table/search-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewChildComponent } from './view-child/view-child.component';
import { DarkLightModeComponent } from './dark-light-mode/dark-light-mode.component';
import { PromiseObjectCallComponent } from './promise-object-call/promise-object-call.component';
import { HttpGetRequestComponent } from './http-get-request/http-get-request.component';
import { HighlightDirective } from './highlight.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { SentencePipe } from './pipes/sentence.pipe';
import { ObservableCallComponent } from './observable-call/observable-call.component';
import { TemplateDrivenFromComponent } from './form/template-driven-from/template-driven-from.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ParentStudentComponent,
    // TemplateDrivenFormComponent,
    FormComponent,
    ReactiveFormComponent,
    BindingComponent,
    PipesComponent,
    TableSortPipe,
    TempConverterPipe,
    CustomFileSizePipe,
    LifecycleHooksComponent,
    ApiRequestComponent,
    LoaderComponent,
    SearchTableComponent,
    ViewChildComponent,
    DarkLightModeComponent,
    PromiseObjectCallComponent,
    HttpGetRequestComponent,
    HighlightDirective,
    CustomDirectiveComponent,
    SentencePipe,
    ObservableCallComponent,
    TemplateDrivenFromComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
