var friendsData = require("../data/friends.js");

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    var dateMatch = {
      name: "",
      photo: "",
      ratingsDifferential: 100
    };

    // console.log(req.body);

    // taking the user's survey results and parsing it
    var userData = req.body;
    var userScores = userData.scores;

    // console.log(userScores);

    var matchDifference = 0;

    for (var i = 0; i < friendsData.length; i++) {
      //console.log(friendsData[i]);
      matchDifference = 0;

      for (var h = 0; h < friendsData[i].scores[h]; h++) {
        matchDifference += Math.abs(parseInt(userScores[h]) - parseInt(friendsData[i].scores[h]));

        if (matchDifference <= dateMatch.ratingsDifferential) {

          // set match to newly determined, least different friend.
          dateMatch.name = friendsData[i].name;
          dateMatch.photo = friendsData[i].photo;
          dateMatch.ratingsDifferential = matchDifference;
        }
      }
    }

    friendsData.push(userData);

    res.json(dateMatch);
    console.log(req.body);
    console.log(friendsData[11]);
  })


};
