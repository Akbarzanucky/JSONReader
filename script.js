function appendData(data){
    var mainContainer = document.getElementById("displayData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div"); //differentiating every pieces
        div.innerHTML = 'Name: ' + data[i].Title + ' ' + data[i].Date; //iterating the data inside json
        mainContainer.appendChild(div); //inserting data in div into html body
      }
}



fetch('test.json')
  .then(function (response) {
    return response.json(); //fetching json data
  })
  .then(function (data) {
    appendData(data); //function to append data
  })
  .catch(function (err) {
    console.log(err); //error handling
  });


