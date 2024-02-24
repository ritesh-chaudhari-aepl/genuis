import girl from "../../assets/girl (1).webp";
import { AiFillStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";

export function ReviewCard() {
  return (
    <div className="p-3 border-b-2 border-violet-300 ">
      <div>
        <div className="flex flex-row">
          <img
            loading="eager"
            src={girl}
            className="w-20 sm:w-20 lg:24 rounded-full p-2 shadow-inner shadow-red-600"
            alt="girl"
            title="girl"
            width="100%"
            height="100%"
          />
          <div className="pl-4">
            <h2 className="font-medium text-lg">
              llls<span className="text-blue-light"> |</span>
              <span className="font-normal italic"> Assignment</span>
            </h2>

            <p className="flex flex-row">
              <span className="pt-5">
                <AiFillStar color="#ED8A19" size={20} />
              </span>
              <span className="pt-5">
                <AiFillStar color="#ED8A19" size={20} />
              </span>
              <span className="pt-5">
                <AiFillStar color="#ED8A19" size={20} />
              </span>
              <span className="pt-5">
                <AiFillStar color="#ED8A19" size={20} />
              </span>
              <span className="pt-5">
                <BiSolidStarHalf color="#ED8A19" size={20} />
              </span>
            </p>
          </div>
        </div>
        <div className="float-right font-semibold italic">28/04/23</div>
      </div>
      <h3 className="font-semibold py-2 text-xl">short comment on review</h3>
      <p>
        discription of the review it can be about 100 of wwordds. and more than
        that also
      </p>
      <div>
        <button aria-label="like" title="like btn">
          Like
        </button>
        <button aria-label="dislike" title="dislike btn">
          dislike
        </button>
      </div>
    </div>
  );
}
