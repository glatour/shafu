import { bootstrap } from '@angular/platform-browser-dynamic';
import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule }   from '@angular/router';

import { routes } from './app/router';

import { AppComponent } from './app/app.component';
import { Home } from './app/home/home.component';
import { Header } from './app/shared/header/header.component';
import { ContentView } from './app/content/content-view.component';
import { ContentCreateComponent } from './app/content/content-create.component';
import { ContentEditComponent } from './app/content/content-edit.component';
import { ContentFormComponent } from './app/content/content-form.component';
import { MustsService } from './app/shared/services/musters.service';

import { MediumEditorComponent } from './app/shared/medium-editor/medium-editor.component'

if (process.env.ENV === 'production') 
  enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [  MediumEditorComponent, AppComponent, Home, Header, ContentView, ContentCreateComponent, ContentEditComponent, ContentFormComponent ],
  bootstrap: [ AppComponent ],
  providers: [ MustsService ]
})
export class AppModule { }
