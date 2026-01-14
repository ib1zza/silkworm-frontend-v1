import React from "react";
import { IndexPage, ProductSlugPage } from "@/pages";
import { Route, Routes } from "react-router";

export default function AppRouter() {
  const routes = [
    {
      path: "/",
      element: <IndexPage />,
    },
    {
      path: "/product/:slug",
      element: <ProductSlugPage />,
    },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
