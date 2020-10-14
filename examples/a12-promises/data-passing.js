const downloadData = (url) => Promise.resolve(url);

downloadData("download-url")
	.then(function(data) {
		console.log("1st then: " + data);
		return "formatted-data";
	})
	.then(function(data) {
		console.log("2nd then: " + data);
	})
	.then(function(data) {
		console.log("3rd then: " + data);
	});
