// ----------------------------------------
// Make a new client
// ----------------------------------------
var client = new Keen({
  projectId: "527f4a5705cd666b59000003",
  readKey: "4a01136fa2784a966f30ad31670dc8fc2746c8c505330fd0b1a2c0452bc23bfc543f4a6d01baa615dfb84c1da9b460dadf1c14c2ac73aa2085555faaa35f64ba4353932574671b56d4bb55024df0cb460025b983ccd93cbfd80a518d87a31eeec10d51f6aaf82a4b06b3eb88b33bc22c"
});

Keen.ready(function(){

  // ----------------------------------------
  // Make a new query
  // ----------------------------------------
  var query = new Keen.Query("count", {
    eventCollection: "clicks"
    // groupBy: "name",
    // timeframe: "this_15_minutes",
    // interval: "minutely"
  });

  // ----------------------------------------
  // Run the query and draw the result
  // ----------------------------------------
  var el = document.getElementById("example-chart");

  client.draw(query, el, {
    // height: 400,
    // sortGroups: "desc",
    title: "Total Clicks"
  });

});
