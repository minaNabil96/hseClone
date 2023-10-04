import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
	GoTriangleDown,
	GoTriangleUp,
	GoTriangleLeft,
	GoTriangleRight,
} from "react-icons/go";

const Card1 = () => {
	return (
		<div
			className={` xl:row-span-2   flex items-center justify-center  max-xl:h-[calc(16.5rem-15px)] w-full h-full relative cursor-pointer `}
		>
			<img
				src={`https://www.hse.ru/pubs/share/direct/747801372.jpg`}
				alt="graduates"
				className={`w-full h-full object-cover rounded-md `}
			/>
			<div
				className={`w-[50%] h-[calc(16.5rem-15px)] max-h-full bg-[#0050CF] rounded-md flex items-center justify-center  absolute bottom-0 right-0`}
			>
				<div
					className={`  flex flex-col items-start justify-start space-y-6  w-[85%] h-[85%] relative  `}
				>
					<h2 className={`text-[22px] capitalize text-slate-50 `}>
						Alumni
					</h2>
					<h2
						className={`text-[16px] font-thin capitalize text-slate-50 `}
					>
						Careers, loyalty programmes, and mentorship
					</h2>
					<div
						className={`  p-[0.20rem] bg-white rounded-full w-fit h-fit focus:outline-none active:outline-none  flex items-center justify-center `}
					>
						<IoIosArrowForward
							className={`text-[9px]  text-[#0050CF]  `}
						/>
					</div>
					<div
						className={`w-fit h-fit flex items-center justify-center absolute max-md:-left-[2.50rem] xl:-left-10 -top-6 md:-left-[2.20rem] `}
					>
						<GoTriangleLeft
							className={`text-[51px] text-[#0050CF]  `}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const Card2 = ({ full }) => {
	return (
		<div
			className={`  flex items-center justify-center overflow-hidden w-full h-full relative cursor-pointer rounded-md  `}
			// style={{
			// 	backgroundImage: `url("https://www.hse.ru/pubs/share/direct/747802968.jpg")`,
			// 	backgroundSize: "cover",
			// 	backgroundPosition: "-80%",
			// 	backgroundRepeat: "no-repeat",
			// }}
		>
			<img
				src={`https://www.hse.ru/pubs/share/direct/747802968.jpg`}
				alt="graduates"
				className={`w-full h-full absolute -left-20  object-cover rounded-md  `}
			/>

			<div
				className={` ${
					full ? "w-full" : "w-[50%]"
				}  h-full bg-[#0050CF] rounded-md flex items-center justify-center  absolute bottom-0 right-0`}
			>
				<div
					className={`  flex flex-col items-start justify-start space-y-6  w-[85%] h-[85%] relative  `}
				>
					<h2
						className={`text-[22px] capitalize text-slate-50 max-w-[300px] `}
					>
						{full
							? `Careers at HSE Universty`
							: `International Prep Year`}
					</h2>
					<h2
						className={`text-[16px] font-thin capitalize text-slate-50 max-w-[300px] `}
					>
						{full
							? `International faculty recruitment`
							: `Study Russian and complete a general preparatory course`}
					</h2>
					<div
						className={`  p-[0.20rem] bg-white rounded-full w-fit h-fit focus:outline-none active:outline-none  flex items-center justify-center `}
					>
						<IoIosArrowForward
							className={`text-[9px]  text-[#0050CF]  `}
						/>
					</div>
					<div
						className={`w-fit h-fit flex items-center justify-center absolute max-md:-left-[2.50rem] xl:-left-10 -top-6 md:-left-[2.20rem] `}
					>
						<GoTriangleLeft
							className={`text-[51px] text-[#0050CF]  `}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
const Card3 = ({ image, heading, text }) => {
	return (
		<div
			className={`  flex items-center justify-center overflow-hidden w-full h-[calc(16.5rem-15px)] relative cursor-pointer rounded-md  `}
			// style={{
			// 	backgroundImage: `url("https://www.hse.ru/pubs/share/direct/834476318.jpg")`,
			// 	backgroundSize: "cover",
			// 	backgroundPosition: "-50%",
			// 	backgroundRepeat: "no-repeat",
			// }}
		>
			<img
				src={`https://www.hse.ru${image}`}
				alt="graduates"
				className={`w-full h-full absolute -right-24  object-cover rounded-md `}
			/>

			<div
				className={`w-[50%] h-full bg-slate-100 rounded-l-md flex items-center justify-center absolute bottom-0 left-0`}
			>
				<div
					className={`  flex flex-col items-start justify-start space-y-6  w-[85%] h-[85%] relative  `}
				>
					<h2 className={`text-[22px] capitalize text-slate-800 `}>
						{heading}
					</h2>
					<h2
						className={`text-[16px] font-thin capitalize text-slate-800 `}
					>
						{text}
					</h2>
					<div
						className={`  p-[0.20rem] bg-slate-100 shadow-sm shadow-slate-300 rounded-full w-fit h-fit focus:outline-none active:outline-none  flex items-center justify-center `}
					>
						<IoIosArrowForward
							className={`text-[9px]  text-[#0050CF]  `}
						/>
					</div>
					<div
						className={`w-fit h-fit flex items-center justify-center absolute max-md:-right-[2.50rem] xl:-right-10 -top-6 md:-right-[2.20rem]  `}
					>
						<GoTriangleRight
							className={`text-[51px] text-slate-100  `}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const Hse360 = () => {
	return (
		<div>
			<div
				className={`mx-auto max-sm:w-[90%] sm:w-[90%] md:max-w-3xl xl:max-w-4xl  `}
			>
				<h1
					className={`font-bold text-[41px] text-stone-900 py-10 capitalize `}
				>
					HSE University 360°
				</h1>
				<div
					className={`grid grid-cols-1 grid-rows-3 md:grid-cols-2 gap-6  `}
				>
					<Card1 />
					<Card2 full={false} />
					<Card3
						image={`/pubs/share/direct/834476318.jpg`}
						heading={`Young Scientists`}
						text={`Early-career researchers talk about their work at HSE
						University`}
					/>
					<Card3
						image={`/pubs/share/direct/747801218.jpeg`}
						heading={`University Buildings`}
						text={`Campuses, dorms, accommodation options`}
					/>
					<Card2 full={true} />
				</div>
			</div>
		</div>
	);
};

export default Hse360;
