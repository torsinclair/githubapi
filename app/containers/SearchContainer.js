var React = require('react');
var Prompt = require('../components/Prompt');

var SearchContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      searchField: ''
    }
  },
  handleUpdateSearchField: function (e) {
    this.setState({
      searchField: e.target.value
    })
  },
  handleSubmitSearchField: function (e) {
    e.preventDefault();
    var searchfield = this.state.searchField;
    this.setState({
      searchField: ''
    });
    // whatever gets typed into the search field = contet
    // header={this.props.route.header}
    console.log(this.context);
    this.context.router.push(
      '/activities/' + this.state.searchField);
  },
  render: function () {
    return (
      <Prompt 
        onSubmitSearchField={this.handleSubmitSearchField}
        onUpdateSearchField={this.handleUpdateSearchField}
        header={this.props.route.header}
        searchField={this.state.searchField} />
    )
  }
});

module.exports = SearchContainer;