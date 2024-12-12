import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = ({ parsedData }) => {
	const { categoryName } = useParams();
	const categoryData = parsedData[categoryName] || [];

	return (
		<div className="  sm:p-6 p-1">
			<h2 className="sm:text-3xl text-xl font-semibold  mb-6">
				{categoryName}
			</h2>
			<div className="grid grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-y-4 gap-x-2">
				{categoryData.map((item, index) => (
					<div key={index} className=" ">
						<img
							src={item.logo}
							alt={item.name}
							className=" object-cover h-[80px] w-full sm:h-48 rounded-lg"
						/>
						<h3 className="text-lg font-medium text-center truncate">
							{item.name}
						</h3>
						 
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoryPage;
