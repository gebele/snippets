// enables content of a tab to be stored for a next time call
// usually usefull if the content was loaded from a time consuming REST or AJAX call

$(function() { 
	$('a[data-toggle="tab"]').on('click', function (e) {
		localStorage.setItem('lastTab', $(e.target).attr('href'));
	});
	var lastTab = localStorage.getItem('lastTab');
	if (lastTab) {
		$('a[href="'+lastTab+'"]').click();
	}
});


// basic xHTTP request

var HttpClient = function() {
  this.get = function(aUrl, aCallback) {
  var anHttpRequest = new XMLHttpRequest();
  anHttpRequest.onreadystatechange = function() {
  if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
    aCallback(anHttpRequest.responseText);
  }
    anHttpRequest.open( "GET", aUrl, true );
    anHttpRequest.send( null );
  }
};


// use basic xHTTP request in a function

aClient = new HttpClient();
aClient.get("#{to("/predict/modeldetails/#{model.id}")}", function(response) {
  var details = document.createElement("modeldetails#{model.id}");
  details.innerHTML = response;
  document.getElementById("details#{model.id}").appendChild(details);
});


// make links external links after page is rendered by HAML but content was added by xHTTP

addExternalLinks = function() {
  $('A[rel="external"]').each(function() {
    $(this).attr('alt', 'Link opens in new window.');
    $(this).attr('title', 'Link opens in new window.');
    $(this).attr('target', '_blank');
  });
};
// call it in another function e.g. after append a child element
addExternalLinks();


