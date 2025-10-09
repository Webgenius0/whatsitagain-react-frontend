import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <section className="customBgLayout flex justify-center items-center">
      <Outlet />
    </section>
  );
}
