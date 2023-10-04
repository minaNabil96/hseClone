import React from "react";
import { useEffect } from "react";
import Button from "../reusable/Button.jsx";
import { Link } from "react-router-dom";
//
const tabs = [
  {
    name: "about",
    subNames: [
      "About",
      "Key Figures & Facts",
      "Faculties & Departments",
      "International Partnerships",
      "Faculty & Staff",
      "HSE Buildings",
      "Public Enquiries",
    ],
  },
  {
    name: "Studies",
    subNames: [
      "Admissions",
      "Programme Catalogue",
      "Undergraduate",
      "Graduate",
      "Exchange Programmes",
      "Summer University",
      "Summer Schools",
      "Semester in Moscow",
      "Business Internship",
    ],
  },
  {
    name: "Research",
    subNames: [
      "International Laboratories",
      "Research Centres",
      "Research Projects",
      "Monitoring Studies",
      "Conferences & Seminars",
      "Academic Jobs",
    ],
  },
  {
    name: "Media & Resources",
    subNames: [
      "Publications by staff",
      "HSE Journals",
      "Publishing House",
      "iq.hse.ru: commentary by HSE experts",
      "Library",
      "Economic & Social Data Archive",
      "Video",
    ],
  },
];
//
const Footer = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  //   const links = [
  //     { name: "facebook", icon: <FaSquareFacebook />, link: "#" },
  //     { name: "linkedin", icon: <FaLinkedin />, link: "#" },
  //     { name: "twitter", icon: <FaTwitterSquare />, link: "#" },
  //   ];
  //
  //   const linksMap = links.map(({ name, icon, link }) => (
  //     <li key={name}>
  //       <Link
  //         className={` text-[30px] ${
  //           name === "facebook"
  //             ? "text-blue-600"
  //             : name === "linkedin"
  //             ? "text-blue-500"
  //             : "text-blue-400"
  //         } `}
  //         to={link}
  //       >
  //         {icon}
  //       </Link>
  //     </li>
  //   ));

  const tabsMap =
    tabs &&
    tabs.map(({ name, subNames }, idx) => (
      <ul
        key={idx}
        className={`text-start space-y-2 lg:border-r border-separate border-slate-500/50 sm:me-5 my-3 lg:my-6 `}
      >
        <h2 className={`text-slate-50 text-[18px] capitalize cursor-pointer `}>
          {name}
        </h2>
        <li className={``}>
          {subNames.map((name, idx) => (
            <p
              key={idx}
              className={`text-slate-400  text-[15px] py-[0.30rem] capitalize cursor-pointer border-b border-[#002d6e] hover:border-b hover:border-slate-50 duration-150 w-fit max-w-[200px] `}
            >
              {name}
            </p>
          ))}
        </li>
      </ul>
    ));

  return (
    <footer className="py-5  bg-[#002d6e]  ">
      <div className="mx-auto  max-sm:w-[90%] sm:w-[90%] md:max-w-3xl xl:max-w-4xl ">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-1  text-center text-lg-start lg:border-b border-separate border-slate-500/50  ">
          {tabsMap}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
