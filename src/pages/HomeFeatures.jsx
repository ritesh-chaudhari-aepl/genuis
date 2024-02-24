import FeaturesCard from "../components/cards/FeaturesCard";

// import { MdOutlinePlagiarism, MdSupportAgent } from "react-icons/md";
// import { MdOutlineMoreTime } from "react-icons/md";
// import { TfiWrite } from "react-icons/tfi";
// import { GiSmart } from "react-icons/gi";
// import { CgRead } from "react-icons/cg";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import Diversity3Icon from "@mui/icons-material/Diversity3";
// import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
// import SecurityIcon from "@mui/icons-material/Security";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import SellIcon from "@mui/icons-material/Sell";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
// import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
// import MainCard from "@/components/cards/MainCard";
// import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";

const HomeFeatures = () => {
  return (
    <section id="features" className="mt-16 bg-primaryWhite">
      <div className="mx-auto max-w-screen-xl">
        <div className="py-12">
          <div className="mb-16 px-6">
            <h3 className="capitalize text-black font-Inter text-4xl leading-[50px] font-bold text-center sm:text-[49px] sm:leading-[60px] mb-6">
              Embrace the Benefits of Genius Tutors Homework Assistance
            </h3>
            <p className="text-center text-black text-sm mt-3 font-semibold font-Inter sm:text-base sm:leading-[27px]">
              We are committed to providing a supportive platform for your
              academic success.
            </p>
          </div>

          <div className="relative mx-auto max-w-screen-xl container items-center grid grid-cols-1 gap-6">
            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
              <FeaturesCard
                icon={<HeadphonesOutlinedIcon />}
                title="24/7 Support"
                iconClasses="#e3dcff"
                textColor="#593cc1"
                description="We provide assistance 24/7, ensuring constant support for students encountering homework issues."
              />

              <FeaturesCard
                icon={<AccessAlarmIcon />}
                title="On time Delivery"
                iconClasses="#d1f5ea"
                textColor="#139a74"
                description="We ensure timely delivery of your work because we understand its value, and any delay would render it futile."
              />

              <FeaturesCard
                icon={<SellIcon />}
                title="Reasonable Pricing"
                iconClasses="#ffeeda"
                textColor="#c28135"
                description="Our prices are affordable and budget-friendly as we comprehend your needs effectively."
              />

              <FeaturesCard
                icon={<FindInPageOutlinedIcon />}
                title="100% Plagiarism free Content"
                iconClasses="#e3dcff"
                textColor="#593cc1"
                // description="100% original solutions that reduce the risk of negative marking."
                description="Receive plagiarism-free work, ensuring each assignment is written from scratch to prevent any content plagiarism."
              />
              {/* <FeaturesCard
                icon={<MonetizationOnOutlinedIcon />}
                title="Refundable"
                iconClasses="#d1f5ea"
                textColor="#139a74"
                description="Your payment is safeguarded through Paypal and Razorpay, with a money-back guarantee of up to 100%."
              /> */}

              {/* <FeaturesCard
                icon={<DonutLargeOutlinedIcon />}
                title="Unlimited Revisions"
                iconClasses="#e3dcff"
                textColor="#593cc1"
                description="You get 100% customized work as per your requirements, we are always willing to accommodate."
              /> */}
              {/* <FeaturesCard
                icon={<MonetizationOnOutlinedIcon />}
                title="AI-free Assignment"
                iconClasses="#ffeeda"
                textColor="#c28135"
                description="Our assignments, written by subject experts without AI, guarantee top grades."
              /> */}
              {/* <FeaturesCard
                icon={<ContentPasteSearchIcon />}
                title="homework help"
                iconClasses="#ffdce5"
                textColor="#ff1850"
                description="PhD tutors provide exclusive help for perfect homework problem-solving."
              /> */}
              {/* <FeaturesCard
                icon={<SecurityIcon />}
                title="Confidentiality Assured"
                iconClasses="#d1f5ea"
                textColor="#139a74"
                description="We assure the security of your information from any third-party miscreants."
              /> */}
              {/* <FeaturesCard
                icon={<Diversity3Icon />}
                title="Multiple Experts"
                iconClasses="#ffeeda"
                textColor="#c28135"
                description="500+ top-tier academic writers offer expert help for online writing assignments."
              /> */}
              {/* <FeaturesCard
                icon={<EmojiEventsIcon />}
                title="Rewards"
                iconClasses="#ffeeda"
                textColor="#c28135"
                description="500+ top-tier academic writers offer expert help for online writing assignments."
              /> */}
              {/* <FeaturesCard
                icon={<AllInclusiveIcon />}
                title="Lifetime Access"
                iconClasses="#e3dcff"
                textColor="#593cc1"
                description="500+ top-tier academic writers offer expert help for online writing assignments."
              /> */}
              {/* </div> */}
            </div>

            <div className="flex items-center justify-center">
              <a
                href="/features"
                target="_blank"
                rel="noreferrer"
                className="bg-yellow-dark hover:no-underline cursor-pointer text-base md:text-xl text-black px-8 py-3 rounded-full sm:mb-10 sm:ml-0 ml-12 mt-6"
              >
                All Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
