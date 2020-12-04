import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { BooksViewComponent } from './books-view/books-view.component';

import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { AuthGuard } from './services/auth-guard.service';
import { BooksService } from './services/books.service';

import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ModifyBookComponent } from './modify-book/modify-book.component';

const appRoutes: Routes = [
  { path: 'signup', component: SignupFormComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'books', canActivate: [AuthGuard], component: BooksViewComponent },
  { path: 'add-book', canActivate: [AuthGuard], component: AddBookComponent },
  { path: 'book-detail/:id', canActivate: [AuthGuard], component: BookDetailComponent },
  { path: 'modify-book/:id' , canActivate: [AuthGuard], component: ModifyBookComponent },
  { path: '', canActivate: [AuthGuard], component: BooksViewComponent},
  { path: '**', redirectTo: 'not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    FourOhFourComponent,
    BooksViewComponent,
    NavbarComponent,
    BookComponent,
    AddBookComponent,
    BookDetailComponent,
    ModifyBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    UsersService,
    AuthGuard,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
