import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component'
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CompanyProfileComponent } from '../company-profile/company-profile.component';
import { JobprofileComponent } from '../jobprofile/jobprofile.component';
import { CandidateprofileComponent } from '../candidateprofile/candidateprofile.component';


export const routes: Routes = [
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'companyprofile', component: CompanyProfileComponent },
    { path: 'candidateprofile', component: CandidateprofileComponent },
    { path: 'jobprofile', component: JobprofileComponent},
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
    
];