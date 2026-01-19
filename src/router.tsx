import { createBrowserRouter } from "react-router-dom";
// import { lazyImport } from "./utils/lazyimport.ts";
import { lazy } from "react";

const LandingPage = lazy(() => import("./components/webPage/landing"));

const SignUp = lazy(() => import("./components/onboarding/signup"));

const Dashboard = lazy(() => import("./components/dashboard/layout/layout"));
const DashboardLanding = lazy(
  () => import("./components/dashboard/landing/dashboard")
);
const EnvironmentalDashboard = lazy(
  () => import("./components/dashboard/environmental/environmental-manu/environmental")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardLanding />,
      },
      {
        path: "environmental",
        element: <EnvironmentalDashboard />,
      },
    ],
  },
]);
