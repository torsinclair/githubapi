var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var SearchContainer = require('../containers/SearchContainer');
var ConfirmActivitiesContainer = require('../containers/ConfirmActivitiesContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute header='Planr.' component={SearchContainer} />
      <Route path='activities/:searchField' component={ConfirmActivitiesContainer} />      
    </Route>
  </Router>
);

module.exports = routes;