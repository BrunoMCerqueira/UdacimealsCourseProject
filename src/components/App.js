import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions';

class App extends Component {
  doThing = () => {
    //this.props.dispatch(addRecipe({}))
    this.props.selectRecipe({})
  }
  render() {
    return (
      <div>
        Hello World 
      </div>
    )
  }
}

function mapStateToProps(calendar) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  
  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal] ? calendar[day][meal] : null
        return meals
      }, {})
    }))
  }
}

function mapDispatchtoProps (dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data)),
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(App);
