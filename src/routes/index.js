import { useRoutes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loadable from "src/components/Loader/loadable";
import MainLayout from "src/components/Layout/MainLayout";

export const ROUTER = "/new_test/";
export const ROUTER_NOT_FOUND = "*";
export const ROUTER_INTRO = "intro";
export const ROUTER_TEST = "test";
export const ROUTER_LOADING = "loading";
export const ROUTER_RESULT = "result";

export const INTRO = ROUTER.concat(ROUTER_INTRO);
export const TEST = ROUTER.concat(ROUTER_TEST);
export const LOADING = ROUTER.concat(ROUTER_LOADING);
export const RESULT = ROUTER.concat(ROUTER_RESULT);

const ErrorPage = Loadable(lazy(() => import("src/page/error")));
const IntroPage = Loadable(lazy(() => import("src/page/intro")));
const TestPage = Loadable(lazy(() => import("src/page/test")));
const LoadingPage = Loadable(lazy(() => import("src/page/loading")));
const ResultPage = Loadable(lazy(() => import("src/page/result")));

const MainRoutes = {
  path: ROUTER,
  element: <MainLayout />,
  children: [
    {
      path: ROUTER_NOT_FOUND,
      element: <ErrorPage />,
    },
    {
      path: "",
      element: <IntroPage />,
    },
    {
      path: ROUTER_INTRO,
      element: <IntroPage />,
    },
    {
      path: ROUTER_TEST,
      element: <TestPage />,
    },
    {
      path: ROUTER_LOADING,
      element: <LoadingPage />,
    },
    {
      path: ROUTER_RESULT,
      element: <ResultPage />,
    },
  ],
};

export default function ThemeRoutes() {
  return useRoutes([MainRoutes], "");
}
