import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga";
import { useState } from "react";
import axios from "axios";
import LoadingSpinner from "../spinner/LoadingSpinner";
import { redirect } from "vite-plugin-ssr/abort";

const BrandAmbassadorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Brand Ambassador Form",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    ReactGA.event({
      action: "button_click",
      category: "Contact",
      label: "Test Label",
    });

    const { name, email, phone, subject, message } = formData;
    if (!name || !email || !phone || !subject || !message) {
      toast.warning("Please fill all required data.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://dev6apis.el.r.appspot.com/api/deviceWeb/saveDeviceWebData",
        {
          device_number: "Device 13",
          ...formData,
        }
      );

      if (response.data.success) {
        redirect("/success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "Brand Ambassador Form",
          message: "",
        });
      } else {
        toast.error("Something went wrong.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setLoading(false);
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
          {["name", "email", "phone", "message"].map((field) => (
            <div key={field} className="p-2 w-1/2 relative">
              <div className="relative">
                <label htmlFor={field} className="ml-2">
                  {field === "subject"
                    ? field.charAt(0).toUpperCase() + field.slice(1)
                    : `Enter ${
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }*`}
                </label>
                {/* Add the icon here */}
                {field === "name" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-7 absolute left-3 top-1/2 transform text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                )}
                {field === "email" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-7 absolute left-3 top-1/2 transform text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                )}
                {field === "phone" && (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-7 absolute left-3 top-1/2 transform text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                    {/* <input
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder="Enter phone number with country code"
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      className="w-full pl-10 rounded-[3px] bg-white border border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    /> */}
                  </>
                )}

                {field === "message" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-7 absolute left-3 top-1/2 transform text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                )}
                <input
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  className="w-full pl-10 font-Inter rounded-[3px] bg-white border border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          ))}

          <div className="p-2 w-full">
            <button
              type="submit"
              className="flex mx-auto px-6 lg:px-12 font-Inter py-4 text-sm font-medium transition bg-yellow-dark text-black rounded-full"
            >
              {loading ? <LoadingSpinner /> : "Become a Brand Ambassador"}
            </button>
            <ToastContainer />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BrandAmbassadorForm;
