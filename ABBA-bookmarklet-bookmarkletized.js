javascript:(function(){function%20abba_url(data_array){var%20url%20=%20%22http://www.thumbtack.com/labs/abba/#%22;for(var%20i%20=%200;%20i<data_array.length;%20i++){url%20+=%20%22Variation+%22%20+%20(i+1)%20+%20%22=%22%20+%20data_array[i]%20+%20%22%2C%22%20+%20data_array[++i]%20+%20%22&%22;}url%20+=%20%22abba%3AintervalConfidenceLevel=0.95&abba%3AuseMultipleTestCorrection=true%22;return%20url;}if(window.abbaDispatchOnNext){window.open(abba_url(abbaData));this.removeEventListener(%27click%27,%20arguments.callee,%20true);}window.abbaDispatchOnNext%20=%20true;window.abbaData%20=%20window.abbaData%20||%20[];document.addEventListener(%22click%22,%20function(e){var%20num%20=%20e.target.textContent.replace(/\D/g,%27%27);if(typeof%20+(num)%20===%20%22number%22%20&&%20!isNaN(+num)){abbaData.push(num);}},%20true);}());
