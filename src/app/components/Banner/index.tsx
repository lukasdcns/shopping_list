const Banner = ({ title }: { title: string }) => {
	return (
		<h1 className="bg-indigo-900 text-white text-lg ps-8 py-4 font-sans capitalize font-bold tracking-wide">
			{title}
		</h1>
	);
};

export default Banner;
