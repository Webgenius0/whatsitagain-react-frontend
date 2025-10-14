import Logo from "@/assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function ForgetPassWordOtp() {
  // For Route
  const route = useNavigate();

  return (
    <section className="p-[64px] h-auto max-h-[80vh] w-max customSignUpBg mx-auto overflow-y-scroll custom-scrollbar">
      <div className="max-w-[586px] flex flex-col items-center">
        <div className="w-[230px] h-[70px]">
          <img className="w-full h-full" src={Logo} alt="" />
        </div>

        <div className="mt-[32px] flex flex-col gap-4">
          <h3 className="text-[#FFF] font-exo font-semibold leading-[48px] text-[40px]">
            Enter Your OTP Code
          </h3>
          <p className="text-[#FFF] text-[20px] font-exo font-medium leading-[30px]">
            Enter the 6-digit code we sent to your phone to verify your account
          </p>
        </div>

        <div className="mt-[32px] w-full">
          <form>
            <div className="flex justify-center">
              <InputOTP maxLength={6}>
                <InputOTPGroup className="space-x-2">
                  <InputOTPSlot
                    index={0}
                    className="rounded-[60px] border-l border-accent/90 shadow-inner dark:shadow-primary/10"
                  />
                  <InputOTPSlot
                    index={1}
                    className="rounded-[60px] border-l border-accent/90 shadow-inner dark:shadow-primary/10"
                  />
                  <InputOTPSlot
                    index={2}
                    className="rounded-[60px] border-l border-accent/90 shadow-inner dark:shadow-primary/10"
                  />
                  <InputOTPSlot
                    index={3}
                    className="rounded-[60px] border-l border-accent/90 shadow-inner dark:shadow-primary/10"
                  />
                  <InputOTPSlot
                    index={4}
                    className="rounded-[60px] border-l border-accent/90 shadow-inner dark:shadow-primary/10"
                  />
                  <InputOTPSlot
                    index={5}
                    className="rounded-[60px] border-l border-accent/90 shadow-inner dark:shadow-primary/10"
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="mt-[32px]">
              <button className="CustomColourAuthB w-full py-4 text-[#000] font-orbitron font-bold leading-6 flex gap-3 items-center justify-center cursor-pointer">
                Verify now
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                  >
                    <path
                      d="M12 2.50012L1 13.5001"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6 1.63151C6 1.63151 11.6335 1.15662 12.4885 2.01153C13.3434 2.86645 12.8684 8.5 12.8684 8.5"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </form>

          <h3 className="mt-8 text-[#FFF] text-center text-[18px] font-medium leading-[27px]">
            Resend Code (60sec)
          </h3>
        </div>
      </div>
    </section>
  );
}
