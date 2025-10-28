import ArrowUpSvg from "@/assets/SVG/ArrowUpSvg";
import ChevronBackSvg from "@/assets/SVG/ChevronBackSvg";
import EmailSvg from "@/assets/SVG/EmailSvg";
import UserSvg from "@/assets/SVG/UserSvg";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function DashboardSettingsEditProfile() {
  // local hooks
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-8">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="py-4 px-3 rounded-full cursor-pointer hover:scale-105 duration-300 mb-5 "
      >
        <p className="w-8 h-8">
          <ChevronBackSvg />
        </p>
      </button>

      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[740px] p-8 bg-gradient-to-r from-[#FFD700]/40 to-[#7A34DB]/30 rounded-2xl text-white">
          <form onSubmit={handleSubmit(onSubmit)} className="m-6 space-y-6">
            <div>
              <p className="text-xl md:text-2xl lg:text-[32px] font-medium leading-9 mb-1">
                Edit Profile
              </p>
              <p className="text-sm md:text-base text-text mt-1">
                Please fill your information below
              </p>
            </div>
            <div>
              <label>Full Name </label>
              <div
                className={`w-full bg-[#0000004D] py-4 px-6 flex border items-center gap-2 rounded-2xl mt-3 ${
                  errors?.name ? "border-red-500" : "border-transparent"
                }`}
              >
                <p className="w-6 h-6">
                  <UserSvg />
                </p>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder={"Alex Doe"}
                  className="w-full placeholder:text-base outline-none focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label>Email Address </label>
              <div
                className={`w-full bg-[#0000004D] py-4 px-6 flex border items-center gap-2 rounded-2xl mt-3 ${
                  errors?.email ? "border-red-500" : "border-transparent"
                }`}
              >
                <p className="w-6 h-6">
                  <EmailSvg />
                </p>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder={"Alex Doe"}
                  className="w-full placeholder:text-base outline-none focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-12 font-bold bg-gradient-to-r from-[#FFEA00] to-[#7A34DB] hover:from-[#FFEA00] hover:to-[#FFEA00]/30  py-3 px-6 rounded-full text-black flex items-center justify-center gap-3 cursor-pointer duration-300"
            >
              Update
              <p className="w-3.5 h-3.5">
                <ArrowUpSvg />
              </p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
