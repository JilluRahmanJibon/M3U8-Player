import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import Slider from "react-slick";

const M3U8Player = ({ parsedData }) => {
	const navigate = useNavigate();
	const bdSongData = parsedData["BANGLADESHI SONGS"];
	const cdnData = parsedData["🅒🅓🅝"];
	const bengData = parsedData["BENGALI"];
	const docuData = parsedData["Documentary"];
	const liveData = parsedData["Today's Live Match"];
	const bdSeriesData = parsedData["BANGLADESHI MOVIE & SERIES"];
	const indianData = parsedData["INDIAN"];
	const punjabiData = parsedData["PUNJABI"];
	const pakistaniData = parsedData["PAKISTANI"];
	const kidsData = parsedData["KIDS"];
	const sportsData = parsedData["SPORTS"];
	const supersportData = parsedData["SUPERSPORT"];
	const tamilData = parsedData["TAMIL"];
	const teluguData = parsedData["TELUGU"];
	const malayamData = parsedData["MALAYALAM"];
	const islamicData = parsedData["ISLAMIC CHANNELS"];
	const usNewsData = parsedData["USA ➾ News"];
	const bdMovieData = parsedData["BANGALI MOVIES"];
	const indianMusicData = parsedData["INDIAN | MUSIC"];
	const indianCartoonData = parsedData["INDIAN | KIDS Cartoon"];
	const bollySongData = parsedData["BOLLYWOOD (2023-2024)"];

	const handleMoreClick = category => {
		navigate(`/category/${category}`);
	};

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3, // Show 3 items at once
		slidesToScroll: 1,
		arrows: false,
	};
	return (
		<main className=" p-6 space-y-7">
			{/* BANGLADESHI SONGS */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">
						BANGLADESHI SONGS
					</h2>
					<button
						onClick={() => handleMoreClick("BANGLADESHI SONGS")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{bdSongData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* 🅒🅓🅝 */}
			<div className="max-w-xl">
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">🅒🅓🅝</h2>
					<button
						onClick={() => handleMoreClick("🅒🅓🅝")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className=" ">
					{cdnData?.length > 0 && (
						<Slider className="" {...settings}>
							{cdnData.map(item => (
								<div className="px-2" key={item?.name}>
									<CategoryCard item={item} />
								</div>
							))}
						</Slider>
					)}
				</div>
			</div>

			{/* BENGALI */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">BENGALI</h2>
					<button
						onClick={() => handleMoreClick("BENGALI")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{bengData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* Documentary */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">Documentary</h2>
					<button
						onClick={() => handleMoreClick("Documentary")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{docuData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* Today's Live Match */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">
						Today's Live Match
					</h2>
					<button
						onClick={() => handleMoreClick("Today's Live Match")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{liveData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* BANGLADESHI MOVIE & SERIES  */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">
						BANGLADESHI MOVIE & SERIES
					</h2>
					<button
						onClick={() => handleMoreClick("BANGLADESHI MOVIE & SERIES")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{bdSeriesData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* INDIAN */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">INDIAN</h2>
					<button
						onClick={() => handleMoreClick("INDIAN")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{indianData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* PUNJABI */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">PUNJABI</h2>
					<button
						onClick={() => handleMoreClick("PUNJABI")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{punjabiData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* PAKISTANI */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">PAKISTANI</h2>
					<button
						onClick={() => handleMoreClick("PAKISTANI")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{pakistaniData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* KIDS */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">KIDS</h2>
					<button
						onClick={() => handleMoreClick("KIDS")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{kidsData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* SPORTS */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">SPORTS</h2>
					<button
						onClick={() => handleMoreClick("SPORTS")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{sportsData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* SUPERSPORT */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">SUPERSPORT</h2>
					<button
						onClick={() => handleMoreClick("SUPERSPORT")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{supersportData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* TAMIL */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">TAMIL</h2>
					<button
						onClick={() => handleMoreClick("TAMIL")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{tamilData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* TELUGU */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">TELUGU</h2>
					<button
						onClick={() => handleMoreClick("TELUGU")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{teluguData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* MALAYALAM */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">MALAYALAM</h2>
					<button
						onClick={() => handleMoreClick("MALAYALAM")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{malayamData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* ISLAMIC CHANNELS */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">
						ISLAMIC CHANNELS
					</h2>
					<button
						onClick={() => handleMoreClick("ISLAMIC CHANNELS")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{islamicData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* USA ➾ News */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">USA ➾ News</h2>
					<button
						onClick={() => handleMoreClick("USA ➾ News")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{usNewsData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* BANGALI MOVIES */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">BANGALI MOVIES</h2>
					<button
						onClick={() => handleMoreClick("BANGALI MOVIES")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{bdMovieData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* INDIAN | MUSIC */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">INDIAN | MUSIC</h2>
					<button
						onClick={() => handleMoreClick("INDIAN | MUSIC")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{indianMusicData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* INDIAN | KIDS Cartoon */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">
						INDIAN | KIDS Cartoon
					</h2>
					<button
						onClick={() => handleMoreClick("INDIAN | KIDS Cartoon")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{indianCartoonData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>

			{/* BOLLYWOOD (2023-2024) */}
			<div>
				<div className="flex justify-between mb-3">
					<h2 className="sm:text-3xl text-lg font-semibold">
						BOLLYWOOD (2023-2024)
					</h2>
					<button
						onClick={() => handleMoreClick("BOLLYWOOD (2023-2024)")}
						className=" text-sm text-blue-600 hover:underline focus:outline-none">
						Show More
					</button>
				</div>
				<div className="grid grid-cols-3 sm:gap-6 gap-y-4 gap-x-2">
					{bollySongData?.slice(0, 3).map(item => (
						<CategoryCard key={item?.name} item={item} />
					))}
				</div>
			</div>
		</main>
	);
};

export default M3U8Player;
