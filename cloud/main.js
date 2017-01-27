///########### Push notifications for Drop In ##############################

Parse.Cloud.define("pushToAll", function(request, response) {
  var message = request.params.message;
  if (message != null && message !== "") {
    message = message.trim();
  } else {
    response.error("Must provide \"message\" in JSON data");
    return;
  }

  var pushQuery = new Parse.Query(Parse.Installation);
  // pushQuery.containedIn("deviceType", ["ios", "android"]); // errors if no iOS certificate

  // Send push notification to query
  Parse.Push.send({
    where: pushQuery, // Set our installation query
    data: {
      alert: message,
      badge: 1,
      sound: 'default'
    }
  }, {
    useMasterKey: true,
    success: function() {
      // Push was successful
      console.log("Message was sent successfully");
      response.success('true');
    },
    error: function(error) {
      response.error(error);
    }
  });
});


///########### cloud code function for Drop In Insight ##############################

Parse.Cloud.define('dropInRewardsEarned', function(req, res) {

  var BarMetrics = Parse.Object.extend("Metrics_DropIn");
  var query = new Parse.Query(BarMetrics);
  query.descending("createdAt");
  query.limit(1);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];

        var rewardsRedeemArray = [];


        var rewardsEarned0 = object.get('rewardsEarned');
        var rewardsEarned1 = object.get('rewardsEarnedMinus1');
        var rewardsEarned2 = object.get('rewardsEarnedMinus2');
        var rewardsEarned3 = object.get('rewardsEarnedMinus3');
        var rewardsEarned4 = object.get('rewardsEarnedMinus4');
        var rewardsEarned5 = object.get('rewardsEarnedMinus5');
        var rewardsEarned6 = object.get('rewardsEarnedMinus6');
        var rewardsEarned30 = object.get('monthlyRewardsEarned');
        var rewardsEarnedLife = object.get('lifetimeRewardsEarned');


        rewardsRedeemArray.push(rewardsEarned0);
        rewardsRedeemArray.push(rewardsEarned1);
        rewardsRedeemArray.push(rewardsEarned2);
        rewardsRedeemArray.push(rewardsEarned3);
        rewardsRedeemArray.push(rewardsEarned4);
        rewardsRedeemArray.push(rewardsEarned5);
        rewardsRedeemArray.push(rewardsEarned6);
        rewardsRedeemArray.push(rewardsEarned30);
        rewardsRedeemArray.push(rewardsEarnedLife);

        res.success(rewardsRedeemArray);
      }

    },
    error: function(error) {
      res.error("Error: " + error.code + " " + error.message);
    }
  });

});


// dropIn rewards redeemed today

Parse.Cloud.define('dropInRewardsRedeemed', function(req, res) {

  var BarMetrics = Parse.Object.extend("Metrics_DropIn");
  var query = new Parse.Query(BarMetrics);
  query.descending("createdAt");
  query.limit(1);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];

        var rewardsRedeemArray = [];


        var rewardsRedeemed0 = object.get('rewardsRedeemed');
        var rewardsRedeemed1 = object.get('rewardRedeemedMinus1');
        var rewardsRedeemed2 = object.get('rewardRedeemedMinus2');
        var rewardsRedeemed3 = object.get('rewardRedeemedMinus3');
        var rewardsRedeemed4 = object.get('rewardRedeemedMinus4');
        var rewardsRedeemed5 = object.get('rewardRedeemedMinus5');
        var rewardsRedeemed6 = object.get('rewardRedeemedMinus6');
        var rewardsRedeemed30 = object.get('monthlyRewardsRedeemed');
        var rewardsRedeemedLife = object.get('lifetimeRewardsRedeemed');


        rewardsRedeemArray.push(rewardsRedeemed0);
        rewardsRedeemArray.push(rewardsRedeemed1);
        rewardsRedeemArray.push(rewardsRedeemed2);
        rewardsRedeemArray.push(rewardsRedeemed3);
        rewardsRedeemArray.push(rewardsRedeemed4);
        rewardsRedeemArray.push(rewardsRedeemed5);
        rewardsRedeemArray.push(rewardsRedeemed6);
        rewardsRedeemArray.push(rewardsRedeemed30);
        rewardsRedeemArray.push(rewardsRedeemedLife);

        res.success(rewardsRedeemArray);
      }

    },
    error: function(error) {
      res.error("Error: " + error.code + " " + error.message);
    }
  });

});



// drop in total users since v2

Parse.Cloud.define('dropInTotalUsers', function(req, res) {

  var BarMetrics = Parse.Object.extend("Metrics_DropIn");
  var query = new Parse.Query(BarMetrics);
  query.descending("createdAt");
  query.limit(1);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];

        res.success(object.get('totalUsers'));
      }

    },
    error: function(error) {
      res.error("Error: " + error.code + " " + error.message);
    }
  });

});



// drop in tuser signups

Parse.Cloud.define('dropInUserSignups', function(req, res) {

  var BarMetrics = Parse.Object.extend("Metrics_DropIn");
  var query = new Parse.Query(BarMetrics);
  query.descending("createdAt");
  query.limit(1);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        var userSignupArray = [];
        var signup0 = object.get('userSignups');
        var signup1 = object.get('userSignupsMinus1');
        var signup2 = object.get('userSignupsMinus2');
        var signup3 = object.get('userSignupsMinus3');
        var signup4 = object.get('userSignupsMinus4');
        var signup5 = object.get('userSignupsMinus5');
        var signup6 = object.get('userSignupsMinus6');
        var signup30 = object.get('userSignupsMinus30');
        var signup60 = object.get('userSignupsMinus60');
        //res.success(object.get('totalUsersUndef'));

        userSignupArray.push(signup0);
        userSignupArray.push(signup1);
        userSignupArray.push(signup2);
        userSignupArray.push(signup3);
        userSignupArray.push(signup4);
        userSignupArray.push(signup5);
        userSignupArray.push(signup6);
        userSignupArray.push(signup30);
        userSignupArray.push(signup60);

        res.success(userSignupArray);

      }

    },
    error: function(error) {
      res.error("Error: " + error.code + " " + error.message);
    }
  });

});






// drop in total users gender breakdown since v2

Parse.Cloud.define('dropInGenderBreakdown', function(req, res) {

  var BarMetrics = Parse.Object.extend("Metrics_DropIn");
  var query = new Parse.Query(BarMetrics);
  query.descending("createdAt");
  query.limit(1);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        var genderArray = [];
        var undefUsers = object.get('totalUsersUndef');
        var femaleUsers = object.get('totalUsersFemale');
        var maleUsers = object.get('totalUsersMale');
        //res.success(object.get('totalUsersUndef'));

        genderArray.push(undefUsers);
        genderArray.push(femaleUsers);
        genderArray.push(maleUsers);

        res.success(genderArray);

      }

    },
    error: function(error) {
      res.error("Error: " + error.code + " " + error.message);
    }
  });

});


Parse.Cloud.define('venues', function(req, res) {

  var barArray = [];
  var barArrayActive = [];
  var barArrayInactive = [];

  var BarCount = Parse.Object.extend("Bar");
  var query = new Parse.Query(BarCount);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];


        var isActiveTemp = object.get('isActive');


        if (isActiveTemp == true) {

          barArrayActive.push(isActiveTemp);
        }
        else {

          barArrayInactive.push(isActiveTemp);

        }



      }

      var activeCount = barArrayActive.length;
      var inactiveCount = barArrayInactive.length;
      barArray.push(activeCount);
      barArray.push(inactiveCount);
      res.success(barArray);

    },
    error: function(error) {
      res.error("Error: " + error.code + " " + error.message);
    }
  });

});




Parse.Cloud.define('activeUserMetrics', function(req, res) {

  var BarMetrics = Parse.Object.extend("Metrics_DropIn");
  var query = new Parse.Query(BarMetrics);
  query.descending("createdAt");
  query.limit(1);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        var activeUserMetricArray = [];
        var monActiveUsers = object.get('monthlyActiveUsers');
        var monRepeatUsers = object.get('monthlyRepeatUsers');
        var monthRewardsUniq = object.get('monthlyRewardsEarnedUniq');
        var earnedRewardRedeemUniq = object.get('earnedRwdsRedeemMonthlyUniq');
        var earnedRewardRedeem = object.get('earnedRewardsRedeemedMonthly');
        //res.success(object.get('totalUsersUndef'));

        activeUserMetricArray.push(monActiveUsers);
        activeUserMetricArray.push(monRepeatUsers);
        activeUserMetricArray.push(monthRewardsUniq);
        activeUserMetricArray.push(earnedRewardRedeemUniq);
        activeUserMetricArray.push(earnedRewardRedeem);

        res.success(activeUserMetricArray);

      }

    },
    error: function(error) {
      res.error("Error: " + error.code + " " + error.message);
    }
  });

});


Parse.Cloud.define('barMetrics', function(req, res) {

  var d = new Date(); // for now
  var hour = d.getHours();

  if (hour > 5) {

    var todaysDate = new Date();
    todaysDate.setHours(0,0,0,0);

  }

  else {

    var todaysDate = new Date();
    todaysDate.setDate(todaysDate.getDate() - 1);
    todaysDate.setHours(0,0,0,0);

  }


  var barMetricsArray = [];

  var BarMetrics = Parse.Object.extend("Metrics_Bars");
  var query = new Parse.Query(BarMetrics);
  query.greaterThanOrEqualTo("date", todaysDate);
  query.include("barId");
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];



        var barName =  object.get('barId').get('name');
        var rewardsToday = object.get('rewardsEarned');
        var earnedRewardsRedeemedToday = object.get('earnedRewardsRedeemed');
        var rewardsRedeemedToday = object.get('rewardsRedeemed');
        var monthlyRewardsEarnedUniq = object.get('monthlyRewardsEarnedUniq');
        var earnedRewardsRedeemedMonthlyUniq = object.get('earnedRwdsRedeemdMonthlyUniq');
        var earnedRewardsRedeemedMonthly = object.get('earnedRewardsRedeemedMonthly');
        var monthlyRewardsEarned = object.get('monthlyRewardsEarned');
        var lifetimeRewardsEarned = object.get('lifetimeRewardsEarned');
        var monthlyActiveUsers = object.get('monthlyActiveUsers');
        var lifetimeActiveUsers = object.get('lifetimeActiveUsers');

        //res.success(object.get('totalUsersUndef'));

        var temp = {barName:barName, rewardsToday:rewardsToday, earnedRewardsRedeemedToday:earnedRewardsRedeemedToday,rewardsRedeemedToday:rewardsRedeemedToday, monthlyRewardsEarnedUniq:monthlyRewardsEarnedUniq, earnedRewardsRedeemedMonthlyUniq:earnedRewardsRedeemedMonthlyUniq,earnedRewardsRedeemedMonthly:earnedRewardsRedeemedMonthly, monthlyRewardsEarned:monthlyRewardsEarned, lifetimeRewardsEarned: lifetimeRewardsEarned,monthlyActiveUsers:monthlyActiveUsers, lifetimeActiveUsers:lifetimeActiveUsers};

        barMetricsArray.push(temp);
        //barMetricsArray.push([barName,rewardsToday,earnedRewardsRedeemedToday,rewardsRedeemedToday,monthlyRewardsEarnedUniq,earnedRewardsRedeemedMonthlyUniq,earnedRewardsRedeemedMonthly,monthlyRewardsEarned,lifetimeRewardsEarned,monthlyActiveUsers,lifetimeActiveUsers, results.length]);

      }

      res.success(barMetricsArray);

    },
    error: function(error) {
      res.error("Error: " + error.code + " " + error.message);
    }
  });

});



///########### cloud code function for Drop In Insight ##############################
