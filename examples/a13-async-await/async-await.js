const download = () => Promise.resolve("data");

const es6Function = async () => {
	const result = await download();
	console.log(result);
}

async function es5Function() {
	const result = await download();
	console.log(result);
}

es6Function();
es5Function();
