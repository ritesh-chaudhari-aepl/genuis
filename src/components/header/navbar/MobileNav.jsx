/* eslint-disable react/prop-types */
import { BsWhatsapp } from "react-icons/bs";
import Services from "../../services/Services";

const MobileNavItem = ({ href, text, onClick }) => (
  <a
    href={href}
    className="text-black cursor-pointer hover:text-red-400 text-xl rounded-md font-Inter transition"
    onClick={onClick}
  >
    {text}
  </a>
);

const MobileNav = () => {
  // Function to handle scroll
  const handleScroll = (section) => {
    const value = document.getElementById(section);
    if (value) {
      value.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <div className="w-full h-full bg-violet-light overflow-y-auto">
      <ul className="h-full flex flex-col justify-center no-underline items-center gap-y-4">
        <li>
          <MobileNavItem href="/" text="Home" />
        </li>
        <li>
          <Services />
        </li>
        <li>
          <MobileNavItem
            href="/about"
            text="About"
            onClick={() => handleScroll("about")}
          />
        </li>
        <li>
          <MobileNavItem
            href="/features"
            text="Features"
            onClick={() => handleScroll("features")}
          />
        </li>
        <li>
          <MobileNavItem
            href="/contact"
            text="Contact"
            onClick={() => handleScroll("contact")}
          />
        </li>
        <li>
          <MobileNavItem href="/blogs" text="Blogs" />
        </li>
        <li>
          <div className="item-center justify-center gap-8 flex flex-col lg:hidden">
            <a
              href="https://wa.me/918210403033"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer flex gap-2 items-center rounded-full bg-green-dark md:px-8 md:py-4 px-3 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
            >
              <BsWhatsapp className="md:text-xl md:font-bold text-lg font-normal" />
              Chat on Whatsapp
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
