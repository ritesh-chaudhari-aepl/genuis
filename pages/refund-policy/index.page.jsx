/* eslint-disable react-refresh/only-export-components */
import "./code.css";

export { Page };

// Custom Export
export const documentProps = {
  title: "Refund Policy | Genius Tutors",
  description:
    "Discover the Genius Tutors refund policy. Learn about our hassle-free refund process and our commitment to ensuring you have a positive experience.",
  canonical: "https://thegeniustutors.com/refund-policy",
  url: "https://thegeniustutors.com/refund-policy",
};

function Page() {
  return (
    <div className="p-4 text-black max-w-screen-xl mx-auto pt-16">
      <a
        className="inline-block hover:no-underline cursor-pointer rounded-full bg-gradient-to-r from-pink-darkPink to-blue-light px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
        href="/"
      >
        Back to Home
      </a>
      <div className="py-12">
        <div>
          <h1 className="font-bold text-4xl py-3">
            Genius tutors Refund Policy
          </h1>
          <p className="font-semibold">
            We understand that, occasionally, situations may arise where a
            client may request a refund for the work that has been provided. We
            strive to maintain a fair and transparent approach to resolving such
            matters. This Refund policy outlines terms and conditions for
            requesting a refund as a client for services provided. Please
            carefully review the following information.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-4xl py-3">Eligibility for Refunds</h2>
          <p className="font-semibold">
            The client is eligible for a Full/Partial/No refund based on
            conditions mentioned below:
          </p>
          <h3 className="font-bold text-2xl text-[darkblue] py-2">
            Full Refund
          </h3>
          <p className="font-semibold">
            A full refund can be requested under the following cases:
          </p>
          <div className="px-16">
            <ul>
              <li className="list-disc py-2">
                If the delivered assignment does not meet the agreed-upon
                specifications and requirements outlined in the initial
                assignment description or instructions provided.
              </li>
              <li className="list-disc py-2">
                If the assignment fails to be delivered within the agreed-upon
                deadline.
              </li>
              <li className="list-disc py-2">
                If the client fails in completing the assignment/tasks.
              </li>
            </ul>
          </div>

          <h3 className="font-bold text-2xl text-[darkblue] py-2">
            Partial Refund
          </h3>
          <p className="font-semibold">
            A Partial refund can be requested under the following cases:
          </p>
          <div className="px-16">
            <ul>
              <li className="list-disc py-2">
                If the client decides to cancel the task before the deadline, a
                cancellation charge of 25% will be applied if the expert has not
                started the work. However, if the expert has started the work,
                an additional amount will be charged based on the percentage of
                work completed by the expert.
              </li>
              <li className="list-disc py-2">
                If the client receives a low score on the assignment, the client
                is entitled to a partial refund of up to 30%, depending on how
                much lower than the agreed-upon marks the client has received.
              </li>
            </ul>
          </div>

          <h3 className="font-bold text-2xl text-[darkblue] py-2">No Refund</h3>
          <p className="font-semibold">
            No refund will be provided to the client under the following cases:
          </p>
          <div className="px-16">
            <ul>
              <li className="list-disc py-2">
                The request for a refund is made more than 30 days after the
                task delivery.
              </li>
              <li className="list-disc py-2">
                If the client has already approved and accepted the task.
              </li>
              <li className="list-disc py-2">
                The client has used the delivered work or a portion of it for
                their intended purposes.
              </li>
              <li className="list-disc py-2">
                In case the client feels that certain contents of the assignment
                contain plagiarism, then we will revise the assignment to clear
                out any plagiarized content as pointed out by the client until
                the client’s satisfaction free of cost. Since all the
                assignments are checked through various plagiarism-finding tools
                to bring plagiarism below the agreed-upon limit before they are
                dispatched to the client, we will not refund the money in these
                cases.
              </li>
              <li className="list-disc py-2">
                In case the full payment for a task is done and the client
                decides to cancel the task, no refund will be provided to the
                client if no expert has been assigned. However, the client can
                get any other work of the same monetary value done without any
                additional cost.
              </li>
              <li className="list-disc py-2">
                If a task is delayed due to a last-minute change requested by
                the client.
              </li>
              <li className="list-disc py-2">
                We aim to provide the best solutions for the assignments, and
                that&apos;s why we will keep reworking on the assignment until
                the client is satisfied that the assignment meets the
                requirements. However, the reworks are done within one month (30
                days) of the time frame. Any rework requested after 30 days of
                task delivery will be treated as a new task, and no refund will
                be provided for the said original task.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-4xl py-3">
            Refund Process at Genius Tutors
          </h2>
          <p className="font-semibold">
            A refund can be requested by the client with a proper reason and
            with certain proofs (Scorecard, Feedback email), and the refund will
            be provided to the client within 30 days.
          </p>
          <div className="px-16">
            <ul>
              <li className="list-disc py-2">
                Low score - If the client scored 40-55% then we will refund 30%
                of the actual amount
              </li>
              <li className="list-disc py-2">
                Failed- If the client fails he is entitled to a full refund.
              </li>
              <li className="list-disc py-2">
                Timeframe of the refund within 30 days
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
