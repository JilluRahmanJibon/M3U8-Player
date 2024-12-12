export const parseM3U8Data = data => {
	const lines = data.split("\n");
	let parsedData = {};

	lines.forEach(line => {
		if (line.startsWith("#EXTINF:")) {
			const infoParts = line.split(",");
			const groupTitle = infoParts[0].match(/group-title="([^"]+)"/);
			const tvgLogo = infoParts[0].match(/tvg-logo="([^"]+)"/);
			const name = infoParts[1].trim();
			const url = lines[lines.indexOf(line) + 1].trim();

			if (groupTitle && tvgLogo && url) {
				const category = groupTitle[1];
				if (!parsedData[category]) {
					parsedData[category] = [];
				}

				parsedData[category].push({
					name,
					logo: tvgLogo[1],
					url,
				});
			}
		}
	});

	return parsedData;
};
