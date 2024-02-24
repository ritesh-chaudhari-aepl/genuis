/* eslint-disable react/prop-types */
import "./clip-path.css";

const ServiceCard2 = ({ type, img, alt, top }) => {
  return (
    <div className="bg-[#7b98bd] clip-path2 px-4 pt-5 pb-16 w-[190px]  rounded-lg rounded-br-lg">
      <div>
        <div>
          <div>
            <div className="flex gap-1 items-center">
              <p className=" text-white text-2xl font-Nunito font-bold">
                {top}
              </p>
              <img
                src={img}
                alt={alt}
                title={alt}
                className="w-10"
                loading="eager"
                width="100%"
                height="100%"
              />
            </div>
            <p className=" text-white text-base font-Nunito font-bold">
              {type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard2;
