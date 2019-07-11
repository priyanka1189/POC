import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageOneComponent } from './page-one/page-one.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreDataService } from './services/store-data.service';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'page1' },
  { path: 'page1', component: PageOneComponent},
  { path: 'page2', component: PageTwoComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    PageTwoComponent,
    PageOneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } 
    )
  ],
  providers: [StoreDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
