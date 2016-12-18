//advent of code thing == 110962-20161130-c8b729c1

function floor(a){
	var b = a.slice(',');
	var c = 0;
	for (var i=0; i<b.length; i++){
		if(a[i] === '('){
			c++;
		} else {
			c--;
		}

	}
	return c;
}