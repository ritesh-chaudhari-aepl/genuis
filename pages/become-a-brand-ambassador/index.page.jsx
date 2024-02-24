/* eslint-disable react-refresh/only-export-components */
import "./code.css";
// import { MdDoneAll } from "react-icons/md";
import SessionCard from "../../src/components/cards/SessionCard";
// import SmallCard from "../../src/components/cards/SmallCard";
import { HiOutlineMail } from "react-icons/hi";
import { BsAlarm } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { AiOutlinePieChart } from "react-icons/ai";
import ar1 from "../../assets/down.webp";
import ar2 from "../../assets/up.webp";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import SellIcon from "@mui/icons-material/Sell";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import CenterContentCard from "../../src/components/cards/CenterContentCard";
import BrandAmbassadorForm from "../../src/components/containers/BrandAmbassadorForm";

export { Page };

// Custom Export
export const documentProps = {
  title: "Become a Brand Ambassador with Genius Tutors",
  description:
    "Get an opportunity to become a brand ambassador with Genius Tutors! Join our team and elevate your student experience while gaining valuable skills.",
  canonical: "https://thegeniustutors.com/become-a-brand-ambassador",
  url: "https://thegeniustutors.com/become-a-brand-ambassador",
};

function Page() {
  return (
    <div id="brand-form-section" className="bg-primaryWhite pb-10">
      <section id="brand-ambassador-program">
        <div className="banner-section bg-[#fff9f9] py-2">
          <div className="mx-auto max-w-screen-xl px-6">
            <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-4">
              <div className="">
                <div className=" pt-1 px-6 lg:px-0">
                  <h3 className="capitalize text-black font-Inter text-3xl leading-[50px] font-semibold lg:text-[49px] lg:leading-[60px] mb-4">
                    Want to Become Brand Ambassador
                    {/* Discover Our Story <br />
                    <span className="text-2xl">
                      - Unveiling the Essence of Genius Tutors
                    </span> */}
                  </h3>
                  <p className="text-black py-3 text-sm mt-3 font-normal leading-[25px] font-Inter sm:text-base sm:leading-[27px]">
                    At Genius Tutors, we are dedicated to providing exceptional
                    college homework assistance at affordable prices. Our main
                    focus is on meeting your academic needs without compromising
                    on quality.
                  </p>
                </div>
              </div>
              <BrandAmbassadorForm />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-screen-xl justify-center container items-center grid grid-cols-1 gap-12 py-16">
          <div className="xl:flex grid grid-cols-1 items-center justify-center">
            <h3 className="xl:w-1/2 capitalize text-black font-Inter text-4xl leading-[50px] font-bold sm:text-[49px] sm:leading-[60px] mb-4">
              Why Become a Brand Ambassador
            </h3>
            <p className="xl:w-1/2 text-black text-sm mt-3 font-semibold font-Inter sm:text-base sm:leading-[27px]">
              Becoming a Brand Ambassador with Genius Tutors opens up
              unparalleled opportunities for you to earn substantial rewards
              over an extended period, and the best part – it&apos;s absolutely
              FREE! Here&apos;s why you should consider joining our network:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <CenterContentCard
              icon={<MonetizationOnOutlinedIcon />}
              title="Lucrative Commissions"
              iconBg="#e3dcff"
              textColor="#593cc1"
              description="As a Brand Ambassador, you have the chance to earn attractive commissions for every successful referral, making it a financially rewarding venture."
            />

            <CenterContentCard
              icon={<AccessAlarmIcon />}
              title="Flexible Schedule"
              iconBg="#d1f5ea"
              textColor="#139a74"
              description="Enjoy the flexibility of working at your own pace. Whether you're a student, a professional, or someone with a busy lifestyle, our program accommodates your schedule."
            />

            <CenterContentCard
              icon={<SellIcon />}
              title="Exclusive Promotional Material"
              iconBg="#ffeeda"
              textColor="#c28135"
              description="Gain access to exclusive promotional material and resources designed to make your role as a Brand Ambassador easier and more effective."
            />

            <CenterContentCard
              icon={<FindInPageOutlinedIcon />}
              title="Networking Opportunities"
              iconBg="#e3dcff"
              textColor="#593cc1"
              // description="100% original solutions that reduce the risk of negative marking."
              description=" Join a community of like-minded individuals, fostering valuable connections and networking opportunities within the education sector."
            />
            <CenterContentCard
              icon={<HeadphonesOutlinedIcon />}
              title="Continuous Support"
              iconBg="#d1f5ea"
              textColor="#139a74"
              description="Benefit from continuous support and guidance from our dedicated team, ensuring you have all the tools needed to excel in your role as a Brand Ambassador."
            />

            <CenterContentCard
              icon={<DonutLargeOutlinedIcon />}
              title="Contribute to Education"
              iconBg="#e3dcff"
              textColor="#593cc1"
              description="By promoting Genius Tutors, you actively contribute to the education sector, helping students discover valuable academic resources and support."
            />
          </div>
          <p>
            Embark on this exciting journey with us and make a lasting impact on
            the educational landscape while enjoying the perks of being a valued
            Brand Ambassador for Genius Tutors!
          </p>
        </div>
        <div className="mx-auto how-it-works max-w-screen-xl py-16">
          <div className="">
            <div className="mb-12 px-6">
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
          </div>
        </div>

        <div className="flex items-center justify-center py-16">
          <a
            href="#brand-form-section"
            //   // href="https://wa.me/918210403033"
            //   // target="_blank"
            //   // rel="noreferrer"
            className="bg-yellow-dark cursor-pointer text-base md:text-xl text-black px-8 py-3 rounded-full sm:mb-10 sm:ml-0 ml-12 mt-6"
          >
            Become a Brand Ambassador
          </a>
        </div>
      </section>
    </div>
  );
}
