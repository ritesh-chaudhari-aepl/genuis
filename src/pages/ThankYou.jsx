import Lottie from "lottie-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import animation from "../assets/animation.json";
import "./style.css";

const ThankYou = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl pt-32 pb-10">
        <div className="flex flex-col items-center">
          <div>
            <Lottie animationData={animation} className="w-96 h-full" />
          </div>
          <div className="py-10">
            <p className="text-xl font-medium font-QuickSand text-center mb-1">
              Your Submission has been received
            </p>
            <p className="text-xl font-medium font-QuickSand text-center">
              We will be in touch and contact you soon.
            </p>
          </div>
          <div className="pt-10 pb-10">
            <a
              href="/"
              className="cursor-pointer hover:no-underline bg-gradient-to-r from-slate-900 to-slate-700 text-white w-full px-16 py-4 rounded-full font-bold font-Nunito"
            >
              Back to Home
            </a>
          </div>

          <div className="pt-10 flex flex-col items-center gap-10">
            <span className="text-xl font-bold font-QuickSand">Follow us</span>
            <div className="flex gap-10 items-center">
              <a>
                <BsFacebook className="text-xl text-blue-slateBlue" />
              </a>

              <a>
                <BsInstagram className="text-xl text-[#fb8500]" />
              </a>
              <a>
                <BsTwitter className="text-xl text-[#00b4d8]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
