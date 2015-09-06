
var Stadiums = React.createClass({
  getStadiums: function () {
    $.ajax({
      url: "/api/stadiums",
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({stadiums: data});
      }.bind(this)
    });
  },
  componentDidMount: function () {
    this.getStadiums();
  },
  getInitialState: function () {
    return {
      stadiums: []
    };
  },
  render: function () {
    return (
      <div class="stadiums">
        <StadiumList stadiums={ this.state.stadiums }/>
      </div>
    );
  }
});

var StadiumList = React.createClass({
  render: function () {
    var stadiums = this.props.stadiums.map(function (stadium, index) {
      return (
        <Stadium
          name={ stadium.name }
          city={ stadium.city }
          image_url={ stadium.image_url }
          show_details={ false }
          id={ stadium.id } />
      );
    });
    return (
      <div class="stadiumList">
        { stadiums }
      </div>
    );
  }
});

var StadiumDetail = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function () {
    return {
      stadium: undefined
    }
  },
  getStadiumId: function () {
    return this.context.router.getCurrentParams().stadium_id;
  },
  componentDidMount: function () {
    $.ajax({
      url: "/api/stadiums/" + this.getStadiumId(),
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({stadium: data});
      }.bind(this)
    });
  },
  render: function () {
    if (this.state.stadium) {
      return (
        <Stadium
          name={ this.state.stadium.name }
          city={ this.state.stadium.city }
          image_url={ this.state.stadium.image_url }
          show_details={ true }
          id={ this.state.stadium.id } />
      );
    } else {
      return null;
    }
  }
});

var Stadium = React.createClass({
  render: function () {
    var details = (
      <div class="stadiumDetails">
        <h3>{ this.props.city }</h3>
        <img src={ this.props.image_url } />
      </div>
    );
    return (
      <div class="stadium">
      <Link to={ "/stadiums/" + this.props.id }>{ this.props.name }</Link>
        {
          this.props.show_details ? details: null
        }
      </div>
    );
  }
});