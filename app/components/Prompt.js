var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

// functional stateless components
// benefit of this is your presentational components can just be functions
function Prompt (props) {
  return (
    <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
      <h1>{props.header}</h1>
      <div className='col-sm-12'>
        <form onSubmit={props.onSubmitSearchField}>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='search...'
              onChange={props.onUpdateSearchField}
              value={props.searchField}
              type='text' />
          </div>
          <div className='form-group col-sm-offset-4'>
            <button
              className='btn btn-sm btn-search btn-pill btn-success'
              type='submit'>
                go find!
            </button>
            <button
              className='btn btn-sm btn-search btn-pill btn-info'>
                feeling lucky
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    onUpdateSearchField: PropTypes.func.isRequired,
    onSubmitSearchField: PropTypes.func.isRequired,
    searchField: PropTypes.string.isRequired
}

module.exports = Prompt;