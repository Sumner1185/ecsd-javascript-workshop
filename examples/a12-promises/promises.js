const downloadData = (url) => new Promise((res, rej) => {
	if (!url) {
		rej("Missing Url!")
	} else {
		res("Data");
	}
});

downloadData("download-url")
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
