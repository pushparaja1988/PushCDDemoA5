import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';
import { MainComponent } from './main/main.component';

const appRoutes : Routes =[
 
  {
    path:'',redirectTo:'',pathMatch:'full'
  },
   {
    path: 'test' , component : TestingComponentComponent
  },
  {
    path:'main', component:MainComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestingComponentComponent,
    MainComponent
  ],
  imports: [
    BrowserModule ,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
