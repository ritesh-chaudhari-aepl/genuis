import girls from "../../assets/girl (1).webp";
import { AiFillStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";

export default function ServiceReview() {
  return (
    <div>
      <div className="w-fit mx-auto rounded-lg px-6 py-4 bg-gradient-to-tr from-[#bccafb] to-primaryWhite shadow-inner shadow-[#bccafb] bg-primaryWhite">
        <div className="flex space-x-16 flex-row">
          <h2 className="font-semibold text-2xl">Project Report</h2>
          <img
            loading="eager"
            src={girls}
            className=" w-20 sm:w-20 lg:24 rounded-full p-2 shadow-inner shadow-red-600"
            alt="girls"
            title="girls"
            width="100%"
            height="100%"
          />
        </div>
        <div className=" flex space-x-36  flex-row">
          <p className="flex flex-row">
            <span className="pt-5">
              <AiFillStar color="#ED8A19" size={18} />
            </span>
            <span className="pt-5">
              <AiFillStar color="#ED8A19" size={18} />
            </span>
            <span className="pt-5">
              <AiFillStar color="#ED8A19" size={18} />
            </span>
            <span className="pt-5">
              <AiFillStar color="#ED8A19" size={18} />
            </span>
            <span className="pt-5">
              <BiSolidStarHalf color="#ED8A19" size={18} />
            </span>
          </p>
          <p className="font-bold  text-4xl text-blue-blue">4.0</p>
        </div>
      </div>
    </div>
  );
}
