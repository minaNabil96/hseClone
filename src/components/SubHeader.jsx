import React, { useState, useEffect, Fragment, useRef } from "react";
import { createPortal } from "react-dom";
import subnavdata from "../assets/subnavdata.json";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { FaMapMarkerAlt, FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMenuStatus,
  changeBigMenuStatus,
} from "../store/reducers/smallMenuSlice";

//

//
const SubHeader = () => {
  const [hoveredName, setHoveredName] = useState("");
  const [selectedSubName, setSelectedSubName] = useState("");
  const [subNameContaines, setSubNameContaines] = useState([]);
  const [language, setLanguage] = useState("EN");
  const [openLanguages, setOpenLanguages] = useState(false);
  const [smallSearchStatus, setSmallSearchStatus] = useState(false);
  const [smallScreenStatus, setSmallScreenStatus] = useState(false);
  const smallSearchRef = useRef(null);
  // toolkit
  const dispatch = useDispatch();
  const { menuStatus, bigMenuStatus } = useSelector(
    (state) => state.smallMenuSlice,
  );

  // detect click outside search
  useEffect(() => {
    const detectOutside = (e) => {
      if (
        smallSearchStatus &&
        e.target.id !== "smallSearchIcon" &&
        smallSearchRef.current &&
        !smallSearchRef.current.contains(e.target)
      ) {
        setSmallSearchStatus(false);
      } else {
        return;
      }
    };

    document.addEventListener("click", detectOutside);
  }, [smallSearchStatus]);

  // loops
  const subTabs = subnavdata
    .filter(({ name }) => name === hoveredName)
    .map(({ subNames }, idx) => {
      if (subNames) {
        return (
          <div key={idx} className={`w-full  `}>
            {subNames.map(({ subName, containes }) => (
              <div
                className={`relative flex items-center justify-between py-3 `}
                key={subName}
              >
                <p
                  className={` text-[15px] text-start  cursor-pointer w-full ${
                    subName === selectedSubName
                      ? "text-blue-600"
                      : "text-slate-900"
                  } `}
                  onClick={(e) => {
                    setSelectedSubName(e.target.innerText);
                    setSubNameContaines(containes);
                  }}
                >
                  {subName}
                </p>
                {subName === selectedSubName ? (
                  <div
                    className={` absolute -right-[0.13rem] pe-2  bg-slate-50  border-y border-l border-y-slate-300  border-l-slate-300 border-r border-r-slate-50 rounded-sm pl-2 pr-1 py-[0.30rem]  `}
                  >
                    <IoIosArrowBack className={`text-[24px] text-blue-600 `} />
                  </div>
                ) : (
                  <div
                    className={` absolute -right-[0.13rem] pe-2  border-y border-l border-slate-50 rounded-sm pl-2 pr-1 py-[0.30rem]`}
                  >
                    <IoIosArrowForward
                      className={`text-[24px] text-slate-900  `}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      } else {
        return;
      }
    });

  const tabsMap = subnavdata.map(
    ({ name, arabicName, path, subNames }, idx) => (
      <div
        key={idx}
        className={`min-w-fit relative max-sm:flex max-sm:items-center max-sm:justify-between max-sm:w-full `}
      >
        <Link
          className={`max-lg:text-slate-800 text-slate-50  w-full h-full text-[17px] max-sm:text-[20px] z-10  `}
          to={path}
          onMouseEnter={(e) => {
            setSubNameContaines([]);
            setHoveredName(e.target.innerText);
            if (subNames && subNames.length > 0) {
              setSelectedSubName(subNames[0].subName);
              setSubNameContaines(subNames[0].containes);
            }
          }}
        >
          {name}
        </Link>
        {name === hoveredName && (
          <GoTriangleUp
            className={`absolute w-full text-[44px] text-slate-50  left-1/2 top-[2.35rem] transform -translate-x-1/2 -translate-y-1/2 `}
          />
        )}
        <BsArrowRight className={`sm:hidden text-[28px] text-slate-800 `} />
      </div>
    ),
  );

  const Logo = () => {
    return (
      <Link
        className={`flex items-center justify-center w-[40px] mr-[24px]`}
        to={`/`}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 0C8.91429 0 0 8.91429 0 20C0 30.9714 8.91429 40 20 40C30.9714 40 40 31.0857 40 20C39.8857 8.91429 30.9714 0 20 0Z"
          ></path>
          <path
            fill="#0F2954"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.4286 18.1714C24.6857 17.6 25.4857 16.8 26.0572 16.2285C27.0857 15.0857 27.4286 13.7142 27.4286 12.3428C27.4286 11.3142 27.0857 9.14281 25.2572 7.6571C24 6.62853 22.8572 6.17139 20.1143 6.17139H18.7429H18.6286H12.9143V32.9142H29.0286V27.7714C29.0286 22.9714 27.5429 19.6571 23.4286 18.1714ZM25.3714 31.5428H22.4V22.6285H19.0857V31.5428H16.4572V7.54281H19.0857C20.1143 7.54281 21.6 7.77139 22.6286 9.02853C23.2 9.71424 23.5429 10.6285 23.6572 11.4285H18.9714V12.8H23.6572C23.6572 13.6 23.4286 14.6285 22.6286 15.6571C21.9429 16.5714 20.6857 17.3714 18.9714 17.3714V18.7428C23.5429 18.7428 25.2572 21.7142 25.2572 27.3142V31.5428H25.3714Z"
          ></path>
        </svg>
      </Link>
    );
  };
  // portal for medium screens menu
  const PortalForMedScreensMenu = () => {
    return (
      <>
        {menuStatus &&
          !smallScreenStatus &&
          createPortal(
            <div className={`min-w-full min-h-screen bg-slate-100 z-40 fixed `}>
              <div className={`flex items-center justify-center  py-3`}>
                <div className={`flex items-center justify-start w-[95%]`}>
                  <Logo />
                  <div
                    className={`flex items-center justify-start mx-[0.15rem] border border-slate-500/80 p-1 rounded-sm cursor-pointer `}
                    onClick={() => {
                      dispatch(changeMenuStatus());
                      setHoveredName("");
                    }}
                  >
                    <AiOutlineClose className={`text-[25px] text-slate-700 `} />
                    <h3
                      className={`text-[15px] font-thin text-slate-700 capitalize `}
                    >
                      close
                    </h3>
                  </div>
                </div>
              </div>
              {/* tow */}
              <div className="flex items-center justify-center py-3   ">
                <div
                  className={`flex items-center justify-start space-x-3  w-full max-w-[95%]  `}
                >
                  <span
                    className={` flex items-center justify-center space-x-1 border-e border-slate-500 pe-3  min-w-fit font-thin `}
                  >
                    <p className={`text-slate-500 text-[13px] w-fit `}>
                      Campus in
                    </p>
                    <FaMapMarkerAlt className={`text-[20px] text-slate-500`} />
                    <p className={`text-slate-500 text-[13px] `}>Moscow</p>
                  </span>
                  <span
                    className={`flex items-center justify-center space-x-1 border-e border-slate-500 pe-3 `}
                  >
                    <FaEye className={`text-[21px] text-slate-500`} />
                  </span>
                  <span
                    className={`flex items-center justify-center space-x-1 border-e border-slate-500 pe-3 `}
                  >
                    <svg
                      className="control_svg text-slate-500"
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
                    className={` relative flex items-center justify-start space-x-1 w-full cursor-pointer`}
                  >
                    <p
                      onClick={() => setOpenLanguages(true)}
                      className={`text-[16px] text-slate-500 capitalize font-thin `}
                    >
                      {language}
                    </p>
                    {openLanguages ? (
                      <GoTriangleUp
                        onClick={() => setOpenLanguages(false)}
                        className={`text-[16px] text-slate-500`}
                      />
                    ) : (
                      <GoTriangleDown
                        onClick={() => setOpenLanguages(true)}
                        className={`text-[16px] text-slate-500`}
                      />
                    )}
                    {openLanguages && (
                      <div
                        className={`absolute min-w-full bg-slate-500 rounded-md py-2 px-3 flex items-center justify-between flex-col space-y-1 -bottom-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
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
              {/* three */}
              <div className={` relative flex items-center justify-center`}>
                <div
                  className={`flex items-center justify-start space-x-3  w-[95%] py-2  `}
                >
                  {tabsMap}
                </div>
                {hoveredName && (
                  <div
                    className={`absolute   w-[95%]  mx-auto  min-h-fit bg-slate-50 top-12 flex items-start justify-center py-3 shadow-lg shadow-slate-400  `}
                    onMouseLeave={() => setHoveredName("")}
                  >
                    <div
                      className={`max-w-4xl mx-auto w-full grid grid-cols-2 sm:w-[90%] md:max-w-3xl xl:max-w-4xl `}
                    >
                      <div className={``}>{subTabs}</div>
                      {subNameContaines && subNameContaines.length > 0 && (
                        <div
                          className={`w-full flex items-center justify-start  flex-col  min-h-full  `}
                        >
                          <div
                            className={`flex items-start justify-start space-y-4 flex-col pt-2 ps-4   w-full min-h-full  `}
                          >
                            {subNameContaines.map((el, idx) => (
                              <p
                                className={` text-[15px] font-light text-start  cursor-pointer w-full hover:text-blue-600 duration-150 `}
                                key={idx}
                              >
                                {el}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>,
            document.getElementById("smallMenu"),
          )}
      </>
    );
  };

  // small screens portal
  const PortalForSmallScreensMenu = () => {
    return (
      <>
        {smallScreenStatus &&
          createPortal(
            <div
              className={`min-w-full min-h-screen bg-slate-100 z-40 fixed  `}
            >
              <div className={`flex items-center justify-center  py-3`}>
                <div className={`flex items-center justify-start w-[95%]`}>
                  <Logo />
                  <div
                    className={`flex items-center justify-start mx-[0.15rem] border border-slate-500/80 p-1 rounded-sm cursor-pointer `}
                    onClick={() => {
                      setHoveredName("");
                      setSmallScreenStatus(!smallScreenStatus);
                    }}
                  >
                    <AiOutlineClose className={`text-[25px] text-slate-700 `} />
                    <h3
                      className={`text-[15px] font-thin text-slate-700 capitalize `}
                    >
                      close
                    </h3>
                  </div>
                </div>
              </div>
              {/* tow */}
              <div className="flex items-center justify-center py-3   ">
                <div
                  className={`flex items-center justify-start space-x-3  w-full max-w-[95%]  `}
                >
                  <span
                    className={` flex items-center justify-center space-x-1 border-e border-slate-500 pe-3  min-w-fit font-thin `}
                  >
                    <p className={`text-slate-500 text-[13px] w-fit `}>
                      Campus in
                    </p>
                    <FaMapMarkerAlt className={`text-[20px] text-slate-500`} />
                    <p className={`text-slate-500 text-[13px] `}>Moscow</p>
                  </span>
                  <span
                    className={`flex items-center justify-center space-x-1 border-e border-slate-500 pe-3 `}
                  >
                    <FaEye className={`text-[21px] text-slate-500`} />
                  </span>
                  <span
                    className={`flex items-center justify-center space-x-1 border-e border-slate-500 pe-3 `}
                  >
                    <svg
                      className="control_svg text-slate-500"
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
                    className={` relative flex items-center justify-start space-x-1 w-full cursor-pointer`}
                  >
                    <p
                      onClick={() => setOpenLanguages(true)}
                      className={`text-[16px] text-slate-500 capitalize font-thin `}
                    >
                      {language}
                    </p>
                    {openLanguages ? (
                      <GoTriangleUp
                        onClick={() => setOpenLanguages(false)}
                        className={`text-[16px] text-slate-500`}
                      />
                    ) : (
                      <GoTriangleDown
                        onClick={() => setOpenLanguages(true)}
                        className={`text-[16px] text-slate-500`}
                      />
                    )}
                    {openLanguages && (
                      <div
                        className={`absolute min-w-full bg-slate-500 rounded-md py-2 px-3 flex items-center justify-between flex-col space-y-1 -bottom-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
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
              {/* three */}
              <div className={` relative flex items-center justify-center`}>
                <div
                  className={`flex flex-col items-start justify-start space-y-4  w-[90%] py-2  `}
                >
                  {tabsMap}
                </div>
                {/* {hoveredName && ( */}
                {/*   <div */}
                {/*     className={`absolute   w-[95%]  mx-auto  min-h-fit bg-blue-500 top-12 flex items-start justify-center py-3 shadow-lg shadow-slate-400  `} */}
                {/*     onMouseLeave={() => setHoveredName("")} */}
                {/*   > */}
                {/*     <div */}
                {/*       className={`max-w-4xl mx-auto w-full grid grid-cols-2 sm:w-[90%] md:max-w-3xl xl:max-w-4xl `} */}
                {/*     > */}
                {/*       <div className={``}>{subTabs}</div> */}
                {/*       {subNameContaines && subNameContaines.length > 0 && ( */}
                {/*         <div */}
                {/*           className={`w-full flex items-center justify-start  flex-col  min-h-full  `} */}
                {/*         > */}
                {/*           <div */}
                {/*             className={`flex items-start justify-start space-y-4 flex-col pt-2 ps-4   w-full min-h-full  `} */}
                {/*           > */}
                {/*             {subNameContaines.map((el, idx) => ( */}
                {/*               <p */}
                {/*                 className={` text-[15px] font-light text-start  cursor-pointer w-full hover:text-blue-600 duration-150 `} */}
                {/*                 key={idx} */}
                {/*               > */}
                {/*                 {el} */}
                {/*               </p> */}
                {/*             ))} */}
                {/*           </div> */}
                {/*         </div> */}
                {/*       )} */}
                {/*     </div> */}
                {/*   </div> */}
                {/* )} */}
              </div>
            </div>,
            document.getElementById("smallMenu"),
          )}
      </>
    );
  };

  // search
  const BigScreensSearch = () => {
    return (
      <div
        className={`h-full  relative flex items-center justify-start max-sm:hidden  `}
      >
        <input
          className={` h-8 max-lg:w-full lg:w-[10px] xl:w-full   rounded-lg bg-slate-100/40 text-[15px] text-slate-100 font-thin placeholder:text-[16px] placeholder:font-thin placeholder:text-slate-100 ps-8 px-3 focus:outline-none `}
          type="search"
          placeholder={`Search`}
        />
        <BsSearch className={` absolute left-2 text-slate-100 text-[17px]`} />
      </div>
    );
  };

  const SmallScreensSearch = () => {
    return (
      <>
        <div
          className={`sm:hidden relative flex items-center justify-center  `}
        >
          <BsSearch
            className={`  text-slate-100 text-[24px] cursor-pointer `}
            onClick={() => setSmallSearchStatus(!smallSearchStatus)}
            id={`smallSearchIcon`}
          />
        </div>
        {smallSearchStatus && (
          <div
            className={` absolute -bottom-[6.2rem] right-0 flex flex-col items-center justify-between bg-slate-50 rounded-md w-[300px] min-h-[120px] `}
            ref={smallSearchRef}
          >
            <div
              className={`flex items-center justify-between w-[90%] h-12 py-3`}
            >
              <input
                className={` h-full  w-full  rounded-sm bg-slate-50 text-[14px] text-slate-400 font-thin placeholder:text-[14px] placeholder:font-thin placeholder:text-slate-400 ps-2 px-3 focus:outline-blue-400 `}
                type="search"
                placeholder={`Search`}
                autoFocus
              />
              <button
                type="button"
                className={` h-full p-1 border border-slate-300 text-slate-400 text-[14px] font-thin `}
              >
                search
              </button>
            </div>
            <h4
              className={`text-[11px] font-thin text-slate-400 p-4 self-start `}
            >
              advanced search
            </h4>
          </div>
        )}
      </>
    );
  };
  return (
    <div className={`relative`}>
      <div
        className={` container flex items-center justify-between mx-auto  sm:w-[90%] md:max-w-3xl xl:max-w-4xl  `}
      >
        <div className={` md flex items-center justify-center sm:space-x-3  `}>
          <Logo />
          <div
            className={` hidden max-lg:flex items-center justify-center space-x-1 py-1 px-2 border border-slate-300 rounded-sm `}
            onClick={(e) => {
              const screenSize = window.innerWidth;

              if (screenSize <= 768) {
                setSmallScreenStatus(!smallScreenStatus);
              } else {
                dispatch(changeMenuStatus());
              }
            }}
          >
            <GiHamburgerMenu
              className={`text-[26px] text-slate-100 font-bold cursor-pointer  `}
            />
            <p className={`text-[15px] font-thin text-slate-50 capitalize `}>
              menu
            </p>
          </div>
          <GiHamburgerMenu
            className={`text-[26px] max-lg:hidden text-slate-100 font-bold cursor-pointer `}
            onClick={() => {
              dispatch(changeBigMenuStatus());
            }}
          />
        </div>
        <div
          className={`flex items-center justify-center space-x-3 max-lg:hidden `}
        >
          {tabsMap}
        </div>

        <BigScreensSearch />
        <SmallScreensSearch />
      </div>
      {hoveredName && !menuStatus && (
        <div
          className={`absolute   w-full  mx-auto  min-h-fit bg-slate-50 top-12 flex items-start justify-center py-3 max-lg:hidden `}
          onMouseLeave={() => setHoveredName("")}
        >
          <div
            className={`max-w-4xl mx-auto w-full grid grid-cols-3 sm:w-[90%] md:max-w-3xl xl:max-w-4xl `}
          >
            <div className={``}>{subTabs}</div>
            {subNameContaines && subNameContaines.length > 0 && (
              <div
                className={`w-full flex items-center justify-start  flex-col border-x border-slate-300 min-h-full  `}
              >
                <div
                  className={`flex items-start justify-start space-y-4 flex-col pt-2 ps-4   w-full min-h-full  `}
                >
                  {subNameContaines.map((el, idx) => (
                    <p
                      className={` text-[15px] font-light text-start  cursor-pointer w-full hover:text-blue-600 duration-150 `}
                      key={idx}
                    >
                      {el}
                    </p>
                  ))}
                </div>
              </div>
            )}
            <div
              className={`w-full flex items-start justify-center space-y-2 pt-2`}
            >
              {subNameContaines && subNameContaines.length > 0 && (
                <div
                  className={`flex items-start justify-start flex-col space-y-2`}
                >
                  <button
                    type={`button`}
                    className={`w-56 h-9 bg-red-600  flex items-center justify-center  `}
                  >
                    <p className={`capitalize text-slate-50 text-[14px] p-2`}>
                      test button
                    </p>
                  </button>
                  <p className={` text-slate-500 text-[14px] p-2 font-light `}>
                    text for test
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* portal menu */}
      <PortalForMedScreensMenu />
      <PortalForSmallScreensMenu />
    </div>
  );
};

export default SubHeader;
