import React from "react";
import { useParams } from "react-router-dom";

const DetailsPage = ({ data }) => {
	const { name } = useParams();

	// Find the item by its name
	const item = data?.find(item => item.name === decodeURIComponent(name));

	if (!item) {
		return <div>Item not found!</div>;
	}

	return (
		<div className="max-w-screen-xl mx-auto p-6">
			<h2 className="text-3xl font-semibold text-gray-800 mb-6">{item.name}</h2>
			<div className="flex flex-col md:flex-row items-center gap-6">
				<img
					src={item.tvgLogo}
					alt={item.name}
					className="w-full md:w-1/3 h-auto rounded"
				/>
				<div>
					<p className="text-gray-600 mb-4">
						{item.description || "No description available."}
					</p>
					<a
						href={item.streamUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
						Watch Now
					</a>
				</div>
			</div>
		</div>
	);
};

export default DetailsPage;
