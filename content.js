
//you don't need to wait for the window to load.
//chrome extension content files wait for this by default

console.log("extension is working.");
console.log(window.location.href);
//Replace whole body with video
// document.getElementsByTagName("body")[0].innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/xfr64zoBTAQ" frameborder="0" allowfullscreen></iframe>`;

//Nic Cage Gifs
// $("img").attr("src","http://akns-images.eonline.com/eol_images/Entire_Site/201506/rs_500x213-150106140225-tumblr_lx7an6a7pT1r4etbjo1_r1_500.gif");

//being sneaky with the video...
// $("body").append(`<iframe src="https://www.youtube.com/embed/xfr64zoBTAQ?autoplay=1" frameborder="0" allowfullscreen></iframe>`);
// document.getElementsByTagName("img")[2].innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/xfr64zoBTAQ" frameborder="0" allowfullscreen></iframe>`;

document.getElementsByTagName("title")[0].innerHTML = `BOOYAH!`;

var paragraph = document.getElementsByTagName("p")[0].innerHTML;
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString(paragraph);
document.getElementsByTagName("p")[0].innerHTML = reverseString(paragraph);

var replace = document.getElementsByTagName("h2")[0].innerHTML;
function replaceString(string) {
  return string.replace(/a/g,' ');
}
console.log(replace);
replaceString(replace);
document.getElementsByTagName("h2")[0].innerHTML = replaceString(replace);


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	if (request) {
		console.log("Getting message from the icon click!");
		console.log(request);
		localStorage.setItem("stefExtension", "extension made data");
		console.log(localStorage.getItem("stefExtension"));
		sendResponse({
		    response: "Message received"
		});
  	}
  }
);
