/* eslint-disable no-undef */
// import { useState } from "react";
import logo from "../../assets/logo-transparent.webp";
import { BsWhatsapp, BsFacebook } from "react-icons/bs";
import "./footer.css";
import { DropdownItem } from "../components/services/DropdownItem";
import { options } from "../data/nav";
import payimg from "../../assets/payment-img-list.webp";

const Footer = () => {
  // const [marginTop, setMarginTop] = useState(0);

  const handleScroll = () => {
    // Calculate the margin-top based on your header height (80px)
    setMarginTop(110);
  };

  return (
    <>
      <footer aria-label="Site Footer" className="bg-[#525FE1] text-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
          <div className="flex sm:items-center sm:text-center md:items-start md:text-left flex-col gap lg:flex-row lg:gap-16">
            <div className="flex flex-col basis-1/3 ">
              <div className="flex justify-center text-white sm:justify-start">
                {/* <span className="text-[25px] tracking-[10px] border border-white p-2">
                LOGO
              </span> */}
                <img
                  loading="eager"
                  src={logo}
                  className="w-24"
                  width="100%"
                  height="100%"
                  alt="Genius Tutors Logo"
                  title="Genius Tutors Logo"
                />
              </div>
              <div className="flex items-center justify-center md:items-start md:justify-start flex-col mt-8 gap-2 leading-[30px] text-white">
                <p className="text-center md:text-left">
                  Genius Tutors is an online platform that connects online
                  tutors with students across the globe who seeks academic help.
                </p>
                <span className="font-inter text-white">
                  <strong>Phone</strong>:{" "}
                  <a
                    href="tel:918210403033"
                    className="text-white transition hover:text-white/75 capitalize cursor-pointer"
                  >
                    +91 8210403033
                  </a>
                </span>
                <div>
                  <span className="font-inter text-white">
                    <strong>Email</strong>:{" "}
                    <a
                      href="mailto:support@thegeniustutors.com"
                      className="text-white transition hover:text-white/75 cursor-pointer"
                    >
                      support@thegeniustutors.com
                    </a>
                  </span>
                </div>
                <div className="text-center sm:text-left text-white">
                  <span className="font-inter capitalize text-base">
                    <strong>Address</strong>: c/o -s.k.mishra, c.m.r.i gate,
                    bartand, dhanbad, jharkhand, India (826001){" "}
                  </span>
                </div>
                <div className="social">
                  <a
                    aria-label="Facebook Profile"
                    href="https://www.facebook.com/profile.php?id=100091588713018&is_tour_completed=true"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    <div className="social-btn color-telegram">
                      <BsFacebook className="icons8-telegram-app" />
                    </div>
                  </a>
                  <a
                    aria-label="Instagram Profile"
                    href="https://instagram.com/genius_tutor01"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    <div className="social-btn color-instagram">
                      <div className="icons8-instagram"></div>
                    </div>
                  </a>
                  <a
                    aria-label="WhatsApp Chat"
                    href="https://api.whatsapp.com/send/?phone=918210403033&text&type=phone_number&app_absent=0"
                    target="_blank"
                    className="cursor-pointer"
                    rel="noreferrer"
                  >
                    <div className="social-btn color-whatsapp">
                      <BsWhatsapp className="icons8-whatsapp" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex basis-1/3 items-center flex-col mt-10 lg:mt-0 grid-cols-3 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2 relative">
              <div className="text-center sm:text-left text-white">
                <p className="text-lg font-medium text-white font-Inter">
                  Services
                </p>

                <nav aria-label="Footer About Nav" className="mt-8 ">
                  {/* {options.map((item, index) => (
                  <DropdownItem
                    className="px-0 grid grid-cols-2"
                    key={index}
                    href={`/services/${item.href}`}
                    // href={`/services/${item.href}`}
                    name={item.label}
                  />
                ))} */}
                  {options.reduce((acc, item, index) => {
                    if (index % 2 === 0) {
                      const nextItem = options[index + 1];
                      acc.push(
                        <div key={index} className="grid grid-cols-2">
                          <DropdownItem
                            className="pl-0 text-white cursor-pointer"
                            href={`/services/${item.href}`}
                            name={item.name}
                            textColor="white"
                            textHoverColor=""
                            pl="0"
                          />
                          {nextItem && (
                            <DropdownItem
                              className="pl-0 text-white cursor-pointer"
                              href={`/services/${nextItem.href}`}
                              name={nextItem.name}
                              textColor="white"
                              textHoverColor=""
                              pl="0"
                            />
                          )}
                        </div>
                      );
                    }
                    return acc;
                  }, [])}
                </nav>
              </div>
            </div>

            <div className="flex basis-1/5 items-center flex-col mt-10 lg:mt-0 grid-cols-3 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2 relative">
              <div className="text-center sm:text-left text-white">
                <p className="text-lg font-medium text-white font-Inter">
                  About
                </p>

                <div className="">
                  <nav aria-label="Footer About Nav" className="mt-8 ">
                    <ul className="space-y-4 text-sm">
                      <li>
                        <a
                          className="text-white transition hover:text-white/75 capitalize cursor-pointer"
                          href="/#home-service"
                          onClick={(e) => handleScroll(`${href}`, e)}
                        >
                          What we do?
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white transition hover:text-white/75 capitalize cursor-pointer"
                          href="/#answerbank"
                          onClick={(e) => handleScroll(`${href}`, e)}
                        >
                          answer bank
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white transition hover:text-white/75 capitalize cursor-pointer"
                          href="/about"
                          onClick={(e) => handleScroll(`${href}`, e)}
                          >
                          about
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white transition hover:text-white/75 capitalize cursor-pointer"
                          href="/#testimonial"
                          onClick={(e) => handleScroll(`${href}`, e)}
                        >
                          testimonials
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white transition hover:text-white/75 capitalize cursor-pointer"
                          href="/contact"
                          onClick={(e) => handleScroll(`${href}`, e)}
                        >
                          Enquiry
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white transition hover:text-white/75 capitalize cursor-pointer"
                          href="/blogs"
                        >
                          blogs
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white transition hover:text-white/75 capitalize cursor-pointer"
                          href="/become-a-brand-ambassador"
                        >
                          Become a Brand Ambassador
                        </a>
                      </li>
                      {/* <li>
                    <a
                      className="text-white transition hover:text-white/75 capitalize cursor-pointer"
                      href="/review"
                    >
                      review
                    </a>
                  </li> */}
                    </ul>
                  </nav>
                  <img
                    src={payimg}
                    alt="pay"
                    title="pay"
                    width="auto"
                    height="auto"
                    className="mt-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:flex place-content-center md:block w-full border-t border-white pt-6 pb-12">
          <div className=" mx-auto max-w-screen-xl px-4 text-center sm:flex gap-4 sm:justify-between sm:text-left">
            <div className="flex flex-row">
              <div className="flex flex-row gap-3 ">
                <a
                  className="inline-block text-white transition sm:text-sm lg:text-base font-Inter text-xs hover:text-white/75 capitalize cursor-pointer"
                  href="/terms-and-condition"
                >
                  Terms & Conditions
                </a>

                <span className="mr-3">|</span>
              </div>

              <div className="flex flex-row gap-3 ">
                <a
                  className="inline-block text-white transition sm:text-sm lg:text-base font-Inter text-xs hover:text-white/75 capitalize cursor-pointer"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>

                <span className="mr-3">|</span>
              </div>
              <div className="flex flex-row gap-3 ">
                <a
                  className="inline-block text-white transition sm:text-sm lg:text-base font-Inter text-xs hover:text-white/75 capitalize cursor-pointer"
                  href="/discount-policy"
                >
                  Discount Policy
                </a>

                <span className="mr-3">|</span>
              </div>
              <div className="flex sm:flex-row gap-3 ">
                <a
                  className="inline-block text-white transition sm:text-sm lg:text-base font-Inter text-xs hover:text-white/75 capitalize cursor-pointer"
                  href="/refund-policy"
                >
                  Refund
                </a>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-white font-Inter sm:order-first sm:mt-0">
              © 2024{" "}
              <a
                href="https://thegeniustutors.com/"
                className="cursor-pointer text-white"
              >
                genius-tutors.com
              </a>
              . All rights reserved Abhay Education Pvt. Ltd.
            </p>
          </div>
        </div>

        {/* <div className="social">
        <a
          href="https://www.facebook.com/profile.php?id=100091588713018&is_tour_completed=true"
          target="_blank"
          rel="noreferrer" className="cursor-pointer"
        >
          <div className="social-btn color-telegram">
            <BsFacebook className="icons8-telegram-app" />
            <p className="order-1 text-lg font-medium margin-telegram">
              Facebook
            </p>
          </div>
        </a>
        <a
          href="https://instagram.com/genius_tutor01"
          target="_blank"
          rel="noreferrer" className="cursor-pointer"
        >
          <div className="social-btn color-instagram">
            <div className="icons8-instagram"></div>
            <p className="order-1 text-lg font-medium margin-instagram">
              Instagram
            </p>
          </div>
        </a>
        <a href="https:///918210403033" className="cursor-pointer" target="_blank" rel="noreferrer">
          <div className="social-btn color-whatsapp">
            <BsWhatsapp className="icons8-whatsapp" />
            <p className="order-1 text-lg font-medium margin-instagram">
              Whatsapp
            </p>
          </div>
        </a>
      </div> */}
      </footer>
      <a
        className="quote-btn text-sm p-2 font-Inter xl:px-4 py-2 fixed right-0 hover:no-underline top-1/2 rotate-90 bg-[#0E1340] text-white xl:text-base font-medium rounded-b-md"
        style={{ transformOrigin: "top right", marginTop: "-1.5rem" }}
        href="/contact"
      >
        Get a Free Quote
      </a>
    </>
  );
};

export default Footer;
