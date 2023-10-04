import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import Button from "../reusable/Button";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt, FaEye } from "react-icons/fa";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import SubHeader from "../components/SubHeader";
const tabs = [
  // { name: "About", arabicName: "عنا", path: "/about" },
  { name: "Divisions", arabicName: "التواصل", path: "#" },
  { name: "Faculty & Staff", arabicName: "الرئيسية", path: "#" },
  { name: "International Partnerships", arabicName: "الرئيسية", path: "#" },
  { name: "Academic Jobs", arabicName: "الرئيسية", path: "#" },
  { name: "Alumni", arabicName: "الرئيسية", path: "#" },
  { name: "University Life", arabicName: "الرئيسية", path: "#" },
];

const Header = () => {
  // english to arabic
  const [openMenu, setOpenMenu] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [openLanguages, setOpenLanguages] = useState(false);
  // toolkit
  const location = useLocation();
  // scrolltotoponclick
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  const tabsMap = tabs.map(({ name, arabicName, path }, idx) => (
    <div key={idx} className={`min-w-fit  text-[14px]  font-thin  `}>
      <NavLink
        end
        className={({ isActive, isPending }) =>
          isActive
            ? " text-white  w-full h-full  duration-150  "
            : "   text-stone-200/90 w-full h-full  bg-inherit  hover:text-white duration-150 "
        }
        to={path}
      >
        {name}
      </NavLink>
    </div>
  ));

  return (
    <nav
      className={`   z-30 absolute top-0 min-w-full   h-fit md:h-10  bg-transparent  md:border-b border-slate-100/60 max-md:py-1 py-6  `}
      // onScroll={() => scrollHandler()}
    >
      {/* start md screens */}
      <div className=" relative flex items-center justify-center  ">
        <div
          className={`absolute top-12 max-sm:top-2 max-sm:w-[90%] w-full  mx-auto`}
        >
          <SubHeader />
        </div>
        <div
          className={` max-md:hidden absolute container mx-auto  md:flex items-center justify-between sm:w-[90%] md:max-w-3xl xl:max-w-4xl  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  `}
        >
          <div className="flex items-center justify-center h-full  space-x-2 xl:space-x-3  ">
            {tabsMap}
          </div>
          <div className="flex items-center justify-center h-full  max-lg:hidden  ">
            <div className={`flex items-center justify-center space-x-3  `}>
              <span
                className={` flex items-center justify-center space-x-1 border-e border-slate-100 pe-3  min-w-fit font-thin `}
              >
                <p className={`text-slate-100 text-[13px] w-fit `}>Campus in</p>
                <FaMapMarkerAlt className={`text-[20px] text-slate-100`} />
                <p className={`text-slate-100 text-[13px] `}>Moscow</p>
              </span>
              <span
                className={`flex items-center justify-center space-x-1 border-e border-slate-100 pe-3 `}
              >
                <FaEye className={`text-[21px] text-slate-100`} />
              </span>
              <span
                className={`flex items-center justify-center space-x-1 border-e border-slate-100 pe-3 `}
              >
                <svg
                  className="control_svg"
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>User profile (HSE staff only)</title>
                  <path
                    className="control__path"
                    d="M13.702 13.175c.827.315 1.486.817 1.978 1.506.492.689.738 1.467.738 2.333h-16.419c0-1.417.532-2.5 1.595-3.248.394-.276 1.358-.591 2.894-.945.945-.118 1.457-.374 1.536-.768.039-.157.059-.61.059-1.358 0-.118-.039-.217-.118-.295-.157-.157-.315-.433-.472-.827-.079-.315-.157-.787-.236-1.417-.157.039-.285-.02-.384-.177-.098-.157-.177-.364-.236-.62l-.089-.443c-.157-.866-.098-1.28.177-1.24-.118-.157-.217-.532-.295-1.122-.118-.866-.059-1.634.177-2.303.276-.748.768-1.319 1.476-1.713.709-.394 1.476-.571 2.303-.532.787.039 1.506.276 2.156.709.65.433 1.093 1.024 1.329 1.772.197.551.217 1.319.059 2.303-.079.472-.157.768-.236.886.118-.039.207 0 .266.118.059.118.079.266.059.443l-.059.472c-.02.138-.049.246-.089.325l-.118.413c-.039.276-.108.472-.207.591-.098.118-.226.157-.384.118-.079.866-.217 1.476-.413 1.831 0 .039-.069.138-.207.295-.138.157-.207.256-.207.295v.65c0 .394.039.689.118.886.079.197.354.354.827.472.276.118.679.217 1.211.295.532.079.935.177 1.211.295z"
                    fill="#1658DA"
                  ></path>
                </svg>
              </span>
              <div
                className={` relative flex items-center justify-between w-full cursor-pointer`}
              >
                <p
                  onClick={() => setOpenLanguages(true)}
                  className={`text-[16px] text-slate-100 capitalize font-thin `}
                >
                  {language}
                </p>
                {openLanguages ? (
                  <GoTriangleUp
                    onClick={() => setOpenLanguages(false)}
                    className={`text-[16px] text-slate-100`}
                  />
                ) : (
                  <GoTriangleDown
                    onClick={() => setOpenLanguages(true)}
                    className={`text-[16px] text-slate-100`}
                  />
                )}
                {openLanguages && (
                  <div
                    className={`absolute min-w-full bg-slate-100 rounded-md py-2 px-3 flex items-center justify-between flex-col space-y-1 -bottom-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
                  >
                    <p
                      className={`text-[16px]  text-slate-900 hover:text-blue-600 capitalize `}
                      onClick={(e) => {
                        setOpenLanguages(false);
                        setLanguage(e.target.innerText);
                      }}
                    >
                      EN
                    </p>
                    <p
                      className={`text-[16px]  text-slate-900 hover:text-blue-600 capitalize `}
                      onClick={(e) => {
                        setOpenLanguages(false);
                        setLanguage(e.target.innerText);
                      }}
                    >
                      RU
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* end md screens */}
        {/* start under sm screens */}
      </div>
      {/* end uder sm screens */}
    </nav>
  );
};

export default Header;
