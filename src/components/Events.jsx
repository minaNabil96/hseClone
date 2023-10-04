import React from "react";
import { PiBag } from "react-icons/pi";
import { HiMiniClock } from "react-icons/hi2";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
import eventsdatabase from "../assets/eventsdatabase.json";
const Events = () => {
	const eventsMap =
		eventsdatabase &&
		eventsdatabase.length > 1 &&
		eventsdatabase.map(({ id, title, month, from, to, type, starts }) => (
			<div
				key={id}
				className={` relative bg-slate-50 rounded-md w-full h-48 shadow-sm shadow-slate-100 border border-slate-300 flex flex-col items-start justify-between p-4 `}
			>
				{month && from && (
					<div
						className={`flex items-center justify-start space-x-2 `}
					>
						<div
							className={`bg-white min-w-fit min-h-fit w-6 h-6 text-[16px] font-bold p-[0.10rem] text-slate-900 border-t-4 border-orange-500 flex items-center justify-center rounded-md shadow-md shadow-slate-200 `}
						>
							{from}
						</div>
						{to && (
							<>
								<span
									className={`bg-slate-500 h-[2px] w-4`}
								></span>
								<div
									className={`bg-white min-w-fit min-h-fit w-6 h-6 text-[16px] font-bold p-[0.10rem] text-slate-900 border-t-4 border-orange-500 flex items-center justify-center rounded-md shadow-md shadow-slate-200 `}
								>
									{to}
								</div>
							</>
						)}
						<p className={`font-bold capitalize text-[15px]  `}>
							{month}
						</p>
					</div>
				)}
				<Link to={`#`}>
					<h2
						className={` hover:text-red-500 duration-150 text-[18px] font-bold text-slate-950 line-clamp-3 capitalize `}
					>
						{title}
					</h2>
				</Link>

				<div className={` flex items-start justify-start space-x-2 `}>
					<div
						className={` flex items-center justify-center space-x-1 px-3 py-1 bg-blue-100/50 text-blue-600 rounded-md shadow-sm shadow-slate-300 `}
					>
						<HiMiniClock className={`text-[16px]`} />
						<h2 className={`text-[14px]  `}>Starts at</h2>
						<span className={`text-[14px]`}>{starts}</span>
					</div>
					<div
						className={` flex items-center justify-center space-x-1 px-3 py-1 bg-blue-100/50 text-blue-600 rounded-md shadow-sm shadow-slate-300 `}
					>
						<FaVideo className={`text-[16px]`} />
						<span className={`text-[14px] capitalize `}>
							{type}
						</span>
					</div>
				</div>
			</div>
		));
	return (
		<div className={`min-h-[500px] bg-white`}>
			<div
				className={`mx-auto max-sm:w-[90%] sm:w-[90%] md:max-w-3xl xl:max-w-4xl  `}
			>
				<div className={`py-12`}>
					<h1
						className={`font-bold text-[41px] text-stone-900 pb-6 capitalize `}
					>
						events
					</h1>
					<div
						className={`grid max-sm:grid-cols-1 xl:grid-cols-3 max-xl:grid-cols-2   gap-5 `}
					>
						{eventsMap}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
