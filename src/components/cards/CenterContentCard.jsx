/* eslint-disable react/prop-types */
const CenterContentCard = ({ icon, title, description, textColor, iconBg }) => {
  return (
    <div className="cursor-pointer main-card flex hover:rounded hover:border-2 hover:transition hover:no-underline hover:border-[#14abc3] hover:shadow-sm mb-8">
      <div className="rounded overflow-hidden bg-white p-3 md:p-6 gap-3 flex flex-col">
        <div
          className={`w-10 h-10 rounded text-[${textColor}] items-center justify-center flex flex-col bg-[${iconBg}]`}
        >
          {icon}
          {/* <div
          //   className={`w-10 h-10 rounded items-center justify-center flex ${iconBg}`}
          >
            <img
              src={icon}
              alt={alt}
              title={alt}
              // className="w-20 h-auto"
              width="100%"
              height="100%"
              className="w-full h-28 md:h-36"
              loading="eager"
            />
          </div> */}
        </div>
        <span className="font-semibold text-black text-base font-Inter ">
          {title}
        </span>
        <p className="text-[13px] text-[#5f5f5f] font-medium leading-normal font-Inter">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CenterContentCard;
