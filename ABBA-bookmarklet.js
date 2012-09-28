	(function(){
		var abbaData = [];
		var abbaBox = document.createElement("div");
		var originalBox = "<style>#ycbox a{font-size: 10pt;}</style><strong style='display:block;'>ABBAify Your Data</strong><a id=abbaDispatch>Dispatch</a> <a id=abbaClear>Clear</a> <a id=abbaClose>Close</a><br>Click your <span id=abbaNext>numerator</span></br>"
		abbaBox.id = "ycbox";
		abbaBox.setAttribute("style",  "position: fixed;width: 200px;background-color: #F26868;right: 0;top: 0;z-index: 100000; padding: 5px");
		abbaBox.innerHTML = originalBox;
		document.body.appendChild(abbaBox);
		document.addEventListener("click", dataClick, true);
		
		function abba_url(data_array){
			var url = "http://www.thumbtack.com/labs/abba/#";
			var variationNum = 0;
			for(var i = 0; i<data_array.length; i++){
				url += "Variation+" + (++variationNum)  + "=" + data_array[i] + "%2C" + data_array[++i] + "&";
			}
			return url + "abba%3AintervalConfidenceLevel=0.95&abba%3AuseMultipleTestCorrection=false";
		}
		
		function updateAbba(num){
			abbaData.push(num);
			abbaBox.innerHTML +=  abbaData.length % 2 ? "<br>Variation " +((1+abbaData.length)/2) + ": " +  num  + "/" : num ;
			var next = document.getElementById("abbaNext");
			next.innerHTML = next.innerHTML === "numerator" ? "denominator" : "numerator";
		}
		
		function dispatch(){
			window.open(abba_url(abbaData));
			this.removeEventListener('click', dataClick, true);
  			abbaData = [];
			abbaBox.innerHTML = originalBox;
		}
		
		function dataClick(e){
			var num = e.target.textContent.replace(/\D/g,'');

			if(e.target.id==="abbaDispatch"){
				dispatch();
			}
			else if(e.target.id==="abbaClear"){
				abbaBox.innerHTML = originalBox;
				abbaData = [];
			}
			else if(e.target.id==="abbaClose"){
				abbaData = [];
				document.body.removeChild(abbaBox);
				this.removeEventListener('click', dataClick, true);
			}
			else if(num && !isNaN(+num)){
				updateAbba(+num);
			}
		}
	}());
