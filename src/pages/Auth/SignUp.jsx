import Logo from "@/assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignUp() {
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
    console.log(data);
    reset();
    route('/auth/set-password')
  };

  return (
    <section className="p-[64px] h-auto max-h-[80vh] w-max customSignUpBg mx-auto overflow-y-scroll custom-scrollbar">
      <div className="max-w-[586px] flex flex-col items-center">
        <div className="w-[230px] h-[70px]">
          <img className="w-full h-full" src={Logo} alt="" />
        </div>

        <div className="mt-[32px] flex flex-col gap-4">
          <h3 className="text-[#FFF] font-exo font-semibold leading-[48px] text-[40px]">
            Sign up
          </h3>
          <p className="text-[#FFF] text-[20px] font-exo font-medium leading-[30px]">
            Welcome! Let’s get you set up. Create your account to access your
            employee dashboard and start your journey with us.
          </p>
        </div>

        <div className="mt-[32px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-[20px] w-full items-center mb-3">
              <div>
                <label htmlFor="firstName">
                  <span className="text-[#FFF] font-exo text-[20px] font-semibold leading-[26px]">
                    First Name
                  </span>
                  <div
                    className={`w-[285px] p-4 rounded-[12px] mt-[6px] inputBg ${
                      errors.firstName && "border border-red-500"
                    }`}
                  >
                    <input
                      {...register("firstName", { required: true })}
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      type="text"
                      className="outline-0 w-full text-white"
                    />
                  </div>
                </label>
              </div>

              <div>
                <label htmlFor="lastName">
                  <span className="text-[#FFF] font-exo text-[20px] font-semibold leading-[26px]">
                    Last Name
                  </span>
                  <div
                    className={`w-[285px] p-4 rounded-[12px] mt-[6px] inputBg ${
                      errors.lastName && "border border-red-500"
                    }`}
                  >
                    <input
                      {...register("lastName", { required: true })}
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      type="text"
                      className="outline-0 w-full text-white"
                    />
                  </div>
                </label>
              </div>
            </div>

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

            <div className="mt-[32px]">
              <button className="CustomColourAuthB w-full py-4 text-[#000] font-orbitron font-bold leading-6">
                Next
              </button>
            </div>
          </form>

          <Link
            to="/auth"
            className="text-[#FFF] text-[18px] font-medium leading-[27px] flex justify-center mt-8 font-exo"
          >
            Already have an account?{" "}
            <span className="text-[#FFEA00]"> Login</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
