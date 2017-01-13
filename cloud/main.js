


///########### cloud code function for Drop In Insight ##############################


// dropIn rewards earned today

Parse.Cloud.define('dropInRewardsEarnedRedeemedToday', function(req, res) {

  var BarMetrics = Parse.Object.extend("Metrics_DropIn");
  var query = new Parse.Query(BarMetrics);
  query.descending("date");
  query.limit(1);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];

        var rewardsEarnedRedeemArray = [];

        // earend check
        var rewardEarned0 = object.get('rewardsEarned');
        var rewardEarned1 = object.get('rewardsEarnedMinus1');
        var rewardEarned2 = object.get('rewardsEarnedMinus2');
        var rewardEarned3 = object.get('rewardsEarnedMinus3');
        var rewardEarned4 = object.get('rewardsEarnedMinus4');
        var rewardEarned5 = object.get('rewardsEarnedMinus5');
        var rewardEarned6 = object.get('rewardsEarnedMinus6');

        var rewardsRedeemed0 = object.get('rewardsRedeemed');
        var rewardsRedeemed1 = object.get('rewardRedeemedMinus1');
        var rewardsRedeemed2 = object.get('rewardRedeemedMinus2');
        var rewardsRedeemed3 = object.get('rewardRedeemedMinus3');
        var rewardsRedeemed4 = object.get('rewardRedeemedMinus4');
        var rewardsRedeemed5 = object.get('rewardRedeemedMinus5');
        var rewardsRedeemed6 = object.get('rewardRedeemedMinus6');


        rewardsEarnedRedeemArray.push(rewardsRedeemed0);
        rewardsEarnedRedeemArray.push(rewardsRedeemed1);
        rewardsEarnedRedeemArray.push(rewardsRedeemed2);
        rewardsEarnedRedeemArray.push(rewardsRedeemed3);
        rewardsEarnedRedeemArray.push(rewardsRedeemed4);
        rewardsEarnedRedeemArray.push(rewardsRedeemed5);
        rewardsEarnedRedeemArray.push(rewardsRedeemed6);


        rewardsEarnedRedeemArray.push(rewardEarned0);
        rewardsEarnedRedeemArray.push(rewardEarned1);
        rewardsEarnedRedeemArray.push(rewardEarned2);
        rewardsEarnedRedeemArray.push(rewardEarned3);
        rewardsEarnedRedeemArray.push(rewardEarned4);
        rewardsEarnedRedeemArray.push(rewardEarned5);
        rewardsEarnedRedeemArray.push(rewardEarned6);

        res.success(rewardsEarnedRedeemArray);
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
  query.descending("date");
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
  query.descending("date");
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
  query.descending("date");
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
