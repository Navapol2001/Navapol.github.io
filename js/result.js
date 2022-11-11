// Wait for page to load
document.addEventListener('DOMContentLoaded', function(event) {
	ready();
})

function ready() {
	let url = 'https://api.sheety.co/8951affaddff192e2e8fdabbd7e6ad39/ตารางแข่งทีมชายKkuVolleyball’sNewGeneration/result1';
	fetch(url)
	.then((response) => response.json())
	.then(json => {
		// Group menu items by their category
		let results = _.groupBy(json.result1, 'id');
		// Create a Handlebars template to render items
		var template = Handlebars.compile(document.getElementById("result-template").innerHTML);
		// Render items into Handlebars template, and set the html of the container element
		document.getElementById('result-content').innerHTML = template(results);
	});
}