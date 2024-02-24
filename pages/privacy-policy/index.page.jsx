/* eslint-disable react-refresh/only-export-components */
import "./code.css";

export { Page };

// Custom Export
export const documentProps = {
  title: "Privacy Policy | Genius Tutors",
  description:
    "Explore our commitment to your privacy with Genius Tutors' Privacy Policy. Learn how we safeguard information, ensuring a trustworthy learning environment.",
  canonical: "https://thegeniustutors.com/privacy-policy",
  url: "https://thegeniustutors.com/privacy-policy",
};

function Page() {
  return (
    <div className="p-4 text-black max-w-screen-xl mx-auto pt-16">
      <a
        className="inline-block font-Inter hover:no-underline cursor-pointer rounded-full bg-gradient-to-r from-pink-darkPink to-blue-light px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
        href="/"
      >
        Back to Home
      </a>

      <div className="py-12">
        <div>
          <h1 className="font-bold font-Inter text-4xl py-3">
            Genius tutors Privacy Policy
          </h1>
          <h2 className="font-bold font-Inter py-3 text-3xl text-blue-darkBlue">
            Overview
          </h2>
          <p className="p-2 font-sans text-base">
            We understand your concern about privacy and security of personal
            details. It is our ethical duty to make you aware of our privacy
            policy. Here is what we do with your personal information:
          </p>
          <p className="p-2 font-sans text-base">
            - All information about students and tutors is strictly kept within
            the company.
          </p>
          <p className="p-2 font-sans text-base">
            - We do not give out any student or {"tutor's"} information to third
            parties.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-2xl  text-[darkblue] py-2">
            Collection of Information
          </h3>
          <p className="p-2 font-sans text-base">
            Payments are handled by PayPal, Razorpay. We have collaborated with
            PayPal and razorpay so that they alone (and not our company) can
            deal with a {"student's"} credit card details.
          </p>
          <p className="p-2 font-sans text-base">
            We reserve the right to disclose your personal identifiable
            information as required by law and when we believe that disclosure
            is necessary to protect our rights and/or to comply with a judicial
            proceeding, court order or legal process served on our Website.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-2xl  text-[darkblue] py-2">
            Use and sharing of Information
          </h3>
          <p className="p-2 font-sans text-base">
            genius-tutor.com reserves the right to modify this privacy statement
            any time, so please review it frequently. Any changes made to above
            policy will be posted here and your continued use of the site,
            services and/or software constitutes your agreement to be bound by
            such changes.
          </p>
          <p className="p-2 font-sans text-base">
            We value your privacy and would like to inform you that you would be
            receiving our emails after you signed up with us to avail our
            services. We treat your email ids with utmost care and do not share
            them with anyone else. So you can be rest assured that all emails
            sent from us are designed to benefit you solely.
          </p>
        </div>
      </div>
    </div>
  );
}
