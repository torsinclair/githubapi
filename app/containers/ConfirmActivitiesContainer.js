var React = require('react');
var ConfirmActivities = require('../components/ConfirmActivities');
var helpers = require('../utils/helpers');

var ConfirmActivitiesContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      isLoading: true,
      activitiesInfo: []
    }
  },
  
  componentDidMount: function () {
    var query = this.props.params.searchField;
      helpers.getSearchInfo([query])
        .then(function (activities) {
          this.setState({
            isLoading: false,
            activitiesInfo: [activities[0]]
          })
        }.bind(this))
  },

  render: function () {
    return (
      <ConfirmActivities 
        isLoading={this.state.isLoading}
        activitiesInfo={this.state.activitiesInfo}/>
    )
  }
});

module.exports = ConfirmActivitiesContainer;