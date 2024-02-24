import SessionCard from "../components/cards/SessionCard";
// import SmallCard from "../components/cards/SmallCard";
import { HiOutlineMail } from "react-icons/hi";
import { BsAlarm } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { AiOutlinePieChart } from "react-icons/ai";
import ar1 from "../../assets/down.webp";
import ar2 from "../../assets/up.webp";

const Steps = () => {
  return (
    <section id="steps" className="bg-primaryWhite">
      <div className="mx-auto max-w-screen-xl">
        <div className="">
          <div className="my-12 px-6">
            <h3 className="capitalize text-black font-Inter text-4xl leading-[50px] font-bold text-center sm:text-[49px] sm:leading-[60px] mb-6">
              Get Your Homework Done with these Simple 4 Steps
            </h3>
            <p className="text-center text-black text-sm pt-6 font-normal font-Inter sm:text-base sm:leading-[27px]">
              It&apos;s as easy as 1, 2, 3, 4.
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:gap-3 lg:flex-row justify-center items-center">
            <div className="flex flex-col gap-9 lg:gap-0 lg:flex-row justify-center items-center">
              <SessionCard
                icon={<HiOutlineMail size={24} />}
                bgColor="bg-[#FFDCE5]"
                badgeCount={1}
                iconColor="#FF1850"
                title="Connect with Us"
                desc="Connect with us via email/ WhatsApp"
              />
              <img
                loading="eager"
                src={ar1}
                alt="ar1"
                title="ar1"
                width="100%"
                height="100%"
                className="w-20 rotate-90 lg:rotate-0"
              />
            </div>
            <div className="flex flex-col gap-9 lg:gap-0 lg:flex-row justify-center items-center">
              <SessionCard
                icon={<BsAlarm size={20} />}
                bgColor="bg-[#EFDEFF]"
                badgeCount={2}
                iconColor="#952AFF"
                title={`Choose your Service`}
                desc={`Select your desired service\n and upload your queries.`}
              />
              <img
                loading="eager"
                src={ar2}
                alt="ar1"
                title="ar1"
                width="100%"
                height="100%"
                className="w-20 rotate-90 lg:rotate-0"
              />
            </div>
            <div className="flex flex-col gap-9 lg:gap-0 lg:flex-row justify-center items-center">
              <SessionCard
                icon={<CiStar size={24} />}
                bgColor="bg-[#E0F5E9]"
                badgeCount={3}
                iconColor="#1FAF38"
                title={"Make Payment"}
                desc={
                  "Receive a price quote based on your\n order and proceed with payment."
                }
              />
              <img
                loading="eager"
                src={ar1}
                alt="ar1"
                title="ar1"
                width="100%"
                height="100%"
                className="w-20 rotate-90 lg:rotate-0"
              />
            </div>
            <div>
              <SessionCard
                icon={<AiOutlinePieChart size={24} />}
                bgColor="bg-[#FFDCE5]"
                badgeCount={4}
                iconColor="#FF1850"
                title={"Recieve Solutions"}
                desc={
                  "Once your payment is done, receive your solutions ahead of the specified deadline."
                }
              />
              {/* <img loading="eager" src={ar1} alt="ar1" /> */}
            </div>
          </div>
          {/* <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-4 sm:justify-center sm:gap-6 sm:items-center px-4 lg:px-6">
              <SmallCard
                no={1}
                title={"Sign Up"}
                discription={
                  "Register at www.genius-tutors.com to initiate your journey."
                }
              />
              <SmallCard
                no={2}
                title={"Place Your Order"}
                discription={
                  "Select your desired service and upload your queries."
                }
              />
              <SmallCard
                no={3}
                title={"Make Payment"}
                discription={
                  "Receive a price quote based on your order and proceed with payment."
                }
              />
              <SmallCard
                no={4}
                title={"Recieve Solutions"}
                discription={
                  "Once your payment is complete, receive your homework solutions ahead of the specified deadline."
                }
              />
            </div>
            <div className="py-6 flex items-center justify-center">
              <a
                href="https://wa.me/918210403033"
                target="_blank"
                rel="noreferrer"
                className="bg-yellow-dark text-base md:text-xl text-black px-8 py-3 rounded-full sm:mb-10 mt-6"
              >
                Start now
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Steps;
