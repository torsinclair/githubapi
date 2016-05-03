var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}


function ConfirmActivities (props) {
  return props.isLoading === true
    ? <p> loading </p>
    : <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <h1>Activities</h1>
        <div className='col-sm-12'>
          <div className='col-sm-2'>
            <p className='lead'>filter goes here</p>
            {puke(props.activitiesInfo[0])}
          </div>

          <div className='col-sm-6 col-sm-offset-1'>
            <p className='lead'>activities sub heading</p>
            {puke(props.activitiesInfo[0])}
          </div>
          <div className='col-sm-2 col-sm-offset-1'>
            <p className='lead'>plan builder</p>
            {puke(props.activitiesInfo[0])}
          </div>
        </div>
      </div>
};


module.exports = ConfirmActivities;