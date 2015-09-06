
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
          image_url={ stadium.image_url } />
      );
    });
    return (
      <div class="stadiumList">
        { stadiums }
      </div>
    );
  }
});

var Stadium = React.createClass({
  render: function () {
    return (
      <div class="stadium">
        <h2>{ this.props.name }</h2>
        <h3>{ this.props.city }</h3>
        <img src={ this.props.image_url } />
      </div>
    );
  }
});