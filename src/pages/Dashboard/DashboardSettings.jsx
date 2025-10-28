import React, { useState } from "react";
import img from "../../assets/images/avatar.png";
import camera from "../../assets/images/camera.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import UserSvg from "@/assets/SVG/UserSvg";
import KeySvg from "@/assets/SVG/KeySvg";
import LinkedSvg from "@/assets/SVG/LinkedSvg";
import InboxSvg from "@/assets/SVG/InboxSvg";
import Swal from "sweetalert2";
import ChevronRightSvg from "@/assets/SVG/ChevronRightSvg";
import TermsConditionsSvg from "@/assets/SVG/TermsConditionsSvg";
import LogoutSvg from "@/assets/SVG/LogoutSvg";
import DeleteSvg from "@/assets/SVG/DeleteSvg";

// sample data
const user = {
  name: "Alex Morgan",
  role: "Manager",
  riotId: "AlexMorgan2311",
  email: "email@gmail.com",
  img: img,
  accountStatus: "active",
  joinDate: "01.07.2023",
};

// sample profile data
const profileSettings = [
  {
    id: 1,
    title: "Edit Profile Information",
    icon: <UserSvg />, 
    route: "/dashboard/settings/edit-profile",
  },
  {
    id: 2,
    title: "Change Password",
    icon: <KeySvg />,
    route: "/dashboard/settings/password-change",
  },
  {
    id: 3,
    title: "Linked Account",
    icon: <LinkedSvg />,
    route: "/dashboard/settings/linked-profile",
  },
  {
    id: 4,
    title: "Contact Support",
    icon: <InboxSvg />,
    route: "/dashboard/settings/contact-support",
  },
];

export default function DashboardSettings() {
  const [photo, setPhoto] = useState();
  const { register } = useForm();

  const handleUserImg = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const selectedImg = URL.createObjectURL(file);
      setPhoto(selectedImg);
    }
  };

  // logout cicked
  const handleLogout = () => {
    Swal.fire({
      title: "Sign Out?",
      text: "Are You Sure you want To Sign Out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7A34DB",
      cancelButtonColor: "#FFEA00",
      confirmButtonText: "Sign Out!",
      background: "#0B1421",
      color: "#ffffff",
      customClass: {
        popup:
          "!border-2 !border-borders !rounded-lg !w-11/12 md:!w-2/3 lg:!w-1/3",
        confirmButton: "!border !border-[#3085d6] !text-primary-blue",
        cancelButton: "!text-[#000]",
        icon: "!size-10 !p-4",
        title: "!text-2xl md:!text-2xl lg:!text-3xl",
        htmlContainer: "!text-sm md:!text-base",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Signed Out!",
          text: "Signed In to manage the website",
          icon: "success",
          background: "#0000004D",
          color: "#ffffff",
          customClass: {
            popup: "!border-2 !border-borders !w-11/12 md:!w-2/3 lg:!w-1/3",
            title: "!text-2xl md:!text-2xl lg:!text-3xl",
            htmlContainer: "!text-sm md:!text-base",
          },
        });
      }
    });
  };

  // delete account
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7A34DB",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      background: "#0B1421",
      color: "#ffffff",
      customClass: {
        popup: "!border-2 !border-borders !w-11/12 md:!w-2/3 lg:!w-1/3",
        icon: "!size-10 !p-4",
        title: "!text-2xl md:!text-2xl lg:!text-3xl",
        htmlContainer: "!text-sm md:!text-base",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Account has been deleted.",
          icon: "success",
          background: "#0B1421",
          color: "#ffffff",
          customClass: {
            popup: "!border-2 !border-borders !w-11/12 md:!w-2/3 lg:!w-1/3",
            title: "!text-2xl md:!text-2xl lg:!text-3xl",
            htmlContainer: "!text-sm md:!text-base",
          },
        });
      }
    });
  };

  return (
    <div className="p-8 text-white text-base">
      {/* top profile content*/}
      <div className="bg-[#0000004D] text-white p-4 md:p-6 lg:p-8 rounded-2xl">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <div>
            <form className="w-fit relative">
              <label htmlFor="userImg">
                {photo ? (
                  <img
                    src={photo}
                    alt=""
                    className="w-[108px] md:aspect-square object-cover object-center rounded-2xl"
                  />
                ) : (
                  <img
                    src={user?.img}
                    alt=""
                    className="w-40 sm:w-[108px] md:aspect-square object-cover object-center rounded-2xl"
                  />
                )}

                <button
                  type="button"
                  className="w-fit rounded-full cursor-pointer absolute right-1 bottom-1"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6">
                    <img
                      src={camera}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
                <input
                  {...register("userImg")}
                  id="userImg"
                  type="file"
                  onChange={handleUserImg}
                  className="w-full hidden"
                />
              </label>
            </form>
          </div>

          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold leading-7 md:leading-8 xl:leading-[38px]">
              {user?.name}
            </h3>
            <p className="text-base md:text-lg leading-7">
              Riot ID - <span className="text-[#FFD700]">{user?.riotId}</span>
            </p>

            <div className="flex items-center gap-32 mt-4">
              <p>
                Account Status{" "}
                <span className="text-[#32CD32]">{user?.accountStatus}</span>
              </p>

              <p >Member Since: <span>{user?.joinDate}</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* profile and account settings */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* profile settings */}
        <div className="space-y-8">
          <p className="text-xl lg:text-2xl xl:text-[30px]">
            Profile Information
          </p>

          <div className="space-y-8">
            {profileSettings?.map((profile, idx) => (
              <div
                key={idx}
                className=""
              >
                <Link
                  to={profile?.route}
                  state={"userSettings"}
                  className="flex items-center justify-between bg-[#0000004D] rounded-2xl p-4 md:p-6 lg:p-8 hover:bg-[#2A2A2A] duration-300"
                >
                  <p className="flex items-center gap-4 text-sm md:text-base">
                    <p className="w-6 h-6">{profile?.icon}</p>
                    <p>{profile?.title}</p>
                  </p>

                  <p className="w-5 h-5 md:w-6 md:h-6">
                    <ChevronRightSvg />
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* account settings */}
        <div className="space-y-8">
          <p className="text-xl lg:text-2xl xl:text-[30px]">Account</p>

          <div className="space-y-8">
            {/*My level option */}
            <div className="bg-[#0B1421] rounded-2xl p-4 md:p-6 lg:p-8 hover:bg-[#2A2A2A] duration-300">
              <Link
                to={"/dashboard/settings/terms-conditions"}
                state={"userSettings"}
                className="flex items-center justify-between "
              >
                <p className="flex items-center gap-4 text-sm md:text-base">
                  <p className="w-6 h-6">
                    <TermsConditionsSvg />
                  </p>
                  <p>Terms And Conditions</p>
                </p>

                <p className="w-5 h-5 md:w-6 md:h-6">
                  <ChevronRightSvg />
                </p>
              </Link>
            </div>

            {/* logout option */}
            <div className="bg-[#0B1421] text-sm md:text-base rounded-2xl p-4 md:p-6 lg:p-8 hover:bg-[#2A2A2A] duration-300">
              <button
                type="button"
                onClick={handleLogout}
                className="w-full flex items-center justify-between cursor-pointer"
              >
                <p className="flex items-center gap-4">
                  <p className="w-6 h-6">
                    <LogoutSvg />
                  </p>
                  <p>Log Out</p>
                </p>

                <p className="w-6 h-6">
                  <ChevronRightSvg />
                </p>
              </button>
            </div>

            {/* delete option */}
            <div className="bg-[#0B1421] text-sm md:text-base rounded-2xl p-4 md:py-4 md:px-6 lg:py-6 lg:px-8 hover:bg-[#2A2A2A] duration-300">
              <buton
                type="button"
                onClick={handleDelete}
                className="flex items-center justify-between cursor-pointer"
              >
                <p className="flex items-center gap-4">
                  <p className="w-6 h-6">
                    <DeleteSvg />
                  </p>
                  <p>Delete Account</p>
                </p>

                <button
                  type="button"
                  className="bg-[#D10028] rounded-full py-2.5 px-6 cursor-pointer hover:bg-red-700 duration-300 ease-in-out"
                >
                  Delete
                </button>
              </buton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
