import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { TypographyComponent } from './typography/typography.component';
import { IconComponent } from './icon/icon.component';
import { CardsComponent } from './cards/cards.component';
import { TabelsComponent } from './tabels/tabels.component';
import { FormsComponent } from './forms/forms.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  { path: 'dash', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'regi', component: RegisterComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'typo', component: TypographyComponent },
  { path: 'icon', component: IconComponent },
  { path: 'card', component: CardsComponent },
  { path: 'table', component: TabelsComponent },
  { path: 'form', component: FormsComponent },
  { path: 'acc', component: SettingComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
