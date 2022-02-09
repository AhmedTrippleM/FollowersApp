import { RouterModule } from '@angular/router';
import { AppErrorHandler } from './Validation/app-handler-error';
import { PostService } from './services/post-service.service';
import { AppComponent } from './app.component';
import { NgModule, ErrorHandler, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { SvgComponent } from './svg/svg.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CoursesComponent } from './courses/courses.component';
import { SummaryPipe } from './summary.pipe';
import { TextFormatPipe } from './text-format.pipe';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormArrayComponent } from './new-course-form-array/new-course-form-array.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ApiPostComponent } from './api-post/api-post.component';
import { AppError } from './app-error';
import { DataService } from './services/data.service';
import { GithubFollowerComponent } from './github-follower/github-follower.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/login/login.component';
import { NoAccessComponent } from './component/no-access/no-access.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemDetailsComponent,
    SvgComponent,
    ParentComponent,
    ChildComponent,
    CoursesComponent,
    SummaryPipe,
    TextFormatPipe,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormArrayComponent,
    ChangePasswordComponent,
    ApiPostComponent,
    GithubFollowerComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    ArchiveComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent,
    HomePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'followers', component: GithubFollowerComponent },
      { path: 'followers/:id/:username', component: GithubProfileComponent },
      { path: 'posts', component: ApiPostComponent },

      { path: 'admin', component: AdminComponent },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent },


      { path: 'archive/:year/:month', component: ArchiveComponent },
      { path: '**', component: NotFoundComponent },

    ])

  ],
  providers: [
    PostService,
    AuthService,



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
