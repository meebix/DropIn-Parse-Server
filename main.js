
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi its nick');
});

///########### cloud code function for Drop In Insight ##############################


// dropIn rewards earned today

Parse.Cloud.define('dropInRewardsEarnedToday', function(req, res) {

  var BarMetrics = Parse.Object.extend("Metrics_DropIn");
  var query = new Parse.Query(BarMetrics);
  query.descending("date");
  query.limit(1);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];

        var rewardsEarnedToday = object.get('rewardsEarned');
        res.success(rewardsEarnedToday);
      }

    },
    error: function(error) {
      res.error("Error: " + error.code + " " + error.message);
    }
  });

});

// drop in rewards redeemed today

Parse.Cloud.define('dropInRewardsRedeemedToday', function(req, res) {

  var BarMetrics = Parse.Object.extend("Metrics_DropIn");
  var query = new Parse.Query(BarMetrics);
  query.descending("date");
  query.limit(1);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];

        var rewardsEarnedToday = object.get('rewardsRedeemed');
        res.success(rewardsEarnedToday);
      }

    },
    error: function(error) {
      res.error("Error: " + error.code + " " + error.message);
    }
  });

});


///########### cloud code function for Drop In Insight ##############################
