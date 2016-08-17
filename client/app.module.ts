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
import { Content } from './app/content/content.component';
import { ContentCreateComponent } from './app/content/content-create.component';
import { ContentEditComponent } from './app/content/content-edit.component';
import { ContentFormComponent } from './app/content/content-form.component';
import { MustsService } from './app/shared/services/musters.service';

if (process.env.ENV === 'production') 
  enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [  AppComponent, Home, Header, Content, ContentCreateComponent, ContentEditComponent, ContentFormComponent ],
  bootstrap: [ AppComponent ],
  providers: [ MustsService ]
})
export class AppModule { }
