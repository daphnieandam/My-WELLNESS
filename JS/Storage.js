function SubmitForm() {
			
	var fname = document.forms.form.name.value;
	var lname = document.forms.form.lname.value;
	var address = document.forms.form.address.value;
	var gender = document.forms.form.gender.value;
	var weight = document.forms.form.weight.value;
	var IDcode = document.forms.form.IDcode.value;
	localStorage.setItem(fname, lname, address, gender, weight, IDcode);
	doShowAll();
	
}

function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>FirstName</th><th>LastName</th><th>Address</th><th>Gender</th><th>Weight</th></tr>\n";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		if (list == "<tr><th>FirstName</th><th>LastName</th><th>Address</th><th>Gender</th><th>Weight</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot store shopping list as your browser do not support local storage');
	}
}

/*
 * Checking the browser compatibility.
 * 
 * Alternately can use Modernizr scripts- JavaScript library that helps us to
 * detect the browser support for HTML5 and CSS features Example - <script
 * type="text/javascript" src="modernizr.min.js"></script>
 * 
 * if (Modernizr.localstorage) { //use localStorage object to store data } else {
 * alert('Cannot store user preferences as your browser do not support local
 * storage'); }
 */
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}