// ----------------------------------------
// Make a new client
// ----------------------------------------
var client = new Keen({
  projectId: "527f4a5705cd666b59000003",
  writeKey: "b4974c6fb6050a4852d2c58790ed774936943da0a7f358527fb6f0c67211ffb837d03687fd949923c953300cdbdb11dd8f044e671b28f53e2c3f75ff5e41928d79c4a24d0871f71c38a3bc115cae221f6bf99ac62580f3df43f3351796e4afdfa15d79cc5b37480b7e349dd16f8e57b2"
});

// run this when the page is ready
$(function() {
  var button = document.getElementById("example-button");

  var data = {
    // define event properties here
    name: "Guest"
    // product: {
    //   name: "My Cool Product",
    //   id: "s3984023d984092dfs384092fds384092348",
    //   price: 25,
    //   on_sale: false
    // }
  };

  button.onclick = function(e) {
    console.log(data);
    client.addEvent("clicks", data, function(err, res){
      console.log(res);
    });
  }

});
