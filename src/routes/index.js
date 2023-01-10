import { useRoutes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from "src/components/MainLayout";

export const ROUTER = "/";
export const ROUTER_NOT_FOUND = "*";
export const ROUTER_INTRO = "intro";
export const ROUTER_TEST = "test";
export const ROUTER_LOADING = "loading";
export const ROUTER_RESULT = "result";

const ErrorPage = lazy(() => import("src/page/error"));
const IntroPage = lazy(() => import("src/page/intro"));
const TestPage = lazy(() => import("src/page/test"));
const LoadingPage = lazy(() => import("src/page/loading"));
const ResultPage = lazy(() => import("src/page/result"));

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
