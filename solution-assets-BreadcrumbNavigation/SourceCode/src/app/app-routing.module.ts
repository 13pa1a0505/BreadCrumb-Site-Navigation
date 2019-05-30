
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './departments/departments.component';
import { MenuService } from './menu.service';
import { CseComponent } from './departments/cse/cse.component';
import { EceComponent } from './departments/ece/ece.component';
import { CivilComponent } from './departments/civil/civil.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { TechnicalfacultyComponent } from './faculty/technicalfaculty/technicalfaculty.component';
import { NontechnicalfacultyComponent } from './faculty/nontechnicalfaculty/nontechnicalfaculty.component';
const routes: Routes = [
  { 
    path: 'home',  component:  HomeComponent}, 
    
      {
        path: 'departments', component:DepartmentsComponent},
        { path: 'faculty', component:FacultyComponent},
        { path: 'faculty/technicalfaculty', component:TechnicalfacultyComponent},
        { path: 'faculty/nontechnicalfaculty', component:NontechnicalfacultyComponent},
        { path: 'facilities', component:FacilitiesComponent},
        { path: 'aboutus', component:AboutusComponent},
         { path: 'departments/civil', component: CivilComponent },
          {path: 'departments/cse' , component:CseComponent },
          {  path: 'departments/ece', component:EceComponent
                      
          
    
  },
  
  { path: '', redirectTo: 'home', pathMatch: 'full' }
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

