import ChevronBackSvg from "@/assets/SVG/ChevronBackSvg";
import KeySvg from "@/assets/SVG/KeySvg";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
import ArrowUpSvg from "@/assets/SVG/ArrowUpSvg";

export default function DashboardSettingsChangePassword() {
  const navigate = useNavigate();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
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
          <div className="w-full flex items-center justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full m-6 space-y-6"
            >
              <p className="text-xl md:text-2xl lg:text-[32px] font-medium leading-9 mb-1">
                Current Password
              </p>
              <p className="text-sm md:text-base text-text mt-1">
                Please fill your information below
              </p>

              {/* current passworrd */}
              <div>
                <label>Current Password </label>
                <div
                  className={`w-full bg-[#0000004D] py-4 px-6 flex border items-center gap-2 justify-between rounded-2xl mt-3 ${
                    errors?.current_password
                      ? "border-red-500"
                      : "border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <p className="w-6 h-6">
                      <KeySvg />
                    </p>
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      {...register("current_password", { required: true })}
                      placeholder={"********"}
                      className="w-full placeholder:text-base outline-none focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? (
                      <LuEye className="text-xl md:text-2xl text-text" />
                    ) : (
                      <LuEyeOff className="text-xl md:text-2xl text-text" />
                    )}
                  </button>
                </div>
              </div>

              {/* new password */}
              <div>
                <label>New Password </label>
                <div
                  className={`w-full bg-[#0000004D] py-4 px-6 flex border items-center gap-2 justify-between rounded-2xl mt-3 ${
                    errors?.new_password
                      ? "border-red-500"
                      : "border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <p className="w-6 h-6">
                      <KeySvg />
                    </p>
                    <input
                      type={showNewPassword ? "text" : "password"}
                      {...register("new_password", { required: true })}
                      placeholder={"********"}
                      className="w-full placeholder:text-base outline-none focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? (
                      <LuEye className="text-xl md:text-2xl text-text" />
                    ) : (
                      <LuEyeOff className="text-xl md:text-2xl text-text" />
                    )}
                  </button>
                </div>
              </div>

              {/*Confirm Password  */}
              <div>
                <label>New Password </label>
                <div
                  className={`w-full bg-[#0000004D] py-4 px-6 flex border items-center gap-2 justify-between rounded-2xl mt-3 ${
                    errors?.new_password
                      ? "border-red-500"
                      : "border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <p className="w-6 h-6">
                      <KeySvg />
                    </p>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirm_password", {
                        required: true,
                        validate: (value) => {
                          if (value != watch("new_password"))
                            return "Password don't match!";
                        },
                      })}
                      placeholder={"********"}
                      className="w-full placeholder:text-base outline-none focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <LuEye className="text-xl md:text-2xl text-text" />
                    ) : (
                      <LuEyeOff className="text-xl md:text-2xl text-text" />
                    )}
                  </button>
                </div>

                {errors?.confirm_password ? (
                  <p role="alert" className="text-xs text-red-500 py-1">
                    {errors?.confirm_password.message}
                  </p>
                ) : (
                  <p className="py-1"> </p>
                )}
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
    </div>
  );
}
