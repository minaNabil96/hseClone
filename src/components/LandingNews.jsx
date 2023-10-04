import React, { useState } from "react";
import database from "../assets/database.json";
import { Link } from "react-router-dom";
const LandingNews = () => {
	const [loaded, setLoaded] = useState({
		lands: false,
		apartments: false,
	});

	const imagesHandler = (imgname) => {
		setLoaded((prev) => ({ ...prev, [imgname]: true }));
	};
	const newsMap =
		database &&
		database.length > 1 &&
		database.map(({ section, id, body, title, image }, idx) => (
			<div
				key={id}
				className={` flex items-start justify-start flex-col space-y-5   `}
			>
				<div
					className={`relative ${
						image === "yellow"
							? "bg-yellow-400"
							: image === "green"
							? "bg-green-400"
							: image === "red"
							? "bg-red-400"
							: image === "blue"
							? "bg-blue-400"
							: image === "purple"
							? "bg-purple-400"
							: "bg-slate-50"
					} min-w-full min-h-[12rem] max-xl:min-h-[16rem] rounded-sm `}
				>
					{image && image.includes("www") && (
						<img
							src={image}
							alt={title}
							className={`w-full h-full object-cover absolute   `}
						/>
					)}
					<div
						className={`absolute bottom-3 left-3 bg-blue-100 text-blue-700 rounded-sm `}
					>
						<Link to={`#`}>
							<h3
								className={`hover:text-red-500 duration-150 px-3 py-1 capitalize text-[12px] font-bold `}
							>
								{section}
							</h3>
						</Link>
					</div>
				</div>
				<Link to={`#`}>
					<h2
						className={`hover:text-red-500 duration-150 text-slate-900 text-[17.5px] font-[600] line-clamp-3 text-start capitalize w-full `}
					>
						{title}
					</h2>
				</Link>

				<p
					className={`text-slate-500 leading-4 font-light text-[16px]  line-clamp-5 text-start capitalize w-full `}
				>
					{body}
				</p>
			</div>
		));
	return (
		<div className={`bg-white`}>
			<div
				className={`mx-auto max-sm:w-[90%] sm:w-[90%] md:max-w-3xl xl:max-w-4xl `}
			>
				<h1 className={`font-bold text-[41px] text-stone-900 py-10 `}>
					News
				</h1>
				<div
					className={`grid xl:grid-cols-3 max-md:grid-cols-1 md:grid-cols-2  gap-5 `}
				>
					{newsMap}
				</div>
			</div>
		</div>
	);
};

export default LandingNews;
