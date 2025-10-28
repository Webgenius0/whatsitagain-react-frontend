import CallSvg from "@/assets/SVG/CallSvg";
import ChevronBackSvg from "@/assets/SVG/ChevronBackSvg";
import MessageWhiteSvg from "@/assets/SVG/MessageWhiteSvg";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import ArrowUpSvg from "@/assets/SVG/ArrowUpSvg";

// sample data
const categories = [
  {
    id: 1,
    name: "game 1",
  },
  {
    id: 2,
    name: "game 2",
  },
  {
    id: 3,
    name: "game 3",
  },
  {
    id: 4,
    name: "game 4",
  },
];
export default function DashboardSettingsContactSupport() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="p-8 w-full">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="py-4 px-3 rounded-full cursor-pointer hover:scale-105 duration-300 mb-5 "
      >
        <p className="w-6 h-4">
          <ChevronBackSvg />
        </p>
      </button>

      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-[740px] h-auto p-8 bg-gradient-to-r from-[#FFD700]/40 to-[#7A34DB]/30 rounded-2xl text-white">
          <div>
            <p className="text-xl md:text-2xl lg:text-[32px] font-medium leading-9 mb-1">
              Contact Support
            </p>
            <p className="text-sm md:text-base text-text mt-1">
              Get help from our support team. We typically respond within 24
              hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
            <div className="w-full bg-[#0000004D] p-6 rounded-2xl flex flex-col items-center gap-3">
              <p className="w-6 h-6">
                <MessageWhiteSvg />
              </p>
              <div className="mt-4 text-white text-center mb-1">
                <p>Email</p>
                <p>support@company.com</p>
              </div>

              <button className="w-[270px] bg-gradient-to-r from-[#FFEA00] to-[#7A34DB] border border-[#FFEA00] p-4 text-center rounded-full text-black text-sm font-semibold cursor-pointer hover:to-[#FFEA00] duration-700">
                Send Email
              </button>
            </div>

            <div className="w-full bg-[#0000004D] p-6 rounded-2xl flex flex-col items-center gap-3">
              <p className="w-6 h-6">
                <CallSvg />
              </p>
              <div className="mt-4 text-white text-center mb-1">
                <p>Phone</p>
                <p>+1 (555) 123-4567</p>
              </div>

              <button className="w-[270px]  bg-gradient-to-r from-[#FFEA00] to-[#7A34DB] border border-[#FFEA00] p-4 text-center rounded-full text-black text-sm font-semibold cursor-pointer hover:to-[#FFEA00] duration-700">
                Call Now
              </button>
            </div>
          </div>
        </div>

        {/* contact support form */}
        <div className="w-[740px] mt-20 h-auto p-8 bg-gradient-to-r from-[#FFD700]/40 to-[#7A34DB]/30 rounded-2xl text-white">
          <div>
            <p className="text-xl md:text-2xl lg:text-[32px] font-medium leading-9 mb-1">
              Submit a Support Request
            </p>
            <p className="text-sm md:text-base text-text mt-1">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full mt-8 space-y-6"
          >
            {/* name and email */}
            <div className="w-full flex items-center gap-4">
              <div className="w-full">
                <label>Full Name </label>
                <div
                  className={`w-full bg-[#0000004D] py-4 px-6  border items-center rounded-2xl mt-3 ${
                    errors?.name ? "border-red-500" : "border-transparent"
                  }`}
                >
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder={"Enter Name Here"}
                    className="w-full placeholder:text-base outline-none focus:outline-none"
                  />
                </div>
              </div>

              <div className="w-full">
                <label>Email Address </label>
                <div
                  className={`w-full bg-[#0000004D] py-4 px-6 border rounded-2xl mt-3 ${
                    errors?.email ? "border-red-500" : "border-transparent"
                  }`}
                >
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder={"Enter Email Here"}
                    className="w-full placeholder:text-base outline-none focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex items-center gap-4">
              <div className="w-full">
                <label>Category</label>
                <div
                  className={`w-full bg-[#0000004D] py-2.5 flex border rounded-2xl mt-3 ${
                    errors?.name ? "border-red-500" : "border-transparent"
                  }`}
                >
                  <Select
                    onValueChange={(value) => setValue("category", value)}
                  >
                    <SelectTrigger className="w-full h-full !border-none">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent
                      className={`!border !border-[#0000004D] !h-full `}
                    >
                      <SelectGroup>
                        <SelectLabel>Select a category</SelectLabel>
                        {categories?.map((category, idx) => (
                          <SelectItem key={idx} value={category?.name}>
                            {category?.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <input
                    type="hidden"
                    {...register("category", { required: true })}
                    placeholder={"Enter Name Here"}
                    className="w-full placeholder:text-base outline-none focus:outline-none"
                  />
                </div>
              </div>

              <div className="w-full">
                <label>Subject </label>
                <div
                  className={`w-full bg-[#0000004D] py-4 px-6 border  rounded-2xl mt-3 ${
                    errors?.email ? "border-red-500" : "border-transparent"
                  }`}
                >
                  <input
                    type="text"
                    {...register("subject", { required: true })}
                    placeholder={"Brief description of your issue"}
                    className="w-full placeholder:text-base outline-none focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <label>Message</label>
              <div
                className={`w-full bg-[#0000004D] py-2.5 flex border rounded-2xl mt-3 ${
                  errors?.name ? "border-red-500" : "border-transparent"
                }`}
              >
                <textarea
                  {...register("message", { required: true })}
                  placeholder="Please provide as much detail as possible..."
                  className="h-[180px] w-full py-5 px-6"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 font-bold bg-gradient-to-r from-[#FFEA00] to-[#7A34DB] hover:from-[#FFEA00] hover:to-[#FFEA00]/30  py-3 px-6 rounded-full text-black flex items-center justify-center gap-3 cursor-pointer duration-300"
            >
              Submit Request
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
