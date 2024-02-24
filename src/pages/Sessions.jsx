import { TfiCup } from "react-icons/tfi";
import {MdOutlinePlagiarism} from "react-icons/md"
import {BsPeople} from "react-icons/bs"
import {TfiInfinite} from "react-icons/tfi"
import {TbFreeRights} from "react-icons/tb"
import {AiOutlineGift} from "react-icons/ai"
import {BsPersonVcard} from "react-icons/bs"
import {RiRefund2Fill} from "react-icons/ri"
import StepperCard from "../components/cards/StepperCard";

const Sessions = () => {
  return (
    <section id="sessions" className="bg-primaryWhite">
      <div className="mx-auto max-w-screen-2xl m-auto mt-16 px-6">
        <section>
          <div className="mb-8 md:mb-16 lg:mb-24">
            <h3 className="capitalize text-black font-Inter text-4xl leading-[50px] font-bold text-center sm:text-[49px] sm:leading-[60px] mb-6">
              online sessions with the best tutors
            </h3>
            <p className="capitalize text-black text-sm font-Inter font-bold text-center leading-[30px] sm:text-base sm:leading-[27px]">
              Our tutors are experts from various domains, they have all
              experience to handle your queries
              <br /> with ease. Get the best solutions on your personal phone
              now.
            </p>
          </div>
          <div className="max-w-screen-xl mx-auto">
            <div className="m-auto gap-4 lg:gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center">
              <StepperCard
                icon={<TfiCup size={50} color="#bfdbfe" />}
                title={"$20 reward"}
                msg={"upon registration"}
              />
              <StepperCard
                icon={<MdOutlinePlagiarism size={50} color="#bfdbfe" />}
                title={"Free plagiarism"}
                msg={"reports"}
              />
              <StepperCard
                icon={<BsPeople size={50} color="#bfdbfe" />}
                title={"Multiple experts"}
                msg={"for Assignment"}
              />
              <StepperCard
                icon={<TfiInfinite size={50} color="#bfdbfe" />}
                title={"Unlimited"}
                msg={"rewrites/revisions"}
              />
              <StepperCard
                icon={<TbFreeRights size={50} color="#bfdbfe" />}
                title={"Free Citation"}
                msg={"& References"}
              />
              <StepperCard
                icon={<AiOutlineGift size={50} color="#bfdbfe" />}
                title={"Redeemable"}
                msg={"reward points"}
              />
              <StepperCard
                icon={<BsPersonVcard size={50} color="#bfdbfe" />}
                title={"Lifetime access"}
                msg={"to your solutions"}
              />
              <StepperCard
                icon={<RiRefund2Fill size={50} color="#bfdbfe" />}
                title={"Moneyback"}
                msg={"guarantee"}
              />

              {/* <img src={ar1} alt="ar1" /> */}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Sessions;
