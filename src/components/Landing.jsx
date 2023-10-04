import React, { useState, useMemo } from "react";
import { detectCoverStatus } from "../store/reducers/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import SwiperComponent from "../reusable/SwiperComponent";
const Landing = () => {
	return (
		<div className={` relative overflow-hidden `}>
			<div className={`min-h-[700px]  `}>
				<SwiperComponent />
			</div>
		</div>
	);
};

export default Landing;
