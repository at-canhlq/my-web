'use strict';

var myWebServices = angular.module('myWebServices', []);
myWebServices.factory('Person', function ()  {
  return function (data, searchBy, searchKey) {
  	var filtered = [];
  	if (searchBy == 'name') {
  	  for (var i=0; i<data.length; i++) {
  	    if (data[i].name.toLowerCase().search(searchKey.toLowerCase()) != -1) 
          filtered.push(data[i]);
  	  }
  	}
  	else {
      for (var i=0; i<data.length; i++) {
  	    if (data[i].sbd == searchKey) filtered.push(data[i]);
  	  }
  	}
  	return filtered;
  };
});