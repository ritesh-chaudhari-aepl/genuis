/* eslint-disable react-refresh/only-export-components */
import "./code.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga";
import { useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../src/components/spinner/LoadingSpinner";
import { redirect } from "vite-plugin-ssr/abort";

export { Page };

// Custom Export
export const documentProps = {
  title: "Contact Genius Tutors for Academic Help Related Queries",
  description:
    "Get in touch with Genius Tutors for personalized academic assistance. Our expert tutors are dedicated to helping students excel. Contact us today.",
  canonical: "https://thegeniustutors.com/contact",
  url: "https://thegeniustutors.com/contact",
};

function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    ReactGA.event({
      action: "button_click",
      category: "Contact",
      label: "Test Label",
    });

    const data = {
      device_number: "Device 13",
      name,
      email,
      phone,
      subject,
      message,
    };

    if (!name || !email || !phone || !subject || !message) {
      toast.warning("Please fill all required data.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    try {
      setLoading(true); // Set loading to true during form submission

      const sendData = await axios.post(
        "https://dev6apis.el.r.appspot.com/api/deviceWeb/saveDeviceWebData",
        data
      );

      if (sendData.data.success) {
        redirect("/success");
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        toast.error("Something went wrong.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error("Error during form submission. Please Try Again", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setLoading(false); // Set loading back to false after form submission
    }
  };

  return (
    <section id="contact" className="bg-primaryWhite">
      <div className="max-w-screen-2xl px-5 pb-10 md:py-8 mx-auto">
        <div className="flex flex-col text-center w-full">
          <span className="gradText text-[19px] text-center uppercase font-Inter font-bold mb-6">
            Get in touch
          </span>
          <h2 className="sm:text-[44px] capitalize text-3xl text-[#293452] font-Inter font-bold mb-14">
            book a call
          </h2>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmitForm}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label>Enter Name*</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    type="text"
                    // id="name"
                    name="name"
                    className="w-full rounded-[3px] bg-white border font-Inter border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email">Email Address*</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-[3px] bg-white border font-Inter border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label>Phone/Mobile Number*</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-[3px] bg-white border font-Inter border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label>Subject*</label>
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full rounded-[3px] bg-white border font-Inter border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label>Enter your Message*</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    rows={4}
                    id="message"
                    name="message"
                    className="w-full rounded-[3px] bg-white border font-Inter border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  aria-label="submit btn"
                  title="Book a Call"
                  type="submit"
                  className="flex mx-auto font-Inter px-6 lg:px-12 py-4 text-sm font-medium transition bg-yellow-dark text-black rounded-full"
                >
                  {loading ? <LoadingSpinner /> : "Book a Call"}
                </button>
                <ToastContainer />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
