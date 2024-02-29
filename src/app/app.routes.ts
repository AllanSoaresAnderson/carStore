import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistersComponent } from './pages/registers/registers.component';
import { SideLayoutComponent } from './layouts/side-layout/side-layout.component';

export const routes: Routes = [
    {path: 'Login', component: LoginComponent , pathMatch: 'full', },
    {
        path: '',
        component: SideLayoutComponent,
        children:[
            {path: 'Registers', component: RegistersComponent },
            {path: 'home', component: DashboardComponent },
        ]
    },
    {path: '**', redirectTo: '/Login', pathMatch: 'full'},
];
