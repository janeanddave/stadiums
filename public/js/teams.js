
var Teams = React.createClass({
  getTeams: function () {
    $.ajax({
      url: "/api/teams",
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({teams: data});
      }.bind(this)
    });
  },
  componentDidMount: function () {
    this.getTeams();
  },
  getInitialState: function () {
    return {
      teams: []
    };
  },
  render: function () {
    return (
      <div class="teams">
        <TeamList teams={ this.state.teams }/>
      </div>
    );
  }
});

var TeamList = React.createClass({
  render: function () {
    var teams = this.props.teams.map(function (team, index) {
      return (
        <Team
          name={ team.name }
          mascot={ team.mascot }
          logo_image_url={ team.logo_image_url } />
      );
    });
    return (
      <div class="teamList">
        { teams }
      </div>
    );
  }
});

var Team = React.createClass({
  render: function () {
    return (
      <div class="team">
        <h2>{ this.props.name }</h2>
        <h3>{ this.props.mascot }</h3>
        <img src={ this.props.logo_image_url } />
      </div>
    );
  }
});