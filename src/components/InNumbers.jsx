import React, { useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { register } from "swiper/element/bundle";
import img1 from "../assets/Analysis icon HSE.svg";
import img2 from "../assets/certificate icon HSE.svg";
import img3 from "../assets/Employment icon HSE.svg";
import img4 from "../assets/Graduates icon HSE.svg";
import img5 from "../assets/Teachers icon HSE.svg";
//
const data = [
	{ name: "students and doctoral students", num: ">52,000", img: img4 },
	{ name: "international partners", num: ">400", img: img2 },
	{ name: "instructors and researchers", num: "~7000", img: img5 },
	{ name: "centres of excellence", num: "52", img: img1 },
	{
		name: "of alumni find employment within six months of graduation",
		num: "95%",
		img: img3,
	},
];
const InNumbers = () => {
	const swiperRef2 = useRef(null);
	const navigationPrevRef2 = useRef(null);
	const navigationNextRef2 = useRef(null);
	// const pagRef = useRef(null);
	const dataMap =
		data &&
		data.map(({ name, num, img }, idx) => (
			<swiper-slide key={num}>
				<div
					className={`flex flex-col items-start justify-center space-y-3 `}
				>
					<img
						src={img}
						alt={name}
						className={`text-[#002d6e] w-24 h-24 `}
					/>
					<h3 className={`text-[50px] text-slate-900 w-full `}>
						{num}
					</h3>
					<h4
						className={`text-[15px] text-slate-500 text-start font-light `}
					>
						{name}
					</h4>
				</div>
			</swiper-slide>
		));

	useEffect(() => {
		register();

		const params2 = {
			direction: "horizontal",
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 10,
			rewind: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: false,
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
				},

				1024: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
			on: {
				beforeInit: (swiper) => {
					swiper.params.navigation.prevEl =
						navigationPrevRef2.current;
					swiper.params.navigation.nextEl =
						navigationNextRef2.current;
					// swiper.params.pagination.el = pagRef.current;
					// swiper.hostEl.style.position = "relative";
					// swiper.hostEl.style.maxWidth = "100vw";
				},

				afterInit: (swiper) => {
					swiper.hostEl.classList.add(
						"mx-auto",
						"sm:w-[90%]",
						"md:max-w-3xl",
						"xl:max-w-4xl",
						"px-8",
					);
				},
				// slideChange: (swiper) => {
				// 	const end = swiper.isEnd;
				// 	const beg = swiper.isBeginning;
				// 	// if (end) {
				// 	// 	swiper.slideTo(0, 500, true);
				// 	// } else if (beg) {
				// 	// 	swiper.slideTo(5, 500, true);
				// 	// }
				// 	console.log(swiper);
				// },
			},
		};

		// Assign it to swiper element
		Object.assign(swiperRef2.current, params2);

		// initialize swiper
		swiperRef2.current.initialize();
	}, []);

	return (
		<div className={`relative py-12 bg-slate-50/50 `}>
			<div
				className={`mx-auto max-sm:w-[90%]  sm:w-[90%] md:max-w-3xl xl:max-w-4xl`}
			>
				<h1
					className={`font-bold text-[41px]   text-stone-900 py-10 capitalize    `}
				>
					HSE University in Numbers
				</h1>

				<swiper-container init="false" ref={swiperRef2}>
					{dataMap}
				</swiper-container>
				<div
					className={` max-md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 mx-auto max-sm:w-[90%] sm:w-[90%] md:max-w-3xl xl:max-w-4xl  flex items-start justify-between `}
				>
					<div
						ref={navigationPrevRef2}
						className={` absolute left-0 p-[0.20rem] bg-white rounded-full shadow-sm shadow-slate-200 w-fit h-fit focus:outline-none active:outline-none  flex items-center justify-center   `}
					>
						<IoIosArrowBack
							className={`text-[33px]  text-blue-700  `}
						/>
					</div>
					<div
						ref={navigationNextRef2}
						className={` absolute right-0 p-[0.20rem] bg-white rounded-full shadow-sm shadow-slate-200 w-fit h-fit focus:outline-none active:outline-none  flex items-center justify-center `}
					>
						<IoIosArrowForward
							className={`text-[33px]  text-blue-700  `}
						/>
					</div>
				</div>
			</div>

			{/* <div className={`swiper-pagination`}></div> */}
		</div>
	);
};

export default InNumbers;
