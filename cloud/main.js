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
      badge: "Increment",
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



Parse.Cloud.define("incrementBadge", function(request, response) {

  var pushQuery = new Parse.Query(Parse.Installation);
  // pushQuery.containedIn("deviceType", ["ios", "android"]); // errors if no iOS certificate

  // Send push notification to query
  Parse.Push.send({
    where: pushQuery, // Set our installation query
    data: {
      badge: "Increment",
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

///########### cloud code function for Drop In Emails ##############################
Parse.Cloud.define('emailAudit', function(req, res) {

  var date =

  var Emails = Parse.Object.extend("Marketing_Emails_Audit");
  var email = new Emails();

  var UserId = Parse.Object.extend("_User");

  email.set("date", new Date());
  email.set("type", req.params.emailType);
  email.set("emailAddressSentTo", req.params.emailAddress);
  email.set("userId", new UserId({id: req.params.userId}));

  email.save(null, {
    success: function(faq) {

      res.success("Save Success");
      // Execute any logic that should take place after the object is saved.

    },
    error: function(faq, error) {

      res.error("Error: " + error.code + " " + error.message);
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.

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
        var lifeRepeatUsers = object.get('lifetimeRepeatUsers');
        var lifeActiveUsers = object.get('lifetimeActiveUsers');
        //res.success(object.get('totalUsersUndef'));

        activeUserMetricArray.push(monActiveUsers);
        activeUserMetricArray.push(monRepeatUsers);
        activeUserMetricArray.push(monthRewardsUniq);
        activeUserMetricArray.push(earnedRewardRedeemUniq);
        activeUserMetricArray.push(earnedRewardRedeem);
        activeUserMetricArray.push(lifeRepeatUsers);
        activeUserMetricArray.push(lifeActiveUsers);

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

  if (hour > 9) {

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
        var lifeRepeatUsers = object.get('lifetimeRepeatUsers');
        var monRepeatUsers = object.get('monthlyRepeatUsers');

        var monthlyRewardsRedeemed = object.get('monthlyRewardsRedeemed');

        //res.success(object.get('totalUsersUndef'));

        var temp = {barName:barName, monthlyRewardsRedeemed: monthlyRewardsRedeemed, lifetimeRepeatUser:lifeRepeatUsers, monthlyRepeatUsers:monRepeatUsers, rewardsToday:rewardsToday, earnedRewardsRedeemedToday:earnedRewardsRedeemedToday,rewardsRedeemedToday:rewardsRedeemedToday, monthlyRewardsEarnedUniq:monthlyRewardsEarnedUniq, earnedRewardsRedeemedMonthlyUniq:earnedRewardsRedeemedMonthlyUniq,earnedRewardsRedeemedMonthly:earnedRewardsRedeemedMonthly, monthlyRewardsEarned:monthlyRewardsEarned, lifetimeRewardsEarned: lifetimeRewardsEarned,monthlyActiveUsers:monthlyActiveUsers, lifetimeActiveUsers:lifetimeActiveUsers};

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

// for bar metrics

Parse.Cloud.define('barDashboardMetrics', function(req, res) {

  var d = new Date(); // for now
  var hour = d.getHours();

  if (hour > 9) {

    var todaysDate = new Date();
    todaysDate.setHours(0,0,0,0);

  }

  else {

    var todaysDate = new Date();
    todaysDate.setDate(todaysDate.getDate() - 1);
    todaysDate.setHours(0,0,0,0);

  }

  var BarPointer = Parse.Object.extend("Bar");

  var barMetricsArray = [];

  var BarMetrics = Parse.Object.extend("Metrics_Bars");
  var query = new Parse.Query(BarMetrics);
  query.equalTo("barId", new BarPointer({id: req.params.barId}));
  query.greaterThanOrEqualTo("date", todaysDate);
  query.include("barId");
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];



        var barName =  object.get('barId').get('name');
        var rwdRedeemWeekUniq = object.get('rewardsRedeemedWeekUniq');
        var rwdEarnedWeekUniq = object.get('rewardsEarnedWeekUniq');
        var rwdRedeemWeek = object.get('rewardsRedeemedWeekUniq');
        var rwdEarnedWeek = object.get('rewardsEarnedWeekUniq');

        var rwdEarnedMinus1 = object.get('rewardsEarnedMinus1');
        var rwdEarnedMinus2 = object.get('rewardsEarnedMinus2');
        var rwdEarnedMinus3 = object.get('rewardsEarnedMinus3');
        var rwdEarnedMinus4 = object.get('rewardsEarnedMinus4');
        var rwdEarnedMinus5 = object.get('rewardsEarnedMinus5');
        var rwdEarnedMinus6 = object.get('rewardsEarnedMinus6');
        var rwdEarnedMinus7 = object.get('rewardsEarnedMinus7');

        var rwdRedeemMinus1 = object.get('rewardRedeemedMinus1');
        var rwdRedeemMinus2 = object.get('rewardRedeemedMinus2');
        var rwdRedeemMinus3 = object.get('rewardRedeemedMinus3');
        var rwdRedeemMinus4 = object.get('rewardRedeemedMinus4');
        var rwdRedeemMinus5 = object.get('rewardRedeemedMinus5');
        var rwdRedeemMinus6 = object.get('rewardRedeemedMinus6');
        var rwdRedeemMinus7 = object.get('rewardRedeemedMinus7');

        var lifeTimeVisits = object.get('lifetimeRewardsEarned');
        var lifeTimeRedemption = object.get('lifetimeRewardsRedeemed');

        var lifetimeRewardsEarnedMon = object.get('lifetimeRewardsEarnedMon');
        var lifetimeRewardsEarnedTue = object.get('lifetimeRewardsEarnedTue');
        var lifetimeRewardsEarnedWed = object.get('lifetimeRewardsEarnedWed');
        var lifetimeRewardsEarnedThu = object.get('lifetimeRewardsEarnedThu');
        var lifetimeRewardsEarnedFri = object.get('lifetimeRewardsEarnedFri');
        var lifetimeRewardsEarnedSat = object.get('lifetimeRewardsEarnedSat');
        var lifetimeRewardsEarnedSun = object.get('lifetimeRewardsEarnedSun');

        var lifetimeRewardsRedeemMon = object.get('lifetimeRewardsRedeemMon');
        var lifetimeRewardsRedeemTue = object.get('lifetimeRewardsRedeemTue');
        var lifetimeRewardsRedeemWed = object.get('lifetimeRewardsRedeemWed');
        var lifetimeRewardsRedeemThu = object.get('lifetimeRewardsRedeemThu');
        var lifetimeRewardsRedeemFri = object.get('lifetimeRewardsRedeemFri');
        var lifetimeRewardsRedeemSat = object.get('lifetimeRewardsRedeemSat');
        var lifetimeRewardsRedeemSun = object.get('lifetimeRewardsRedeemSun');

        var newUserCountWeek = object.get('newUserCountWeek');
        var activeUserCountWeek = object.get('activeUserCountWeek');

        //res.success(object.get('totalUsersUndef'));

        var temp = {newUserCountWeek:newUserCountWeek, activeUserCountWeek:activeUserCountWeek,
          lifeTimeRedemption:lifeTimeRedemption, lifeTimeVisits:lifeTimeVisits,
          barName:barName,rewardEarnedMinus7: rwdEarnedMinus7,
          lifetimeRewardsRedeemMon: lifetimeRewardsRedeemMon,lifetimeRewardsRedeemTue: lifetimeRewardsRedeemTue,
          lifetimeRewardsRedeemWed: lifetimeRewardsRedeemWed,lifetimeRewardsRedeemThu: lifetimeRewardsRedeemThu,
          lifetimeRewardsRedeemFri: lifetimeRewardsRedeemFri,lifetimeRewardsRedeemSat: lifetimeRewardsRedeemSat,
          lifetimeRewardsRedeemSun: lifetimeRewardsRedeemSun,
          lifetimeRewardsEarnedMon: lifetimeRewardsEarnedMon,lifetimeRewardsEarnedTue: lifetimeRewardsEarnedTue,
          lifetimeRewardsEarnedWed: lifetimeRewardsEarnedWed,lifetimeRewardsEarnedThu: lifetimeRewardsEarnedThu,
          lifetimeRewardsEarnedFri: lifetimeRewardsEarnedFri,lifetimeRewardsEarnedSat: lifetimeRewardsEarnedSat,
          lifetimeRewardsEarnedSun: lifetimeRewardsEarnedSun,
          rewardEarnedMinus6: rwdEarnedMinus6,rewardEarnedMinus5: rwdEarnedMinus5,
          rewardEarnedMinus4: rwdEarnedMinus4,rewardEarnedMinus3: rwdEarnedMinus3,
          rewardEarnedMinus2: rwdEarnedMinus2,rewardEarnedMinus1: rwdEarnedMinus1,
          rewardRedeemMinus7: rwdRedeemMinus7,rewardRedeemMinus6: rwdRedeemMinus6,
          rewardRedeemMinus5: rwdRedeemMinus5,rewardRedeemMinus4: rwdRedeemMinus4,
          rewardRedeemMinus3: rwdRedeemMinus3, rewardRedeemMinus2: rwdRedeemMinus2,
          rewardRedeemMinus1: rwdRedeemMinus1,rewardsRedeemedWeekUniq: rwdRedeemWeekUniq,
          rewardsEarnedWeekUniq: rwdEarnedWeekUniq, rewardsRedeemedWeek: rwdRedeemWeek,
          rewardsEarnedWeek: rwdEarnedWeek};

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


Parse.Cloud.define('barDashboardDropInMetrics', function(req, res) {

  var barMetricsArray = [];

  var BarMetrics = Parse.Object.extend("Metrics_DropIn");
  var query = new Parse.Query(BarMetrics);
  query.descending("createdAt");
  query.limit(1);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var object = results[i];

        var rewardsRedeemArray = [];


        var rewardsEarnedDropIn = object.get('rewardsEarned');
        var rewardsEarnedDropIn1 = object.get('rewardsEarnedMinus1');
        var rewardsEarnedDropIn2 = object.get('rewardsEarnedMinus2');
        var rewardsEarnedDropIn3 = object.get('rewardsEarnedMinus3');
        var rewardsEarnedDropIn4 = object.get('rewardsEarnedMinus4');
        var rewardsEarnedDropIn5 = object.get('rewardsEarnedMinus5');
        var rewardsEarnedDropIn6 = object.get('rewardsEarnedMinus6');


        var rewardsRedeemedDropIn = object.get('rewardsRedeemed');
        var rewardsRedeemedDropIn1 = object.get('rewardRedeemedMinus1');
        var rewardsRedeemedDropIn2 = object.get('rewardRedeemedMinus2');
        var rewardsRedeemedDropIn3 = object.get('rewardRedeemedMinus3');
        var rewardsRedeemedDropIn4 = object.get('rewardRedeemedMinus4');
        var rewardsRedeemedDropIn5 = object.get('rewardRedeemedMinus5');
        var rewardsRedeemedDropIn6 = object.get('rewardRedeemedMinus6');


        //res.success(object.get('totalUsersUndef'));

        var temp = {rewardsEarnedDropIn:rewardsEarnedDropIn, rewardsRedeemedDropIn:rewardsRedeemedDropIn,
          rewardsEarnedDropIn1:rewardsEarnedDropIn1, rewardsEarnedDropIn2:rewardsEarnedDropIn2,
          rewardsEarnedDropIn3:rewardsEarnedDropIn3, rewardsEarnedDropIn4:rewardsEarnedDropIn4,
          rewardsEarnedDropIn5:rewardsEarnedDropIn5, rewardsEarnedDropIn6:rewardsEarnedDropIn6,
          rewardsRedeemedDropIn1:rewardsRedeemedDropIn1, rewardsRedeemedDropIn2:rewardsRedeemedDropIn2,
          rewardsRedeemedDropIn3:rewardsRedeemedDropIn3, rewardsRedeemedDropIn4:rewardsRedeemedDropIn4,
          rewardsRedeemedDropIn5:rewardsRedeemedDropIn5, rewardsRedeemedDropIn6:rewardsRedeemedDropIn6};

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
