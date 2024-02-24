/* eslint-disable no-undef */
// import { nav } from "../../../data/nav";
// import Services from "../../services/Services";

// function Navbar() {
// function handleScroll(href) {
//     let value = document.getElementById(section);
//     console.log(value);
//     if (value) {
//       value.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//         inline: "center",
//       });
//     }
//   }
//   return (
//     <nav>
//       <ul className="flex sm:gap-4">
//         <div>
//           <Services />
//         </div>
//         {nav.map((item) => {
//           // destructure item
//           const { href, name } = item;
//           return (
//             <li key={name}>
//               <a
//                 href={`/#${item.href}`}
//                 className="text-black cursor-pointer hover:text-red-400  rounded-md font-Inter sm:text-base font-bold transition"
//                 onClick={() => handleScroll(href)}
//               >
//                 {name}
//               </a>
//             </li>
//           );
//         })}

//         <a
//           className="text-black cursor-pointer hover:text-red-400  rounded-md font-Inter sm:text-base font-bold transition"
//           href="/review"
//         >
//           Review
//         </a>
//         <a
//           className="text-black cursor-pointer hover:text-red-400  rounded-md font-Inter sm:text-base font-bold transition"
//           href="/blog"
//         >
//           Blogs
//         </a>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

// import { nav } from "../../../data/nav";
import Services from "../../services/Services";

function Navbar() {
  function handleScroll(section) {
    let value = document.getElementById(section);
    if (value) {
      scrollIntoView(value, {
        behavior: "smooth",
        block: "center",
        inline: "center",
        scrollMode: "always",
        align: {
          top: "80px", // Center vertically
          // left: 0.5, // Center horizontally
        },
        cancellable: true,
        maxSynchronousAlignments: 3,
        debug: false,
      });
    }
  }

  // function handleScroll(section, e) {
  //   e.preventDefault();

  //   let target = document.getElementById(section);
  //   if (target) {
  //     const offset = 80; // Set your desired offset

  //     const bodyRect = document.body.getBoundingClientRect().top;
  //     const targetRect = target.getBoundingClientRect().top;
  //     const targetPosition = targetRect - bodyRect - offset;

  //     if (window.location.pathname === "/") {
  //       // If on the same page, use smooth scrolling
  //       window.scrollTo({
  //         top: targetPosition,
  //         behavior: "smooth",
  //       });
  //     } else {
  //       // If on a different page, navigate to the section with the full URL
  //       window.location.href = `${window.location.origin}/${window.location.pathname}#${section}`;
  //     }
  //   }
  // }

  return (
    <nav>
      <ul className="flex sm:gap-4">
        <li>
          <a
            className="text-black cursor-pointer hover:text-red-400  rounded-md font-Inter sm:text-base font-bold transition"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <Services />
        </li>
        {/* {nav.map((item) => {
          // destructure item
          const { href, name } = item;
          return (
            <li key={name}>
              <a
                href={`/#${href}`}
                className="text-black cursor-pointer hover:text-red-400 rounded-md font-Inter sm:text-base font-bold transition"
                onClick={(e) => handleScroll(`${href}`, e)}
                // onClick={(e) => handleScroll(`${href}`, e)}
              >
                {name}
              </a>
            </li>
          );
        })} */}
        <li>
          <a
            className="text-black cursor-pointer hover:text-red-400  rounded-md font-Inter sm:text-base font-bold transition"
            href="/about"
            target="_blank"
            rel="noreferrer"
            // onClick={(e) => handleScroll(`${href}`, e)}
            onClick={() => handleScroll("/about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-black cursor-pointer hover:text-red-400  rounded-md font-Inter sm:text-base font-bold transition"
            href="/features"
            target="_blank"
            rel="noreferrer"
            // onClick={(e) => handleScroll(`${href}`, e)}
            // onClick={() => handleScroll("/features")}
          >
            Features
          </a>
        </li>
        <li>
          <a
            className="text-black cursor-pointer hover:text-red-400  rounded-md font-Inter sm:text-base font-bold transition"
            href="/contact"
            target="_blank"
            rel="noreferrer"
            // onClick={(e) => handleScroll(`${href}`, e)}
            // onClick={() => handleScroll("/contact")}
          >
            Contact
          </a>
        </li>

        {/* <li>
          <a
            className="text-black cursor-pointer hover:text-red-400  rounded-md font-Inter sm:text-base font-bold transition"
            href="/review"
          >
            Review
          </a>
        </li> */}
        <li>
          <a
            className="text-black cursor-pointer hover:text-red-400 rounded-md font-Inter sm:text-base font-bold transition"
            href="/blogs"
            target="_blank"
            rel="noreferrer"
          >
            Blogs
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
