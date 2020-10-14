// Define Function
const downloadMovie = url => {
  throw new Error("Failed!");
}

// Wrap potentially nasty code...
try {
	downloadMovie("https://film-locker.com/a7220f");
} catch (error) {
	console.log(error);
} finally {
	console.log("Download attempt completed.");
}

// Should get an error output when executed!
// But, make sure to check for the finally output!
