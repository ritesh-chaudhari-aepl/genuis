import bg1 from "../../assets/redBg.webp";
import bg2 from "../../assets/greenBg.webp";

const Instructor = () => {
  const bgstyles1 = {
    backgroundImage: `url(${bg1})`,
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
  };
  const bgstyles2 = {
    backgroundImage: `url(${bg2})`,
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section aria-label="instructors" className="bg-primaryWhite">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex px-6 flex-col items-center gap-8 sm:gap-6 sm:justify-center sm:flex-row sm:ml-0">
          <div className="card1">
            <div
              className="card w-[310px] sm:w-[350px] p-4 sm:p-6"
              style={bgstyles1}
            >
              <span className="text-[#30BEAD] capitalize text-base font-Inter font-semibold">
                build your career
              </span>
              <p className="capitalize text-sm mt-4 mb-6 text-[#ccc] font-Inter">
                learn at you own pace, move the
                <br /> between multiple courses
              </p>

              <button className="bg-red-400 cursor-pointer text-white font-bold ring-0 rounded px-4 sm:px-2 sm:py-4 py-4 w-1/2">
                Apply Now
              </button>
            </div>
          </div>
          <div className="card2">
            <div
              className="card w-[310px] sm:w-[350px] p-4 sm:p-6"
              style={bgstyles2}
            >
              <span className="text-[#30BEAD] capitalize text-base font-Inter font-semibold">
                build your career
              </span>
              <p className="capitalize text-sm mt-4  mb-6 text-[#ccc] font-Inter">
                learn at you own pace, move the
                <br /> between multiple courses
              </p>

              <button className="bg-black cursor-pointer text-white font-bold ring-0 rounded px-4 sm:px-3 sm:py-4 py-4 w-1/2">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;

// <div className="card w-[550px] h-[280px] px-8 py-6" style={bgstyles1}>
// <span className="text-[#30BEAD] capitalize text-base font-Inter font-semibold">
//   build you career
// </span>
// <p className="capitalize text-xl font-Inter font-bold mt-2 text-black">
//   become an <span className="text-red-400">instructor</span>
// </p>
// <p className="capitalize text-sm mt-4  mb-6 text-[#ccc] font-Inter">
//   learn at you own pace, move the
//   <br /> between multiple courses
// </p>

// <button className="bg-red-400 text-white font-bold ring-0 rounded px-4 py-4 w-1/3">
//   Apply Now
// </button>
// </div>
// <div className="card w-[550px] h-[280px] px-8 py-6" style={bgstyles2}>
// <span className="text-[#30BEAD] capitalize text-base font-Inter font-semibold">
//   build you career
// </span>
// <p className="capitalize text-xl font-Inter font-bold mt-2 text-black">
//   Get Free <span className="text-red-400">courses</span>
// </p>
// <p className="capitalize text-sm mt-4  mb-6 text-[#ccc] font-Inter">
//   learn at you own pace, move the
//   <br /> between multiple courses
// </p>

// <button className="bg-black text-white font-bold ring-0 rounded px-4 py-4 w-1/3">
//   Apply Now
// </button>
// </div>
