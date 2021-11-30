import React, { useState, useEffect } from "react";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import { AnimatedSwitch, spring } from "react-router-transition";
import { Admin } from "layouts/Admin";
import { Site } from "layouts/Site";
import { AdminRoutes, SiteRoutes } from "routes/RootRoute";
import history from "routes/history";
// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles: any) {
  let props = {};
  if (styles.scale === 1) {
    props = { opacity: styles.opacity, transform: "initial" };
  } else {
    props = { ...styles, transform: `scale(${styles.scale})` };
  }
  return { ...props };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val: number) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

const animation = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0.5,
    scale: 1.1,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: 0,
    scale: bounce(0.5),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: 1,
    scale: bounce(1),
  },
};

const SiteLayout: React.FC = ({ children }) => {
  return <Site>{children}</Site>;
};

const AdminLayout: React.FC = ({ children }) => {
  return <Admin>{children}</Admin>;
};
interface RouterProps {}

export const RouterLayout: React.FC<RouterProps> = ({}) => {
  const [IsAdministrator, setIsAdministrator] = useState<
    Boolean | null | undefined
  >(false);
  useEffect(() => {
    if (window.location.pathname.indexOf("administrator") !== -1) {
      setIsAdministrator(true);
    }
    return () => {};
  }, []);
  return (
    <Router history={history}>
      {IsAdministrator ? (
        <AdminLayout>
          <AnimatedSwitch
            className="switch-wrapper"
            {...animation}
            mapStyles={mapStyles}
          >
            {AdminRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              ></Route>
            ))}
          </AnimatedSwitch>
        </AdminLayout>
      ) : (
        <SiteLayout>
          <AnimatedSwitch
            className="switch-wrapper"
            {...animation}
            mapStyles={mapStyles}
          >
            {SiteRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              ></Route>
            ))}
          </AnimatedSwitch>
        </SiteLayout>
      )}
    </Router>
  );
};
