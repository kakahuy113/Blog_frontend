import React, { Component, ReactElement } from "react";
//Sites
import { HomePage } from "pages/Site/Home";
import { Contact } from "pages/Site/Contact";
import { Portfolio } from "pages/Site/Portfolio";
import { Resume } from "pages/Site/Resume";
//Admin
import { HomeAdmin } from "pages/Admin/HomeAdmin";
interface route {
  path: string;
  exact: boolean | undefined;
  component: React.ComponentType<any> | undefined;
}

const SiteRoutes: route[] = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/contact",
    exact: true,
    component: Contact,
  },
  {
    path: "Portfolio",
    exact: true,
    component: Portfolio,
  },
  {
    path: "/resume",
    exact: true,
    component: Resume,
  },
];

const AdminRoutes: route[] = [
  {
    path: "/administrator",
    exact: true,
    component: HomeAdmin,
  },
];

export { SiteRoutes, AdminRoutes };
