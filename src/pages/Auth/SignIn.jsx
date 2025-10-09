import Logo from "@/assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function SignIn() {
  // States
  const [isPassShow, setIsPassShow] = useState(true);

  // For Route
  const route = useNavigate();

  // Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('LoG in',data);
    reset();
    route("/dashboard");
  };

  return (
    <section className="p-[64px] h-auto max-h-[80vh] w-max customSignUpBg mx-auto overflow-y-scroll custom-scrollbar">
      <div className="w-[586px] max-w-[586px] flex flex-col">
        <div className="w-[230px] h-[70px] mx-auto">
          <img className="w-full h-full" src={Logo} alt="" />
        </div>

        <div className="mt-[32px] flex flex-col  gap-4">
          <h3 className="text-[#FFF] font-exo font-semibold leading-[48px] text-[40px]">
            Log in
          </h3>
          <p className="text-[#FFF] text-[20px] font-exo font-medium leading-[30px]">
            Welcome back. Let’s get to work.
          </p>
        </div>

        <div className="mt-[32px] w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email">
                <span className="text-[#FFF] font-exo text-[20px] font-semibold leading-[26px]">
                  Email Address*
                </span>
                <div
                  className={`w-full p-4 rounded-[12px] mt-[6px] inputBg flex gap-[6px] ${
                    errors.email && "border border-red-500"
                  }`}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M2 6.5L8.91302 10.417C11.4616 11.861 12.5384 11.861 15.087 10.417L22 6.5"
                        stroke="url(#paint0_linear_30000_898)"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.01577 13.9756C2.08114 17.0412 2.11383 18.5739 3.24496 19.7094C4.37608 20.8448 5.95033 20.8843 9.09883 20.9634C11.0393 21.0122 12.9607 21.0122 14.9012 20.9634C18.0497 20.8843 19.6239 20.8448 20.7551 19.7094C21.8862 18.5739 21.9189 17.0412 21.9842 13.9756C22.0053 12.9899 22.0053 12.0101 21.9842 11.0244C21.9189 7.95886 21.8862 6.42609 20.7551 5.29066C19.6239 4.15523 18.0497 4.11568 14.9012 4.03657C12.9607 3.98781 11.0393 3.98781 9.09882 4.03656C5.95033 4.11566 4.37608 4.15521 3.24495 5.29065C2.11382 6.42608 2.08114 7.95885 2.01576 11.0244C1.99474 12.0101 1.99475 12.9899 2.01577 13.9756Z"
                        stroke="url(#paint1_linear_30000_898)"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_30000_898"
                          x1="2"
                          y1="9"
                          x2="22"
                          y2="9"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFEA00" />
                          <stop offset="1" stopColor="#7A34DB" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_30000_898"
                          x1="2"
                          y1="12.5"
                          x2="22"
                          y2="12.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFEA00" />
                          <stop offset="1" stopColor="#7A34DB" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="w-[100%]">
                    <input
                      {...register("email", { required: true })}
                      className="outline-none w-full text-white"
                      id="email"
                      name="email"
                      type="text"
                      placeholder="johndoe@gmail.com"
                    />
                  </div>
                </div>
              </label>
            </div>

            <div className="w-full mt-[16px]">
              <label htmlFor="Password">
                <span className="text-[#FFF] font-exo text-[20px] font-semibold leading-[26px]">
                  Password
                </span>
                <div
                  className={`w-full p-4 rounded-[12px] mt-[6px] inputBg flex items-center gap-[6px] ${
                    errors.Password && "border border-red-500"
                  }`}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M15.5 15C18.8137 15 21.5 12.3137 21.5 9C21.5 5.68629 18.8137 3 15.5 3C12.1863 3 9.5 5.68629 9.5 9C9.5 9.88041 9.68962 10.7165 10.0303 11.4697L2.5 19V22H5.5V20H7.5V18H9.5L13.0303 14.4697C13.7835 14.8104 14.6196 15 15.5 15Z"
                        stroke="url(#paint0_linear_30000_1459)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 7L16.5 8"
                        stroke="url(#paint1_linear_30000_1459)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_30000_1459"
                          x1="2.5"
                          y1="12.5"
                          x2="21.5"
                          y2="12.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFEA00" />
                          <stop offset="1" stopColor="#7A34DB" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_30000_1459"
                          x1="16.5"
                          y1="7.5"
                          x2="17.5"
                          y2="7.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFEA00" />
                          <stop offset="1" stopColor="#7A34DB" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="w-[100%]">
                    <input
                      {...register("Password", { required: true })}
                      className="outline-none w-full text-white"
                      id="Password"
                      name="Password"
                      type={`${isPassShow ? "password" : "text"}`}
                      placeholder="Chose Your Password"
                    />
                  </div>

                  {isPassShow ? (
                    <div
                      onClick={() => setIsPassShow((prevState) => !prevState)}
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M14.9795 12.7021L16.3427 11.339C16.4419 11.71 16.5 12.098 16.5 12.5C16.5 14.9814 14.4814 17 12 17C11.598 17 11.21 16.9419 10.839 16.8427L12.2021 15.4795C12.9226 15.4306 13.601 15.1223 14.1116 14.6116C14.6223 14.101 14.9306 13.4226 14.9795 12.7021ZM23.9055 12.1357C23.8132 11.9697 22.5049 9.67717 19.9474 7.7343L18.8559 8.82574C20.7208 10.1969 21.9024 11.7961 22.3676 12.5011C21.4787 13.8547 17.9915 18.5 12 18.5C11.1015 18.5 10.266 18.385 9.47979 18.2017L8.24735 19.4341C9.38042 19.7815 10.6258 20 12 20C19.8512 20 23.7437 13.1555 23.9055 12.8643C23.9675 12.7529 24 12.6275 24 12.5C24 12.3725 23.9675 12.2471 23.9055 12.1357ZM20.7802 4.78024L4.28023 21.2802C4.13379 21.4267 3.94179 21.5 3.74998 21.5C3.55817 21.5 3.36617 21.4267 3.21973 21.2802C3.15004 21.2106 3.09476 21.128 3.05704 21.037C3.01932 20.946 2.99991 20.8485 2.99991 20.75C2.99991 20.6515 3.01932 20.554 3.05704 20.463C3.09476 20.372 3.15004 20.2893 3.21973 20.2197L5.31898 18.1205C1.92523 16.0717 0.200791 13.0557 0.0944788 12.8643C0.0325172 12.7528 0 12.6274 0 12.4999C0 12.3724 0.0325172 12.2469 0.0944788 12.1355C0.256291 11.8445 4.14879 4.99999 12 4.99999C14.03 4.99999 15.7884 5.46311 17.2916 6.14786L19.7197 3.71974C20.0128 3.42667 20.4874 3.42667 20.7802 3.71974C21.0731 4.0128 21.0733 4.48736 20.7802 4.78024ZM6.43742 17.002L8.33623 15.1032C7.81179 14.3675 7.49998 13.4703 7.49998 12.5C7.49998 10.0186 9.5186 7.99999 12 7.99999C12.9703 7.99999 13.8675 8.3118 14.6032 8.83605L16.1387 7.30061C14.9255 6.8148 13.547 6.49999 12 6.49999C6.00842 6.49999 2.52129 11.1453 1.63254 12.4989C2.19692 13.3542 3.81917 15.5195 6.43742 17.002ZM9.42504 14.0142L13.5142 9.92505C13.0682 9.66161 12.5546 9.49999 12 9.49999C10.3459 9.49999 8.99998 10.8459 8.99998 12.5C8.99998 13.0546 9.1616 13.5682 9.42504 14.0142Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div
                      className="cursor-pointer"
                      onClick={() => setIsPassShow((prevState) => !prevState)}
                    >
                      <FaRegEye color="white" size={20} />
                    </div>
                  )}
                </div>
              </label>
            </div>

            <div className="mt-[32px]">
              <button className="CustomColourAuthB w-full py-4 text-[#000] font-orbitron font-bold leading-6">
                Log in
              </button>
            </div>
          </form>

          <Link
            to="/auth/sign-up"
            className="text-[#FFF] text-[18px] font-medium leading-[27px] flex justify-center mt-8 font-exo"
          >
            Didn’t have an account?{" "}
            <span className="text-[#FFEA00]"> Sign up</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
