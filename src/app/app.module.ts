// Models
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { CareComponent } from './components/care/care/care.component';
import { HomeComponent } from './components/home/home/home.component';
import { SideBarNavComponent } from './components/sideNav/side-bar-nav/side-bar-nav.component';
import { MyDogFormComponent } from './components/mydog/my-dog-form/my-dog-form.component';

// Services
import { DogService } from './service/dog.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    CareComponent,
    HomeComponent,
    SideBarNavComponent,
    MyDogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
