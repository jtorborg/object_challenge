var locations = []; // this array will hold your objects

// object constructor

<<<<<<< HEAD


function Region(state, revenue, location) {
this.state = state;
this.revenue = revenue;
this.locationCount = location;
this.averageRevenue = function () {
  return this.revenue/this.locationCount;

}
}


// object instances
var illinois = new Region ("IL", 5000, 12);
var minnesota = new Region ("MN", 300, 3);
var nevada = new Region ("NV", 25000, 1);


console.log(illinois);
console.log(minnesota);
console.log(nevada);

illinois.averageRevenue;
Region(illinois);
var averageRev = illinois.averageRevenue;
console.log(averageRev);
Region(minnesota);
Region(nevada);
Region("IL", 5000, 12);
console.log(illinois.averageRevenue);



// push object instances to locations array
locations.push(illinois, minnesota, nevada);
console.log(locations);

//DO NOT MODIFY THIS CODE
=======
// object instances

// push object instances to locations array

// DO NOT MODIFY THIS CODE
>>>>>>> 647e7964ff3e0a8c879a05523ee17e7402cbf8b8
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
