app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/index-1", {
      templateUrl: "index.html"
    })
    .when('/index-2',{
        templateUrl: "index2.html"
    })
    .when("/menu", {
      templateUrl: "menu.html"
    })
    .when("/menu2", {
      templateUrl: "menu2.html"
    })
    .when("/menu3", {
      templateUrl: "menu3.html"
    })
    .when("/our-story", {
      templateUrl: "our-story.html"
    })
    .when("/blog", {
      templateUrl: "blog1.html"
    })
    .when("/blog2", {
      templateUrl: "blog2.html"
    })
    .when("/contact-us", {
      templateUrl: "contact-us.html"
    })
    .when("/shop", {
      templateUrl: "shop.html"
    })
    .otherwise({
      redirectTo: "/"
    });
});
