import { BsFillPlayFill } from "react-icons/bs";
// import hero from "../../assets/heroImage.webp";
import torch from "../../assets/light.webp";
import Banner from "./Banner";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Hero.css";
// import { options } from "../../data/nav";

const Hero = () => {
  const [name, setName] = useState("");
  const [pages, setPages] = useState(1);
  const [words, setWords] = useState(250);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [deadline, setDeadline] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [fileValue, setFileValue] = useState("");

  const navigate = useNavigate();

  // const onSubmitForm = async (e) => {
  //   e.preventDefault();

  //   const data = {
  //     device_number: "Device 13",
  //     name,
  //     email,
  //     phone,
  //     deadline,
  //     pages,
  //     words,
  //     subject,
  //     description,
  //     fileValue,
  //   };
  //   console.log("send Data:", data);

  //   if (
  //     !name ||
  //     !email ||
  //     !phone ||
  //     !deadline ||
  //     !pages ||
  //     !words ||
  //     !subject ||
  //     !description ||
  //     !fileValue
  //   ) {
  //     toast.warning("Please fill all required data.", {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //     return;
  //   }

  //   const sendData = await axios.post(
  //     "https://devicewebserver.el.r.appspot.com/api/geniusTutor/saveFormData",
  //     data
  //   );

  //   if (sendData.data.success) {
  //     setName("");
  //     setEmail("");
  //     setPhone("");
  //     setDeadline("");
  //     setPages(1); // Reset to the initial value
  //     setWords(250); // Reset to the initial value
  //     setSubject("");
  //     setDescription("");
  //     setFileValue("");
  //     navigate("/success");
  //     toast.success("successfully submitted.",{
  //       position: toast.POSITION.TOP_RIGHT,
  //     })

  //   } else {
  //     toast.error("Something went wrong.", {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //   }
  // };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const data = {
        device_number: "Device 13",
        name,
        email,
        phone,
        deadline,
        pages,
        words,
        subject,
        description,
        fileValue,
      };
      // console.log("send Data:", data);

      if (
        !name ||
        !email ||
        !phone ||
        !deadline ||
        !pages ||
        !words ||
        !subject ||
        !description ||
        !fileValue
      ) {
        toast.warning("Please fill all required data.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }

      const sendData = await axios.post(
        "https://devicewebserver.el.r.appspot.com/api/geniusTutor/saveFormData",
        data
      );

      if (sendData.data.success) {
        setName("");
        setEmail("");
        setPhone("");
        setDeadline("");
        setPages(1);
        setWords(250);
        setSubject("");
        setDescription("");
        setFileValue("");
        navigate("/success");
        toast.success("successfully submitted.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Server returned an error.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const select = (type) => {
    if (type === "minus" && pages > 1) {
      setPages((prevPage) => prevPage - 1);
    } else if (type === "add") {
      setPages((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    setWords(pages * 250);
  }, [pages]);

  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:py-12 sm:px-6 lg:pb-16 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:pb-20 lg:grid-cols-2 xl:gap-16">
          {/* <div className="md:h-64 xl:pt-20 md:order-last xl:h-[480px] sm:h-[480px]">
            <img
              loading="eager"
              alt="Two recent graduates in academic regalia, wearing caps and gowns, celebrating their achievement and looking forward to homework assistance."
              src={hero}
              className="h-full lg:h-auto xl:h-full w-full object-cover object-center"
            />
          </div> */}
          <div>
            <div className="">
              <div className="flex gap-2 mb-4 items-center sm:flex-row sm:gap-3">
                <img
                  src={torch}
                  loading="eager"
                  alt="torch"
                  title="torch"
                  width="auto"
                  height="auto"
                  className="w-[12px]"
                />
                <span className="capitalize text-black font-Inter font-semibold text-sm ">
                  best Homework Assistance platform
                </span>
              </div>
              <h1 className="text-3xl text-black md:w1/2 font-bold capitalize xl:text-[65px] xl:leading-[76px] mb-4">
                {/* getting best <br />quality education<br /> is now more <span>easier</span> */}
                Personalized Homework Assistance 24/7 - By Genius Tutors
              </h1>

              <p className="mt-4 text-black">
                Solutions when you need it, the way you need it- only at Genius Tutors
              </p>

              <div className=" mt-8 mb-6 grid grid-cols-2 lg:gap-6 flex-row gap-2">
                <div>
                  <a
                    href="/contact"
                    target="_blank"
                    className="cursor-pointer hover:no-underline inline-block rounded-full bg-yellow-dark px-6 lg:px-12 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
                  >
                    Get Help Now
                  </a>
                </div>
                <div className="flex flex-row gap-3 items-center sm:only:justify-center">
                  <a
                    href="#steps"
                    className="cursor-pointer hover:no-underline inline-block rounded-full bg-blue-blue p-3 text-sm font-medium text-white transition hover:bg-blue-darkBlue focus:outline-none "
                  >
                    <BsFillPlayFill size={25} />
                  </a>
                  <span className="font-bold text-black text-Inter capitalize">
                    see how it works?
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#feefce] p-6 rounded-lg mb-16">
            <form
              onSubmit={onSubmitForm}
              className="cursor-pointer bg-white py-3 px-4 text-center rounded-lg"
              style={{ boxShadow: "0 8px 34px rgba(0,0,0,.3105686275)" }}
            >
              <p>It&apos;s time you sought help from Genius TutorsExperts</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-8 mt-4">
                <div className="flex flex-col gap-3">
                  <div className="input-box">
                    <label>Enter Name</label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Name"
                      className="block px-3 lg:px-5 align-top form-control Email"
                    />
                  </div>
                  <div className="input-box">
                    <label>Enter Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={phone}
                      required
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter phone number"
                      className="block px-3 lg:px-5 align-top form-control Email"
                    />
                  </div>
                  <div className="input-box">
                    <label>Enter Deadline</label>
                    <input
                      type="datetime-local"
                      name="deadline"
                      value={deadline}
                      required
                      onChange={(e) => setDeadline(e.target.value)}
                      placeholder="Enter deadline"
                      className="block px-3 lg:px-5 flex-row text-[#2c2c2c] placeholder-slate-700 align-top form-control Email"
                    />
                  </div>
                  <div className="input-box">
                    <label>Select Number of words and page</label>
                    <div className="pages block px-0 h-auto mb-3 align-top form-control1 Email">
                      <div className="page-container">
                        <div className="flex justify-between w-full items-center">
                          <button
                            onClick={() => select("minus")}
                            className="text-xl font-bold border-r-[2px] bg-[#f3bb2d] rounded-s text-white border-r-black w-[30px] h-[30px] leading-[inherit] cursor-pointer"
                          >
                            -
                          </button>
                          <p className=" sm:text-sm text-xs">
                            {" "}
                            {pages} Page/{words} words
                          </p>
                          <button
                            onClick={() => select("add")}
                            className="text-xl w-[30px] h-[30px] leading-[inherit] rounded-e font-bold border-l-[2px] bg-[#f3bb2d] text-white border-l-black cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <input
                      type="number"
                      name="pages"
                      value={page}
                      required
                      onChange={(e) => setPage(e.target.value)}
                      placeholder="Enter no. of pages/words"
                      className="block px-3 lg:px-5 align-top form-control Email"
                    /> */}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="input-box">
                    <label>Enter Email</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email"
                      className="block px-3 lg:px-5 align-top form-control Email"
                    />
                  </div>
                  <div className="input-box">
                    <label>Enter Subject / Course Code</label>
                    <input
                      type="text"
                      name="subject"
                      value={subject}
                      required
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Enter subject / course code"
                      className="block px-3 lg:px-5 align-top form-control"
                    />
                  </div>
                  <div className="input-box">
                    <label>Enter Assignment Description</label>
                    <textarea
                      name="description"
                      type="textarea"
                      value={description}
                      required
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter assignment description"
                      className="block px-3 lg:px-5 align-top form-control Email"
                    />
                  </div>
                  <div className="input-box">
                    <label>Add File</label>
                    <input
                      type="file"
                      name="fileValue"
                      value={fileValue}
                      required
                      onChange={(e) => setFileValue(e.target.value)}
                      placeholder="add file"
                      className="block px-3 h-auto lg:px-5 align-top form-control"
                    />
                  </div>
                  {/* <div className="input-box">
                    <input
                      type="deadline"
                      name="deadline"
                      placeholder="Enter deadline"
                      className="block px-3 lg:px-5 align-top form-control Email"
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="number"
                      name="pages"
                      placeholder="Enter no. of pages/words"
                      className="block px-2 md:px-5 mb-5 align-top form-control Email"
                    />
                  </div> */}
                </div>
              </div>
              <div className="mt-3">
                <input type="checkbox" className="bg-white border-slate-700" />
                <span className="text-sm pl-2">
                  I accept the T&C and other policies of the website and agree
                  to receive offers and updeadlines.
                </span>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  // onClick={onSubmitForm}
                  className="cursor-pointer bg-green-dark text-white rounded-md px-5 w-full py-2 my-4"
                >
                  Free Assistance
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Banner />
    </section>
  );
};

export default Hero;
