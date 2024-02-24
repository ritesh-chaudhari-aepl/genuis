import Divider from "../../common/Divider";

const Banner = () => {
  const stats = [
    { count: "8K+", label: "success stories" },
    { count: "200+", label: "expert instructors" },
    { count: "108K+", label: "worldwide students" },
    { count: "310+", label: "trendy subjects" },
  ];

  return (
    <div className="bg-blue-darkBlue items-center py-12">
      <div className="mx-auto max-w-screen-xl flex items-center">
        <div className="flex flex-col gap-8 items-center justify-around w-full sm:flex-row sm:justify-around ">
          {stats.map(({ count, label }, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-center gap-10"
            >
              <div className="flex flex-col">
                <p className="text-[35px] text-center divide-x-4 font-Inter font-bold text-white">
                  {count}
                </p>
                <span className="text-[19px]  font-medium capitalize text-white text-center">
                  {label}
                </span>
              </div>
              {index < stats.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
