import leftBook from "../../assets/left-books.webp";
import rightBook from "../../assets/right-books.webp";

const AnswerBank = () => {
  return (
    <section
      id="answerbank"
      className="flex justify-center items-center text-center"
    >
      <div className="">
        <img
          loading="eager"
          src={leftBook}
          width="100%"
          height="100%"
          alt="Neatly arranged stack of blue books, displaying a collection of literary works for homework assistance."
          title="Neatly arranged stack of blue books, displaying a collection of literary works for homework assistance."
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-normal text-black text-2xl font-Inter md:text-4xl ">
          An Instant{" "}
          <span className="text-[#ffa500] font-semibold">
            Hub of Solutions{" "}
          </span>
          for your Toughest{" "}
          <span className="text-[#0000ff99] font-semibold">Questions</span>
        </h2>
        <p className="py-3 md:py-0 md:mt-6 font-Inter md:mb-12 max-w-3xl text-lg md:text-2xl italic leading-7 text-gray-8">
          All solutions just a click away!
        </p>
        <a
          href="https://api.whatsapp.com/send/?phone=918210403033&text&type=phone_number&app_absent=0"
          target="_blank"
          className="inline-block font-Inter hover:no-underline cursor-pointer rounded-full bg-yellow-dark text-base md:text-xl text-black px-8 py-3 sm:mb-10 mt-6 transition hover:bg-indigo-700 capitalize"
          rel="noreferrer"
        >
          Access Now
        </a>
      </div>
      <div>
        <img
          loading="eager"
          src={rightBook}
          width="100%"
          height="100%"
          alt="A minimalist blue line drawing of a stack of books, symbolizing homework assistance."
          title="A minimalist blue line drawing of a stack of books, symbolizing homework assistance."
        />
      </div>
    </section>
  );
};

export default AnswerBank;
