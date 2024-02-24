/* eslint-disable react/prop-types */

const SmallCard = ({ no, title, discription }) => {
  return (
    <div
      className={`card bg-gradient-to-r hover:scale-105 duration-300 transition hover:from-[rgba(128,128,128,0.3)] from-[rgba(128,128,128,0.2)] to-primaryWhite rounded-md max-w-xl px-8 py-10`}
    >
      <h3 className="text-[gray] opacity-70  font-bold lg:text-6xl">{no}</h3>
      <h3 className="text-[#333] py-5 font-bold  text-2xl">{title}</h3>
      <p className="font-medium text-sm  text-[#696984] ">{discription}</p>
    </div>
  );
};

export default SmallCard;
