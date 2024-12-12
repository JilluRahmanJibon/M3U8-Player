const CategoryCard = ({ item }) => {
	return (
		<div>
			<div>
				<div className=" ">
					<img
						src={item?.logo}
						alt={item.name}
						className=" object-cover h-[80px] w-full sm:h-48 rounded-lg"
					/>
					<h3 className="text-lg font-medium text-center truncate">
						{item.name}
					</h3>
				 
				</div>
			</div>
		</div>
	);
};

export default CategoryCard;
