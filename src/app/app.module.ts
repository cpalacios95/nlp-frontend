//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SingupComponent } from './components/pages/singup/singup.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AdminComponent } from './components/home/admin/admin.component';
import { ProfessorComponent } from './components/home/professor/professor.component';
import { StudentComponent } from './components/home/student/student.component';
import { SidebarComponent } from './components/home/admin/sidebar/sidebar.component';
import { ProfileAdminComponent } from './components/home/admin/profile-admin/profile-admin.component';
import { NewPasswordComponent } from './components/pages/new-password/new-password.component';

//angular-material
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

//providers
import { AUTHINTERCEPTORPROVIDERS } from './services/auth.interceptor.services';
import { ProfileProfessorComponent } from './components/home/professor/profile-professor/profile-professor.component';
import { SidebarProfessorComponent } from './components/home/professor/sidebar-professor/sidebar-professor.component';
import { InicioProfessorComponent } from './components/home/professor/inicio-professor/inicio-professor.component';
import { InicioStudentComponent } from './components/home/student/inicio-student/inicio-student.component';
import { SidebarStudentComponent } from './components/home/student/sidebar-student/sidebar-student.component';
import { ProfileStudentComponent } from './components/home/student/profile-student/profile-student.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { ModificarAdminComponent } from './components/home/admin/modificar-admin/modificar-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    NavbarComponent,
    AdminComponent,
    ProfessorComponent,
    StudentComponent,
    SidebarComponent,
    ProfileAdminComponent,
    ProfileProfessorComponent,
    SidebarProfessorComponent,
    InicioProfessorComponent,
    InicioStudentComponent,
    SidebarStudentComponent,
    ProfileStudentComponent,
    ForgotPasswordComponent,
    ModificarAdminComponent,
    NewPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule
  ],
  providers: [ AUTHINTERCEPTORPROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule { }
