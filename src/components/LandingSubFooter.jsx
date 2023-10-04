import React, { useEffect, useState } from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
//
const tabs = [
	{
		name: "International Admissions",
		subNames: ["inter@hse.ru", "admissions.hse.ru/en", "+7 495 531-00-59"],
	},
	{
		name: "International Students Support",
		subNames: [
			"istudents.support@hse.ru",
			"istudents.hse.ru/en",
			"+7 495 772-95-90, ext. 27661",
			"Emergency hotline: +7 (985) 040-13-55",
		],
	},
	{
		name: "International Faculty Recruitment",
		subNames: ["iri@hse.ru", "iri.hse.ru", "+7 495 772-95-90, ext. 27676"],
	},
	{
		name: "Map of HSE Buildings",
		subNames: [
			"International Faculty Support",
			"ifaculty.support@hse.ru",
			"ifaculty.hse.ru",
		],
	},
	{
		name: "PR Office",
		subNames: ["press@hse.ru", "pr.hse.ru/en/", "+7 495 772 9567"],
	},
];
//
const LandingSubFooter = () => {
	const tabsMap =
		tabs &&
		tabs.map(({ name, subNames }, idx) => (
			<ul key={idx} className={`text-start space-y-2   my-6 `}>
				<h2
					className={`text-slate-900 text-[15px] capitalize cursor-pointer `}
				>
					{name}
				</h2>
				<li className={``}>
					{subNames.map((name, idx) => {
						if (
							(name && name.includes("/")) ||
							name.includes("@") ||
							name.includes("ru")
						) {
							return (
								<p
									key={idx}
									className={`text-blue-600  text-[15px] py-[0.30rem] capitalize font-thin cursor-pointer w-fit max-w-[280px] `}
								>
									{name}
								</p>
							);
						} else
							return (
								<p
									key={idx}
									className={`text-slate-600  text-[15px] py-[0.30rem] capitalize font-thin  w-fit max-w-[280px] `}
								>
									{name}
								</p>
							);
					})}
				</li>
			</ul>
		));

	return (
		<div className={`bg-slate-100 py-5   `}>
			<div
				className={` mx-auto max-sm:w-[90%] sm:w-[90%] md:max-w-3xl xl:max-w-4xl   `}
			>
				<h1
					className={`font-bold text-[41px] text-stone-900 py-10 capitalize   `}
				>
					contacts
				</h1>
				<div
					className={`grid max-sm:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  `}
				>
					{tabsMap}
				</div>
			</div>
		</div>
	);
};

export default LandingSubFooter;
