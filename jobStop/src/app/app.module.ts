import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { JobprofileComponent } from './jobprofile/jobprofile.component';
import { CandidateprofileComponent } from './candidateprofile/candidateprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CompanyProfileComponent,
    JobprofileComponent,
    CandidateprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path : 'header' , component : HeaderComponent},
      {path : 'footer' , component : FooterComponent},
      {path : 'companyprofile' , component : CompanyProfileComponent},
      {path : 'candidateprofile', component : CandidateprofileComponent},
      {path : 'jobprofile', component : JobprofileComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
