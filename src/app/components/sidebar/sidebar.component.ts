import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

var misc: any = {
  sidebar_mini_active: true
};

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/home",
    title: "Acceuil",
    type: "link",
    icontype: "ni-shop text-primary",
  },
  // {
  //   path: "/clients",
  //   title: "Gérer clients",
  //   type: "link",
  //   icontype: "ni-single-02 text-primary",
  // },
  {
    path: "/home",
    title: "Gérer Statistiques",
    type: "link",
    icontype: "ni-chart-bar-32",
  },
  // {
  //   path: "/examples",
  //   title: "Gérer assurances",
  //   type: "sub",
  //   icontype: "ni-ungroup text-orange",
  //   collapse: "examples",
  //   isCollapsed: true,
  //   children: [
  //     { path: "pricing", title: "Assurance mobile", type: "link" },
  //     { path: "login", title: "Assurance prévoyance", type: "link" },
  //     { path: "register", title: "Assurance maison", type: "link" },
  //   ]
  // },
  {
    path: "",
    title: "Acteurs LLOYD",
    type: "sub",
    icontype: "ni-single-02",
    collapse: "examples",
    isCollapsed: true,
    children: [
      { path: "Liste-Assureurs", title: "Liste d'Assureurs", type: "link" },
      { path: "Liste-Clients", title: "Liste des clients", type: "link" },
  
    ]
  },
  {
    path: "/components",
    title: "Gérer profil",
    type: "link",
    icontype: "ni-settings-gear-65 text-info",
    collapse: "components",
  },
  {
    path: "/forms",
    title: "Témoinages",
    type: "link",
    icontype: "ni-chat-round text-pink",
    collapse: "forms",
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe(event => {
      this.isCollapsed = true;
    });
  }
  onMouseEnterSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  }
  onMouseLeaveSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  }
  minimizeSidebar() {
    const sidenavToggler = document.getElementsByClassName(
      "sidenav-toggler"
    )[0];
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("g-sidenav-pinned")) {
      misc.sidebar_mini_active = true;
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
      body.classList.remove("g-sidenav-pinned");
      body.classList.add("g-sidenav-hidden");
      sidenavToggler.classList.remove("active");
      misc.sidebar_mini_active = false;
    } else {
      body.classList.add("g-sidenav-pinned");
      body.classList.remove("g-sidenav-hidden");
      sidenavToggler.classList.add("active");
      misc.sidebar_mini_active = true;
    }
  }
}
