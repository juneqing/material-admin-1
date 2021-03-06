import 'rxjs/add/operator/toPromise';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { AdvertPageComponent } from './pages/advert/advert-page/advert-page.component';
import { AdvertHomePageComponent } from './pages/advert/advert-home-page/advert-home-page.component';
import { AdvertHeaderComponent } from './com/advert-header/advert-header.component';
import { AdvertSidebarComponent } from './com/advert-sidebar/advert-sidebar.component';
import { ConfigService } from './services/config.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashComponent } from './com/hash/hash.component';
import { AdvertPublishTaskPageComponent } from './pages/advert/advert-publish-task-page/advert-publish-task-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdvertPageComponent,
    AdvertHomePageComponent,
    AdvertHeaderComponent,
    AdvertSidebarComponent,
    HashComponent,
    AdvertPublishTaskPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent, data: { label: '登录界面' } },
      {
        path: 'advert', component: AdvertPageComponent, data: { label: '广告商' },
        children: [
          { path: '', component: AdvertHomePageComponent, data: { label: '首页' }, children: [] },
          { path: 'publish-task', component: AdvertPublishTaskPageComponent, data: { label: '发布广告任务' }, children: [] }
        ]
      }
    ]),
    FormsModule,
    HttpModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
