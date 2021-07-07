import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { VectorMapComponent1 } from "./vector-map/vector-map.component";

import { RouterModule } from "@angular/router";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { DxVectorMapModule } from "devextreme-angular";
import { BsDropdownModule, PaginationModule } from "ngx-bootstrap";
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ProfileComponent } from './profile/profile.component';
import { GererProfileComponent } from './gerer-profile/gerer-profile.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule.forRoot(),
    DxVectorMapModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),

  ],
  declarations: [
    FooterComponent,
    VectorMapComponent1,
    NavbarComponent,
    SidebarComponent,
    ListClientsComponent,
    ProfileComponent,
    GererProfileComponent
  ],
  exports: [
    FooterComponent,
    VectorMapComponent1,
    NavbarComponent,
    SidebarComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ComponentsModule {}
