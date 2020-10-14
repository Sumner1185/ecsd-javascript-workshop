function download(url, callback) {
	// ...download data from url
	callback("data");
}

// ES5
download("download-url", function(result) {
	console.log(result);
});

// ES6
download("download-url", (result) => console.log(result));
