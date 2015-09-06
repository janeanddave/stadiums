
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
          logo_image_url={ team.logo_image_url }
          id={ team.id } />
      );
    });
    return (
      <div class="teamList">
        { teams }
      </div>
    );
  }
});

var TeamDetail = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function () {
    return {
      team: undefined
    }
  },
  getTeamId: function () {
    return this.context.router.getCurrentParams().team_id;
  },
  componentDidMount: function () {
    $.ajax({
      url: "/api/teams/" + this.getTeamId(),
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({team: data});
      }.bind(this)
    });
  },
  render: function () {
    if (this.state.team) {
      return (
        <Team
          name={ this.state.team.name }
          mascot={ this.state.team.mascot }
          logo_image_url={ this.state.team.logo_image_url }
          show_details={ true }
          id={ this.state.team.id } />
      );
    } else {
      return null;
    }
  }
});

var Team = React.createClass({
  render: function () {
    var details = (
      <div class="teamDetails">
        <h2>{ this.props.name }</h2>
        <h3>{ this.props.mascot }</h3>
        <img src={ this.props.logo_image_url } />
      </div>
    );
    return (
      <div class="team">
        <Link to={ "/teams/" + this.props.id }>{ this.props.name }</Link>
        {
          this.props.show_details ? details: null
        }
      </div>
    );
  }
});