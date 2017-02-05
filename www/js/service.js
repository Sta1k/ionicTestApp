/**
 * Created by stalk on 05.02.17.
 */
APP.service('API', function ($http) {
  var url = 'http://vanilla.dev.htmlcms.me/books/';

  this.requestLib = function () {
    return $http({
      method: 'GET',
      url: url
    })
  };
  this.requestBook = function (id) {
    return $http({
      method: 'GET',
      url: url.slice(0,-2)+'/'+id
    })
  };
});
