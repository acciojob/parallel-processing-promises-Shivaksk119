//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

const loadImage = (url)=>{
	return new Promise(resolve, reject){
		let img = new Image();
		img.src = url;
		if(img.onload()){
			resolve(img);
		}
		else {
			reject(url);
		}
	}
}

const displayImages=(images)=>{
	let imagePromises = images.map(loadImage);

	Promise.All(imagePromises)
		.then((loadedImages)=>{
			loadedImages.forEach((loadedImg)=>{
				document.getElementById("output").appendChild(loadImage)
			})
		})
		.catch(error){
			console.error(`Failed to load image's URL: ${error}`)
		}
}

btn.addEventListener('click', displayImages);