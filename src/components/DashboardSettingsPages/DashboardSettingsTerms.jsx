import ChevronBackSvg from "@/assets/SVG/ChevronBackSvg";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardSettingsTerms() {
  const htmlContent = `
    <div class="terms-container">
      <div class="terms-card">
        <header>
          <h1>Terms & Condition</h1>
          <p class="last-update">Last Updated: 30.09.25</p>
        </header>

        <p>
          Welcome to <strong>SiteName</strong> ("we", "our", "us"). By accessing or using our platform,
          you ("User", "Player", "Organizer") agree to comply with these Terms and Conditions.
          Please read carefully before using our services.
        </p>

        <ol>
          <li>
            <h2>1. Eligibility</h2>
            <ul>
              <li>You must be at least 18 years old, or the age of majority in your jurisdiction.</li>
              <li>Information you provide must be accurate and complete.</li>
              <li>We may limit or refuse access at our discretion.</li>
            </ul>
          </li>

          <li>
            <h2>2. Services Provided</h2>
            <ul>
              <li>Our platform allows users to create, join, and manage matches.</li>
              <li>We support integrations and leaderboard APIs.</li>
              <li>Features may be updated or removed with notice.</li>
            </ul>
          </li>

          <li>
            <h2>3. Account & Security</h2>
            <ul>
              <li>You are responsible for keeping your credentials secure.</li>
              <li>Notify us immediately of any unauthorized activity.</li>
              <li>We may suspend or terminate accounts for violations.</li>
            </ul>
          </li>

          <li>
            <h2>4. Payments</h2>
            <ul>
              <li>Payments are handled through trusted gateways.</li>
              <li>Refunds are subject to our refund policy.</li>
              <li>Transaction fees may apply.</li>
            </ul>
          </li>

          <li>
            <h2>5. User Conduct</h2>
            <ul>
              <li>Do not use offensive or illegal content.</li>
              <li>Any violation may lead to suspension or permanent ban.</li>
            </ul>
          </li>

          <li>
            <h2>6. Limitation of Liability</h2>
            <ul>
              <li>We are not liable for service interruptions or technical issues.</li>
              <li>Users participate at their own risk.</li>
            </ul>
          </li>

          <li>
            <h2>7. Changes to Terms</h2>
            <ul>
              <li>We may update these Terms at any time. Continued use means acceptance.</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  `;

  const navigate = useNavigate();

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

      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[840px] h-auto p-8 text-white">
          <div className="" dangerouslySetInnerHTML={{__html: htmlContent}}/>
        </div>
      </div>
    </div>
  );
}
