import React from "react";

export default function ChevronRightSvg({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className && className}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8.90625 19.9201L15.4263 13.4001C16.1963 12.6301 16.1963 11.3701 15.4263 10.6001L8.90625 4.08008"
        stroke="url(#paint0_linear_29971_972)"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_29971_972"
          x1="8.90625"
          y1="12.0001"
          x2="16.0038"
          y2="12.0001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEA00" />
          <stop offset="1" stopColor="#7A34DB" />
        </linearGradient>
      </defs>
    </svg>
  );
}
