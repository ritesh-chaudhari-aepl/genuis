import bg from "../../assets/maps-t.webp";

const Map = () => {
  return (
    // <div className="sm:mt-0 bg-[#789bc5]">
    <div className="sm:mt-0 bg-[#e9ebed]">
      <section
        id="map"
        className="mx-auto max-w-screen-xl lg:mt-28 mt-10 px-10"
      >
        <div className="py-4 sm:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20 justify-center items-center">
            <div className="relative lg:order-last">
              <img
                alt="A map with pins representing the locations of the best deals for homework assistance."
                title="A map with pins representing the locations of the best deals for homework assistance."
                src={bg}
                width="100%"
                height="100%"
                className=" h-auto w-full"
              />
            </div>

            <div className="lg:py-8 flex flex-col items-center lg:items-start">
              <h2 className="md:text-4xl font-semibold text-black font-Inter capitalize sm:leading-[66px] text-3xl">
                Genius Tutors Homework Assistance - Shaping a Brighter Future
                Globally
              </h2>

              <p className="mt-4 text-justify text-black font-Inter">
                GeniusTutor is dedicated to bridging educational gaps, firmly
                holding the belief that geographical constraints should never
                impede academic support. Boasting a remarkable history of
                fulfilling over 300,000 orders and garnering a satisfied
                customer base exceeding 100,000, GeniusTutor has emerged as a
                distinguished name among students globally. Our influence
                extends to the UK, USA, Canada, Australia, Singapore, UAE, and
                beyond, ensuring accessibility and excellence in academic
                assistance.
              </p>

              <a
                href="https://api.whatsapp.com/send/?phone=918210403033&text&type=phone_number&app_absent=0"
                target="_blank"
                className="mt-8 cursor-pointer font-Inter hover:no-underline inline-block rounded-full bg-yellow-dark px-12 py-3 text-sm font-medium text-black transition hover:bg-yellow-light focus:outline-none focus:ring focus:ring-yellow-400"
                rel="noreferrer"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;
