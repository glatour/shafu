import { bootstrap } from '@angular/platform-browser-dynamic';
import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule }   from '@angular/router';
import { NgRedux } from 'ng2-redux';

import { routes } from './app/router';

import { AppComponent } from './app/app.component';
import { Home } from './app/home/home.component';
import { Header } from './app/shared/components/header/header.component';
import { ContentView } from './app/content/content-view.component';
import { ContentCreateComponent } from './app/content/content-create.component';
import { ContentEditComponent } from './app/content/content-edit.component';
import { ContentFormComponent } from './app/content/content-form.component';
import { MustsService } from './app/shared/services/musters.service';
import { FiltersComponent } from './app/shared/components/filters/filters.component';
import { MediumEditorComponent } from './app/shared/components/medium-editor/medium-editor.component';
import { MomentCalendarPipe, MomentFromNowPipe } from './app/shared/pipes/moment/moment.pipe';

if ( process.env.ENV === 'production' )
  enableProdMode();

@NgModule( {
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot( routes, { useHash: true })
  ],
  declarations: [
    MediumEditorComponent,
    MomentCalendarPipe,
    MomentFromNowPipe,
    AppComponent,
    Home,
    Header,
    FiltersComponent,
    ContentView,
    ContentCreateComponent,
    ContentEditComponent,
    ContentFormComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    MustsService,
    NgRedux
  ]
})
export class AppModule { }