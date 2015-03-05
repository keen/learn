// ----------------------------------------
// Make a new client
// ----------------------------------------
var client = new Keen({
  projectId: "527f4a6273f4bb06f3000003",
  writeKey: "6c655c731a95a4c4ddf4251e9476e2cffb9c690632bd365e632529d0814be7ae360992ba6d48720b87d5f33a220666f56e5fc3c06efba4bd2253d1c9940d4601ab70d713ddac227f34e05f5ec57a695b250cfa3c0c1859f6dd6ed8b93cf8c9c2b4ff3fdec71f556350ea2a773e179508"
});

// run this when the page is ready
$(function() {
  var button = document.getElementById("example-button");

  var data = {
    // define event properties here
    name: "Dustin"
    // product: {
    //   name: "My Cool Product",
    //   id: "s3984023d984092dfs384092fds384092348",
    //   price: 25,
    //   on_sale: false
    // }
  };

  button.onclick = function(e) {
    console.log(data);
    // client.addEvent("clicks", data, function(err, res){
    //   console.log(res);
    // });
  }

});
