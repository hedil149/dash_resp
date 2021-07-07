import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {AuthLayoutComponent} from "./layouts/auth-layout/auth-layout.component";
import {PresentationComponent} from "./pages/presentation/presentation.component";
import {ListClientsComponent} from "./components/list-clients/list-clients.component";
import { GererProfileComponent } from "./components/gerer-profile/gerer-profile.component";
import { DashboardComponent } from "./pages/dashboards/dashboard/dashboard.component";



const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "Gerer-profile",
        component: GererProfileComponent,
    },
    {
        path: "presentation",
        component: PresentationComponent
    },
    {
        path: "",
        component: AdminLayoutComponent,
        children: [
            {
                path: "clients",
                component: ListClientsComponent
            },
           
            {
                path: "dashboard",
                component: DashboardComponent
            },
            {
                path: "components",
                loadChildren: "./pages/components/components.module#ComponentsModule"
            },
            {
                path: "forms",
                loadChildren: "./pages/forms/forms.module#FormsModules"
            },
            {
                path: "tables",
                loadChildren: "./pages/tables/tables.module#TablesModule"
            },
            {
                path: "maps",
                loadChildren: "./pages/maps/maps.module#MapsModule"
            },
            {
                path: "widgets",
                loadChildren: "./pages/widgets/widgets.module#WidgetsModule"
            },
            {
                path: "charts",
                loadChildren: "./pages/charts/charts.module#ChartsModule"
            },
            {
                path: "calendar",
                loadChildren: "./pages/calendar/calendar.module#CalendarModule"
            },
            {
                path: "examples",
                loadChildren: "./pages/examples/examples.module#ExamplesModule"
            }
        ]
    },
    {
        path: "",
        component: AuthLayoutComponent,
        children: [
            {
                path: "examples",
                loadChildren:
                    "./layouts/auth-layout/auth-layout.module#AuthLayoutModule"
            }
        ]
    },
    
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
