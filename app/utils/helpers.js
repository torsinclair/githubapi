var axios = require('axios');
var Yelp = require('yelp');

function getSearchItems (searchCategory) {
  return axios.get('https://api.github.com/users/' + searchCategory)
}

var helpers = {
  getSearchInfo: function (categories) {
    return axios.all(categories.map(function (username) {
      return getSearchItems(username)
    })).then(function (info) {
      return info.map(function (user) {
        return user.data;
      })
    }).catch(function () {
      console.warn('Error', err)
    })
  }
}

module.exports = helpers;