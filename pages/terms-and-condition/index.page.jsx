/* eslint-disable react-refresh/only-export-components */
import "./code.css";

export { Page };

// Custom Export
export const documentProps = {
  title: "Terms and Condition | Genius Tutors",
  description:
    "Explore Genius Tutors' terms and conditions for a seamless online learning experience. Learn about our policies and guidelines for academic success.",
  canonical: "https://thegeniustutors.com/terms-and-condition",
  url: "https://thegeniustutors.com/terms-and-condition",
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
        <h1 className="font-bold font-Inter capitalize text-4xl py-3">
          Genius tutors Terms & Condition
        </h1>
        <p className="">
          Please Read These Terms Carefully Before Using our Service. The use of
          thegeniustutors.com is only to be undertaken by those of legal age.
          Any improper usage is strictly prohibited. Once you have placed an
          order on this website, you have confirmed that you have read,
          understood, and agreed with all our Terms and Conditions. Submitting a
          request and/or payment implies that you are legally obligated to abide
          by these Terms and Conditions.
        </p>
        <h3 className="font-semibold text-2xl  text-[darkblue] py-2">
          Interpretation Of Our Terms:
        </h3>
        <p className="">{'"Website"'} means thegeniustutors.com.</p>
        <p className="">
          - No permission is granted to anyone to use the content of this site
          for commercial purpose or to modify for any other purpose.
        </p>

        <h3 className="font-bold font-serif text-2xl">Consumer/Customer</h3>
        <p className="">
          {'"Consumer/Customer", "You" or "Yours"'} refers to anyone submitting,
          bidding, executing an order, uploading any information, and
          transferring payments on this website.
        </p>
        <p className="">
          - {'"Company," "We," or "Our"'} refers to thegeniustutors.com website.
        </p>
        <p className="">
          - Using our questions and answers service to complete tests or
          homework when instructed not to use outside help.
        </p>
        <p className="">
          - Order refers to the actual request for a Service sent to our Company
          by the Customer. It includes particular requirements and a
          specification of sources to be used in writing.
        </p>
        <p className="">
          - Support Team or Support refers to the {"Company's"} structural unit
          responsible for coordinating and assisting the Order process.
        </p>
        <p className="">
          Wallet refers to the personal account of the Customer within the
          Company that stores Credits for the Customer. Funds added to their
          personal balance are done voluntarily to further compensate the price
          of the order(s) at their own discretion.
        </p>
        <h3 className="font-bold font-serif text-2xl">
          Warranty and Limitation of Liability
        </h3>
        <p className="">
          You will be requested to register by providing Your contact
          information such as name, email address, country of residence, and
          telephone number. Should any difficulties arise during the process of
          account creation, please contact our Support. In addition, should any
          of your contact details change over time, it is your sole
          responsibility to update your profile accordingly or inform Support of
          such changes.
        </p>
        <p className="">
          On receiving aquery, the price will be mutually decided. Once the
          payment is done we will send you solutions before the deadline. A few
          follow up questions are allowed to make you understand the format of
          the solution.
        </p>
        <p className="">
          The payment for the service is calculated according to the{" "}
          {"Company's"} Pricing and is paid in advance, as stated in the Order
          form once the scope of work is identified. The Company is not held
          responsible for Service delivery until the payment has been made in
          full and has been authorised.
        </p>

        <h3 className="font-bold font-serif text-2xl">Charges</h3>
        <p className="">
          The Company reserves the right to offer discount and bonus programs to
          Customers at its own discretion using discount code(s) the Customer
          can use when filling out the Order form. If the code is not provided
          in the corresponding section of the Order form, the discount will not
          be given out by the Company for that particular order.
        </p>

        <h3 className="font-bold font-serif text-2xl">Severability</h3>
        <p className="">
          If any of these terms becomes unenforceable as a whole or in part, the
          validity of other terms of the contract will remain unaffected.
        </p>

        <h3 className="font-bold font-serif text-2xl">Amendments</h3>
        <p className="">
          We reserve the sole right to amend terms and conditions without
          serving notice to you. The latest version of terms and conditions will
          supersede previous versions.
        </p>

        <h3 className="font-bold font-serif text-2xl">Termination</h3>
        <p className="">
          We reserve the sole right to terminate the whole or part of the
          service agreement at any time.
        </p>

        <h3 className="font-bold font-serif text-2xl">Entire Agreement</h3>
        <p className="">
          Terms of Service made in the latest agreement between student and
          geniustutor will supersede and terminate all the prior agreements.
        </p>

        <h3 className="font-bold font-serif text-2xl">Subscription</h3>
        <p className="">
          By registering or subscribing to our services. The user accepts to
          receive the subscription email about thegeniustutors.com service
          updates or any other promotional offers.
        </p>
      </div>
    </div>
  );
}
