function Get() {	
	
    
}

var localSearch
function Search() {



  // Create a LocalSearch instance.
  localSearch = new google.search.LocalSearch();

  // Set the Local Search center point
  localSearch.setCenterPoint("New York, NY");

  // Set searchComplete as the callback function when a search is complete. The
  // localSearch object will have results in it.
  localSearch.setSearchCompleteCallback(this, SearchComplete, null);

  // Specify search quer(ies)
  localSearch.execute('coffee New York NY'); 
  
  // Include the required Google branding. 
  // Note that getBranding is called on google.search.Search
  google.search.Search.getBranding('branding');

}

function SearchComplete() {

	alert(localSearch.results[0])

}

function init() {
	
	findLocation()
	
}


