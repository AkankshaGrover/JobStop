import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component'
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CompanyProfileComponent } from '../company-profile/company-profile.component';
import { JobprofileComponent } from '../jobprofile/jobprofile.component';
import { CandidateprofileComponent } from '../candidateprofile/candidateprofile.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
// import { CandidatetoolbarComponent } from '../candidatetoolbar/candidatetoolbar.component';
// import { CompanytoolbarComponent } from '../companytoolbar/companytoolbar.component';
import { CandidateStatusComponent } from '../candidate-status/candidate-status.component';
import { CompanyStatusComponent } from '../company-status/company-status.component';
import { ApplicantsComponent } from '../applicants/applicants.component';
import { CompaniesComponent } from '../companies/companies.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'companyprofile', component: CompanyProfileComponent },
    { path: 'candidateprofile', component: CandidateprofileComponent },
    { path: 'jobprofile', component: JobprofileComponent},
    { path: 'candidatestatus', component: CandidateStatusComponent }, 
    { path: 'companystatus', component: CompanyStatusComponent },
    { path: 'totalapplicants', component: ApplicantsComponent },
    { path: 'totaljobs', component: CompaniesComponent }
];