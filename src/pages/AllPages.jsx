import { Link } from "react-router-dom";

const AllPages = () => {
  const AllPagesLinks = [
    {
      name: "Login Page",
      link: "/auth",
    },
    {
      name: "Sign Up Page",
      link: "/auth/sign-up",
    },
    {
      name: "Set Password Page",
      link: "/auth/set-password",
    },
    {
      name: "Verify Account Page",
      link: "/auth/verify-account",
    },
    {
      name: "Verified Success Page",
      link: "/auth/verified-success",
    },
    // {
    //   name: "",
    //   link: "#",
    // },
    // {
    //   name: "",
    //   link: "#",
    // },
    // {
    //   name: "Dashboard Overview Page",
    //   link: "/dashboard",
    // },
    // {
    //   name: "Dashboard Wallet Page",
    //   link: "/dashboard/wallet",
    // },
    // {
    //   name: "Dashboard Create Match Page",
    //   link: "/dashboard/create-match",
    // },
    // {
    //   name: "Dashboard Match Lobby Page",
    //   link: "/dashboard/match-lobby",
    // },
    // {
    //   name: "Dashboard Bet Page",
    //   link: "/dashboard/bet",
    // },
    // {
    //   name: "Dashboard Match Result Page",
    //   link: "/dashboard/match-result",
    // },
    // {
    //   name: "Dashboard Match Queue Page",
    //   link: "/dashboard/match-queue",
    // },
  ];

  return (
    <div className="py-28 px-20">
      <h1 className="text-4xl font-bold mb-10">All Pages</h1>
      <ul className="text-xl flex flex-col gap-4">
        {AllPagesLinks.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              target="_blank"
              className="text-black font-semibold duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPages;
