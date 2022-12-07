import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "components/AppBar/AppBar";

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
