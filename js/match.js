// Wait for page to load
document.addEventListener('DOMContentLoaded', function(event) {
	ready();
})

function ready() {
	let url = 'https://api.sheety.co/b17da76d0296c3ec007b31467e51ec3f/ตารางแข่งทีมชายKkuVolleyball’sNewGeneration/sheet1';
	fetch(url)
	.then((response) => response.json())
	.then(json => {
		// Group menu items by their category
		let matches = _.groupBy(json.sheet1, 'id');
		// Create a Handlebars template to render items
		var template = Handlebars.compile(document.getElementById("match-template").innerHTML);
		// Render items into Handlebars template, and set the html of the container element
		document.getElementById('coming-match').innerHTML = template(matches);
	});
}