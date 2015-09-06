module.exports = function (db) {
  var initialTeams = [{
    id: 1,
    name: 'Giants',
    logo_image_url: 'http://sanfrancisco.giants.mlb.com/documents/6/0/2/111217602/SF_header_logo_mpqkye7c.svg',
    mascot: 'Lou Seal'
  }, {
    id: 2,
    name: 'Red Sox',
    logo_image_url: 'http://boston.redsox.mlb.com/documents/9/6/2/111260962/BOS_header_logo_htojzayw.svg',
    mascot: 'Wally the Green Monster'
  }];

  var initialStadiums = [{
    id: 1,
    team_id: 1,
    name: 'AT&T Park',
    city: 'San Francisco',
    image_url: 'http://en.wikipedia.org/wiki/AT%26T_Park#/media/File:ATT_Sunset_Panorama.jpg'
  }, {
    id: 2,
    team_id: 2,
    name: 'Fenway Park',
    city: 'Boston',
    image_url: 'http://en.wikipedia.org/wiki/Fenway_Park#/media/File:Fenway_from_Legend%27s_Box.jpg'
  }];

  var seed = function (model, data) {
    return model.count()
      .then(function (count) {
        if (count === 0) {
          console.log("Seeding: " + model.tableName);
          return model.bulkCreate(data);
        } else {
          console.log("Already seeded: " + model.tableName);
          return Promise.resolve({});
        }
      });
  };

  return Promise.resolve({})
    .then(function () {
      return seed(db.Team, initialTeams);
    })
    .then(function () {
      return seed(db.Stadium, initialStadiums);
    });
};
