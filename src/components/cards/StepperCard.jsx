/* eslint-disable react/prop-types */

const CustomCard = ({ icon, title, msg }) => {
  return (
    <div className="flex flex-col gap-9 lg:gap-0 lg:flex-row justify-center items-center">
      <div
        className={`card shadow-sm border-2 border-[rgba(128,128,128,0.2)] hover:scale-105 hover:shadow-[#bfdbfe] hover:shadow-2xl transition duration-700 ease-in-out  bg-white rounded-md w-[280px] h-[160px] px-7 justify-center`}
      >
        <div>{icon}</div>
        <div className="font-bold text-xl  text-black">{title}</div>
        <div className="italic ">{msg}</div>
      </div>
    </div>
  );
};

export default CustomCard;
