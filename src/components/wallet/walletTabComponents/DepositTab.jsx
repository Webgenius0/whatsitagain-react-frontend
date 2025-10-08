import { useForm } from "react-hook-form";

export default function DepositTab() {
  //   Hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="p-8 rounded-[20px] nrCustomBgDeposite">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h4 className="text-[#D1D1D1] text-[18px] font-exo font-medium leading-[27px]">
            Enter amount
          </h4>
          <div
            className={`nr_customInputBox mt-[15px] flex gap-[14px] ${
              errors.amount && "border-2 border-red-400"
            }`}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.9616 1.72998C17.698 1.72998 18.2949 2.32694 18.2949 3.06331V5.72998C18.2949 6.46635 17.698 7.06331 16.9616 7.06331C16.2252 7.06331 15.6283 6.46635 15.6283 5.72998V3.06331C15.6283 2.32694 16.2252 1.72998 16.9616 1.72998ZM2.29492 16.3966C2.29492 15.6602 2.89188 15.0633 3.62826 15.0633H6.29492C7.03129 15.0633 7.62825 15.6602 7.62825 16.3966C7.62825 17.133 7.03129 17.73 6.29492 17.73H3.62826C2.89188 17.73 2.29492 17.133 2.29492 16.3966ZM26.2949 16.3966C26.2949 15.6602 26.8919 15.0633 27.6283 15.0633H30.2949C31.0313 15.0633 31.6283 15.6602 31.6283 16.3966C31.6283 17.133 31.0313 17.73 30.2949 17.73H27.6283C26.8919 17.73 26.2949 17.133 26.2949 16.3966ZM16.9616 25.73C17.698 25.73 18.2949 26.3269 18.2949 27.0633V29.73C18.2949 30.4664 17.698 31.0633 16.9616 31.0633C16.2252 31.0633 15.6283 30.4664 15.6283 29.73V27.0633C15.6283 26.3269 16.2252 25.73 16.9616 25.73Z"
                  fill="#FFD700"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.9616 28.3966C10.3342 28.3966 4.96159 23.0241 4.96159 16.3966C4.96159 9.76923 10.3342 4.39665 16.9616 4.39665C23.5891 4.39665 28.9616 9.76923 28.9616 16.3966C28.9616 23.0241 23.5891 28.3966 16.9616 28.3966ZM2.29492 16.3966C2.29492 24.4968 8.86141 31.0633 16.9616 31.0633C25.0617 31.0633 31.6283 24.4968 31.6283 16.3966C31.6283 8.29647 25.0617 1.72998 16.9616 1.72998C8.86141 1.72998 2.29492 8.29647 2.29492 16.3966Z"
                  fill="#FFD700"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.9619 9.72998C17.6983 9.72998 18.2952 10.3269 18.2952 11.0633V11.252C19.3224 11.5499 20.228 12.1964 20.683 13.1616C20.9968 13.8277 20.7114 14.6221 20.0452 14.9361C19.3791 15.25 18.5847 14.9645 18.2707 14.2984C18.1843 14.115 17.7631 13.73 16.9619 13.73C16.4862 13.73 16.1067 13.8762 15.8763 14.049C15.6463 14.2216 15.6286 14.3581 15.6286 14.3966C15.6286 14.4352 15.6463 14.5717 15.8763 14.7442C16.1067 14.917 16.4862 15.0633 16.9619 15.0633C17.9588 15.0633 18.9128 15.3648 19.6475 15.9157C20.3827 16.4672 20.9619 17.3306 20.9619 18.3966C20.9619 19.4626 20.3827 20.3261 19.6475 20.8776C19.2512 21.1746 18.7914 21.3993 18.2952 21.543V21.73C18.2952 22.4664 17.6983 23.0633 16.9619 23.0633C16.2255 23.0633 15.6286 22.4664 15.6286 21.73V21.5413C14.6014 21.2434 13.6957 20.5969 13.2409 19.6317C12.927 18.9656 13.2125 18.1712 13.8786 17.8572C14.5447 17.5433 15.3391 17.8288 15.6531 18.4949C15.7395 18.6782 16.1607 19.0633 16.9619 19.0633C17.4376 19.0633 17.8171 18.917 18.0475 18.7442C18.2775 18.5717 18.2952 18.4352 18.2952 18.3966C18.2952 18.3581 18.2775 18.2216 18.0475 18.049C17.8171 17.8762 17.4376 17.73 16.9619 17.73C15.965 17.73 15.011 17.4285 14.2763 16.8776C13.5412 16.3261 12.9619 15.4626 12.9619 14.3966C12.9619 13.3306 13.5412 12.4671 14.2763 11.9158C14.6726 11.6186 15.1324 11.394 15.6286 11.2502V11.0633C15.6286 10.3269 16.2255 9.72998 16.9619 9.72998Z"
                  fill="#FFD700"
                />
              </svg>
            </div>
            <input
              {...register("amount", { required: true })}
              name="amount"
              id="amount"
              className={`w-[100%] outline-0 [&::-webkit-inner-spin-button]:appearance-none 
                        [&::-webkit-outer-spin-button]:appearance-none 
                        [-moz-appearance:textfield]`}
              type="number"
              placeholder="Enter amount here"
            />
          </div>
        </div>

        <div className="mt-[28px]">
          <h4 className="text-[#D1D1D1] text-[18px] font-exo font-medium leading-[27px]">
            Wallet Number
          </h4>
          <div
            className={`nr_customInputBox mt-[15px] flex gap-[14px] ${
              errors.walletNumber && "border-2 border-red-400"
            }`}
          >
            <input
              {...register("walletNumber", { required: true })}
              name="walletNumber"
              id="walletNumber"
              className="w-[100%] outline-0 [&::-webkit-inner-spin-button]:appearance-none 
                        [&::-webkit-outer-spin-button]:appearance-none 
                        [-moz-appearance:textfield]"
              type="number"
              placeholder="Enter wallet number here"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="py-[16px] w-[380px] nr-customButton flex items-center justify-center gap-[6px] text-[#000] font-orbitron text-[16px] font-bold leading-6 cursor-pointer group">
            <span>Deposit</span>
            <div className="group-hover:rotate-[-25deg] duration-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
              >
                <path
                  d="M12.5 1.96924L1.5 12.9692"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6.5 1.10075C6.5 1.10075 12.1335 0.625858 12.9885 1.48077C13.8434 2.33568 13.3684 7.96924 13.3684 7.96924"
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
    </div>
  );
}
