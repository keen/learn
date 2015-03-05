// ----------------------------------------
// Make a new client
// ----------------------------------------
var client = new Keen({
  projectId: "527f4a6273f4bb06f3000003",
  readKey: "43e0dfbff5e6faf47d4a2b441c506d3ec34b67e7976fcd320eb7e2e3036005aedb0c8400394ca4b9694e064b70aa8992feb6a5b0bae9d37266b780b344e1e50a600cdd15b6fc9c8fd2434b5cc39584cb833d1a769443f05d5416c1e5a6435feed8e51ad85afe13e95beda19fe55f3c96"
});

Keen.ready(function(){

  // ----------------------------------------
  // Make a new query
  // ----------------------------------------
  var query = new Keen.Query("count", {
    eventCollection: "clicks"
  });

  // ----------------------------------------
  // Run the query and draw the result
  // ----------------------------------------
  var el = document.getElementById("example-chart");

  var chart = client.draw(query, el, {
    height: 140,
    title: "Total Clicks",
  });

});
