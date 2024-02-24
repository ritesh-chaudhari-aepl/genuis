/* eslint-disable react/prop-types */

import classNames from "classnames";

const FeaturesCard = ({ textColor, iconClasses, icon, title, description }) => {

  const cardClasses = classNames(

  );

  return (
    <div
      className={cardClasses}
    >
      <div
        className="rounded-full w-14 h-14 flex justify-center items-center p-4 transition mb-4"
        style={{ backgroundColor: iconClasses, color: textColor }}
      >
        <div className="w-7">{icon}</div>
      </div>
      <div className="flex flex-col">
        <span className="text-base text-black uppercase font-bold font-Inter mb-2">
          {title}
        </span>
        <p className="text-sm capitalize md:text-[14px] font-medium font-Inter text-[#837882]">
          {description}
        </p>
      </div>
    </div>
  );
};

// export default MainCard;

// const FeaturesCard = ({ no, title, discription }) => {
//   return (
//     <div
//       className="card flex flex-row h-auto  rounded-md max-w-xl px-4 py-3 justify-center"
//     >
//       <h2 className="text-[gray]  font-medium pr-2 text-5xl">{no}</h2>
//       <div className="border-l-4 pl-4 border-[gray] bg-gradient-to-r from-[rgba(128,128,128,0.2)] to-primaryWhite">
//       <h3 className="text-[#333] py-1 font-semibold text-2xl">{title}</h3>
//       <p className="  text-[#696984] text-lg sm:text-lg">{discription}</p>

//       </div>
//     </div>
//   );
// };

export default FeaturesCard;
