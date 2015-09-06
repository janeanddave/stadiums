var Router = ReactRouter;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="stadiums">Stadiums</Link></li>
            <li><Link to="teams">Teams</Link></li>
          </ul>
        </header>

        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="stadiums" handler={Stadiums}/>
    <Route name="stadium" path="stadiums/:stadium_id" handler={StadiumDetail}/>
    <Route name="teams" handler={Teams}/>
    <DefaultRoute handler={Stadiums}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById("content"));
});
