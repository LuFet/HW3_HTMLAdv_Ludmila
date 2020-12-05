(window.addEventListener("load", function(){

	var str = "";
	var imgs = document.images;

	for (var i = 0; i < imgs.length; i++) {
		str += imgs[i].src +"<br>";
	}

	document.getElementById("text").innerHTML = str;

	var k = 0;
	var id = setInterval(function() {
		var j = k % imgs.length;
			imgs[j].style.border = "3px solid red"
			k++;
		if (k == imgs.length) {
			clearInterval(id);
		}

	}, 1000);


}));

