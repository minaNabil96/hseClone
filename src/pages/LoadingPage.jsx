import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const LoadingPage = () => {
	return (
		<div
			className={`min-h-screen flex items-center justify-center bg-stone-100 `}
		>
			<h3 className={`text-blue-400 text-[30px] mx-2 text-center `}>
				Loading
			</h3>
			<AiOutlineLoading3Quarters
				className={`   animate-loading ease-linear  text-blue-400 text-[40px] mx-2 `}
			/>
		</div>
	);
};

export default LoadingPage;
