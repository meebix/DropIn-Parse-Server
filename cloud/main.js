


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


        var rewardsRedeemed0 = object.get('rewardsEarned');
        var rewardsRedeemed1 = object.get('rewardsEarnedMinus1');
        var rewardsRedeemed2 = object.get('rewardsEarnedMinus2');
        var rewardsRedeemed3 = object.get('rewardsEarnedMinus3');
        var rewardsRedeemed4 = object.get('rewardsEarnedMinus4');
        var rewardsRedeemed5 = object.get('rewardsEarnedMinus5');
        var rewardsRedeemed6 = object.get('rewardsEarnedMinus6');


        rewardsRedeemArray.push(rewardsRedeemed0);
        rewardsRedeemArray.push(rewardsRedeemed1);
        rewardsRedeemArray.push(rewardsRedeemed2);
        rewardsRedeemArray.push(rewardsRedeemed3);
        rewardsRedeemArray.push(rewardsRedeemed4);
        rewardsRedeemArray.push(rewardsRedeemed5);
        rewardsRedeemArray.push(rewardsRedeemed6);

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


        rewardsRedeemArray.push(rewardsRedeemed0);
        rewardsRedeemArray.push(rewardsRedeemed1);
        rewardsRedeemArray.push(rewardsRedeemed2);
        rewardsRedeemArray.push(rewardsRedeemed3);
        rewardsRedeemArray.push(rewardsRedeemed4);
        rewardsRedeemArray.push(rewardsRedeemed5);
        rewardsRedeemArray.push(rewardsRedeemed6);

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


///########### cloud code function for Drop In Insight ##############################
