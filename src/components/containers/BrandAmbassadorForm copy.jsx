import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BrandAmbassadorForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [subject, setSubject] = useState();
  // const [message, setMessage] = useState();

  const navigate = useNavigate();

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
      // message: "Brand Ambassador Form",
    };
    if (!name || !email || !phone || !subject) {
      toast.warning("Please fill all required data.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    const sendData = await axios.post(
      "https://dev6apis.el.r.appspot.com/api/deviceWeb/saveDeviceWebData",
      data
    );

    if (sendData.data.success) {
      navigate("/success");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      // setMessage("Brand Ambassador Form");
    } else {
      toast.error("Something went wrong.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div id="brand-form" className="bg-[#feefce] p-6 my-12 rounded-lg">
      <form
        onSubmit={handleSubmitForm}
        className="cursor-pointer bg-white py-3 px-4 text-center rounded-lg"
        style={{ boxShadow: "0 8px 34px rgba(0,0,0,.3105686275)" }}
      >
        <div className="flex flex-wrap">
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
                className="w-full font-Inter rounded-[3px] bg-white border border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                className="w-full rounded-[3px] font-Inter bg-white border border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                className="w-full rounded-[3px] font-Inter bg-white border border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label>Subject</label>
              <input
                value="Brand Ambassador Form"
                // onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                type="text"
                id="subject"
                name="subject"
                className="w-full rounded-[3px] font-Inter bg-white border border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          {/* <div className="p-2 w-full">
                <div className="relative">
                  <label>Enter your Message*</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    rows={4}
                    id="message"
                    name="message"
                    className="w-full rounded-[3px] font-Inter bg-white border border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>  */}
          <div className="p-2 w-full">
            <button
              aria-label="submit button"
              title="Become a Brand Ambassador"
              type="submit"
              className="flex mx-auto  px-6 lg:px-12 py-4 text-sm font-medium transition bg-yellow-dark text-black rounded-full"
            >
              Become a Brand Ambassador
            </button>
            <ToastContainer />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BrandAmbassadorForm;
