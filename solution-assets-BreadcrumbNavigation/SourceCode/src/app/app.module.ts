import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuService } from './menu.service';
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './departments/departments.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CivilComponent } from './departments/civil/civil.component';
import { CseComponent } from './departments/cse/cse.component';
import { EceComponent } from './departments/ece/ece.component';
import { TechnicalfacultyComponent } from './faculty/technicalfaculty/technicalfaculty.component';
import { NontechnicalfacultyComponent } from './faculty/nontechnicalfaculty/nontechnicalfaculty.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentsComponent,
    FacilitiesComponent,
    FacultyComponent,
    AboutusComponent,
    CivilComponent,
    CseComponent,
    EceComponent,
    TechnicalfacultyComponent,
    NontechnicalfacultyComponent
  ],
  imports: [
    BrowserModule,FormsModule, RouterModule,
    AppRoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
