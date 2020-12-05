(function() {
	var el = document.getElementById("test");

	var imgs = [];
	var arr = ["1.png","2.png", "3.png", "4.png", "5.png"];
	
		for (var i = 0; i < arr.length; i++) {

			imgs[i] = document.createElement("img");
			imgs[i].src = arr[i];			
			document.body.appendChild(imgs[i]);
		}

	  for (var i = 0; i < imgs.length; i++) {
	 	 imgs[i].addEventListener("click" , function() {
		  		this.style.width ="50%";
		  		this.style.height ="50%";
	  	})
	 	 imgs[i].addEventListener("mouseout" , function() {
				this.style.width = "10%";
				console.log(el);
		  		this.style.height= "10%";
	  	})
	 }

}());



