// eslint-disable-next-line react/prop-types
const ReviewStars = ({ starno, percentno }) => {
  return (
    <div className="flex flex-row py-1">
      <sup className="text-lg px-2 font-semibold">{starno} star</sup>
      <p
        className={`w-[230px] sm:w-[300px] h-[17px] bg-gradient-to-r from-${percentno}% from-[#4b449c]  `}
      ></p>
      <sup className="text-lg px-2 font-semibold">{percentno}%</sup>
    </div>
  );
};

export default ReviewStars;
