import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga";
import { useState } from "react";
import axios from "axios";
import { redirect } from "vite-plugin-ssr/abort";
import LoadingSpinner from "../spinner/LoadingSpinner";

const Newsletter = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState("newsletter-subscription");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    ReactGA.event({
      action: "button_click",
      category: "newsletter",
      label: "Test Label",
    });

    const data = {
      device_number: "Device 13",
      name,
      email,
    };
    if (!email) {
      toast.warning("Please fill email.", {
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
        setEmail("");
        setName("newsletter-subscription");
        // console.log(sendData, "data");
      } else {
        toast.error("Something went wrong.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error("Error during email submission. Please Try Again!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setLoading(false); // Set loading back to false after form submission
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Join Our Newsletter for Exclusive Updates!
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Stay in the loop with our latest news, promotions, and insider
            insights by subscribing to our newsletter. Don&apos;t miss out on
            exclusive updates delivered straight to your inbox – sign up today!
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form onSubmit={handleSubmitForm} className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                className="w-full rounded-md  border-[#dadada] border-2 bg-white p-3 text-gray-700 shadow-sm transition"
              />
            </div>

            <button
              aria-label="submit"
              title="Sign Up"
              type="submit"
              className="group mt-4 font-Inter flex w-full items-center justify-center gap-2 rounded-md bg-yellow-dark px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
            >
              {loading ? (
                <LoadingSpinner />
              ) : (
                <>
                  <span className="text-sm font-medium">Sign Up</span>
                  <svg
                    className="h-5 w-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </>
              )}
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
