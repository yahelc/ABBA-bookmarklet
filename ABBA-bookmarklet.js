	(function(){
		function abba_url(data_array){
			var url = "http://www.thumbtack.com/labs/abba/#";
			var variationNum = 0;
			for(var i = 0; i<data_array.length; i++){
				url += "Variation+" + (++variationNum)  + "=" + data_array[i] + "%2C" + data_array[++i] + "&";
			}
			return url + "abba%3AintervalConfidenceLevel=0.95&abba%3AuseMultipleTestCorrection=false";
		}
		
		if(window.abbaDispatchOnNext){
			window.open(abba_url(abbaData));
			this.removeEventListener('click', arguments.callee, true);
			abbaDispatchOnNext = false;
			abbaData = [];
		}
		window.abbaDispatchOnNext = true;
		window.abbaData = window.abbaData || [];
		document.addEventListener("click", function(e){
			var num = e.target.textContent.replace(/\D/g,'');
			if(typeof +(num) === "number" && !isNaN(+num)){
				abbaData.push(num);
			}

		}, true);		
	}());
