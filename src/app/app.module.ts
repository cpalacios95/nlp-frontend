import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/pages/login/login.component';
import { SingupComponent } from './components/pages/singup/singup.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AdminComponent } from './components/home/admin/admin.component';
import { ProfessorComponent } from './components/home/professor/professor.component';
import { StudentComponent } from './components/home/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    NavbarComponent,
    AdminComponent,
    ProfessorComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
