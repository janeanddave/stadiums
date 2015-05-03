module.exports = function (db) {
  // Seed teams
  return db.Team.count()
    .then(function (count) {
      if (count === 0) {
        return db.Team.bulkCreate([{
          id: 1,
          name: 'Giants',
          logo_image_url: 'http://sanfrancisco.giants.mlb.com/documents/6/0/2/111217602/SF_header_logo_mpqkye7c.svg',
          mascot: 'Lou Seal'
        }, {
          id: 2,
          name: 'Red Sox',
          logo_image_url: 'http://boston.redsox.mlb.com/documents/9/6/2/111260962/BOS_header_logo_htojzayw.svg',
          mascot: 'Wally the Green Monster'
        }]);
      } else {
        return Promise.resolve({});
      }
    })
    .then(function () {
      return db.Stadium.count()
        .then(function (count) {
          if (count === 0) {
            return db.Stadium.bulkCreate({
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
            });
          } else {
            return Promise.resolve({});
          }
        });
    })
};
