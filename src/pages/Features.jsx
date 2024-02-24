import FeaturesCard from "../components/cards/FeaturesCard";

// import { MdOutlinePlagiarism, MdSupportAgent } from "react-icons/md";
// import { MdOutlineMoreTime } from "react-icons/md";
// import { TfiWrite } from "react-icons/tfi";
// import { GiSmart } from "react-icons/gi";
// import { CgRead } from "react-icons/cg";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import SecurityIcon from "@mui/icons-material/Security";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import SellIcon from "@mui/icons-material/Sell";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
// import MainCard from "@/components/cards/MainCard";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import SmsIcon from "@mui/icons-material/Sms";
import SEO from "../components/Seo";
import AssignmentForm from "../common/assignment-form/AssignmentForm";

const Features = () => {
  return (
    <>
      <SEO
        title="Explore the Powerful Features of Genius Tutors"
        description="Unlock the full potential of education with Genius Tutors. Discover a range of cutting-edge features designed to elevate academic success."
      />
      <div className="bg-primaryWhite pb-10">
        <section id="features">
          <div className="banner-section bg-[#fff9f9] py-16 pt-2">
            <div className="mx-auto max-w-screen-xl">
              <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-4">
                <div className=" px-6">
                  <h3 className="capitalize text-black font-Inter text-3xl leading-[50px] font-semibold md:text-4xl xl:text-5xl xl:leading-[60px] mb-6">
                    {/* Embrace the Benefits of Genius Tutors Homework Assistance */}
                    Unleashing Academic Excellence:
                    <span className="text-violet-main font-Inter text-3xl font-normal">
                      <br />
                      Explore the Features of Genius Tutors&apos; Homework
                      Assistance
                    </span>
                  </h3>
                  <p className=" text-black text-sm mt-3 font-medium font-Inter sm:text-base sm:leading-[27px]">
                    {/* We are committed to providing a supportive platform for your
                    academic success. */}
                    Discover a supportive platform dedicated to your academic
                    success. Genius Tutors offers unparalleled homework
                    assistance, ensuring you embrace the benefits of expert
                    guidance and comprehensive resources. Explore our features
                    and elevate your educational journey with confidence.
                  </p>
                </div>
                <AssignmentForm />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-screen-xl container items-center grid grid-cols-1 gap-6">
            {/* <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <FeaturesCard
            icon={<HeadphonesOutlinedIcon />}
            title="24/7 Live Assistance"
            iconClasses="#e3dcff"
            textColor="#593cc1"
            description="High Tech Tutor is focused on ensuring to meet the needs of the students around the globe for their assignments."
          />

          <FeaturesCard
            icon={<AccessAlarmIcon />}
            title="On time Delivery"
            iconClasses="#d1f5ea"
            textColor="#139a74"
            description="We make sure your work reach you on time because we know if it's not with you on-time, it will be a waste."
          />

          <FeaturesCard
            icon={<SellIcon />}
            title="Reasonable Pricing"
            iconClasses="#ffeeda"
            textColor="#c28135"
            description="Our prices are reasonable and pocket-friendly because we understand you better."
          />

          <FeaturesCard
            icon={<FindInPageOutlinedIcon />}
            title="100% Plagiarism free Content"
            iconClasses="#e3dcff"
            textColor="#593cc1"
            description="Get plagiarism free work where each and every assignment is written fro scratch to ensure that no content is plagiarized."
          />
          <FeaturesCard
            icon={<MonetizationOnOutlinedIcon />}
            title="Refundable"
            iconClasses="#d1f5ea"
            textColor="#139a74"
            description="Your payment is secured by Paypal and Razorpay, upto 100% money back guarantee."
          />

          <FeaturesCard
            icon={<DonutLargeOutlinedIcon />}
            title="Unlimited Revisions"
            iconClasses="#ffeeda"
            textColor="#c28135"
            description="You get 100% customized work as per your requirements, we are always willing to accommodate."
          />
          <FeaturesCard
            icon={<ContentPasteSearchIcon />}
            title="homework help"
            iconClasses="#ffdce5"
            textColor="#ff1850"
            description="Stuck with homework? PhD tutors have a distinctive mode of
              expression assisting students to solve assignments flawlessly."
          />
          <FeaturesCard
            icon={<ContentPasteSearchIcon />}
            title="AI-free Assignment"
            iconClasses="#e3dcff"
            textColor="#593cc1"
            description="The assignment papers that we deliver would not be AI-written. The subject experts in our team will analyze your requirements and prepare superior-quality assignments worthy of securing an A+ grade."
          />
          <FeaturesCard
            icon={<ContentPasteSearchIcon />}
            title="500+ Skilled Academic Writers"
            iconClasses="#ffeeda"
            textColor="#c28135"
            description="To offer help with writing assignments online, we have 500+ proficient native academic writers qualified from the top-ranked universities in America. All our assignment helper have either a post-graduation or a doctorate degree in a certain field of study."
          />
          
        </div> */}

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
              <FeaturesCard
                icon={<MonetizationOnOutlinedIcon />}
                title="Refundable"
                iconClasses="#d1f5ea"
                textColor="#139a74"
                description="Your payment is safeguarded through Paypal and Razorpay, with a money-back guarantee of up to 100%."
              />

              <FeaturesCard
                icon={<DonutLargeOutlinedIcon />}
                title="Unlimited Revisions"
                iconClasses="#e3dcff"
                textColor="#593cc1"
                description="You get 100% customized work as per your requirements, we are always willing to accommodate."
              />
              <FeaturesCard
                icon={<MonetizationOnOutlinedIcon />}
                title="AI-free Assignment"
                iconClasses="#ffeeda"
                textColor="#c28135"
                description="Our assignments, written by subject experts without AI, guarantee top grades."
              />
              <FeaturesCard
                icon={<ContentPasteSearchIcon />}
                title="homework help"
                iconClasses="#ffdce5"
                textColor="#ff1850"
                description="PhD tutors provide exclusive help for perfect homework problem-solving."
              />
              <FeaturesCard
                icon={<SecurityIcon />}
                title="Confidentiality Assured"
                iconClasses="#d1f5ea"
                textColor="#139a74"
                description="We assure the security of your information from any third-party miscreants."
              />
              <FeaturesCard
                icon={<Diversity3Icon />}
                title="Multiple Experts"
                iconClasses="#ffeeda"
                textColor="#c28135"
                description="500+ top-tier academic writers offer expert help for online writing assignments."
              />
              <FeaturesCard
                icon={<EmojiEventsIcon />}
                title="Rewards"
                iconClasses="#ffeeda"
                textColor="#c28135"
                description="500+ top-tier academic writers offer expert help for online writing assignments."
              />
              <FeaturesCard
                icon={<AllInclusiveIcon />}
                title="Lifetime Access"
                iconClasses="#e3dcff"
                textColor="#593cc1"
                description="500+ top-tier academic writers offer expert help for online writing assignments."
              />
              <FeaturesCard
                icon={<SmsIcon />}
                title="Free SMS Update"
                iconClasses="#ffdce5"
                textColor="#ff1850"
                description="Get free SMS updates related to your assignment status, requirements and clarifications, introduction of new feature to the service etc. Right away on your mobile."
              />
              <FeaturesCard
                icon={<PhoneInTalkIcon />}
                title="On Demand Phone Calls"
                iconClasses="#d1f5ea"
                textColor="#139a74"
                description="Get instant call back our relationship manager and get your queries solved."
              />
              {/* </div> */}
            </div>

            <div className="flex items-center justify-center">
              <a
                href="https://wa.me/918210403033"
                target="_blank"
                rel="noreferrer"
                className="bg-yellow-dark hover:no-underline cursor-pointer text-base md:text-xl text-black px-8 py-3 rounded-full sm:mb-10 sm:ml-0 ml-12 mt-6"
              >
                Get College Homework Assistance Now!
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;
