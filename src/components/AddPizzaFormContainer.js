import * as React from 'react'
import AddPizzaForm from './AddPizzaForm'
import { connect } from 'react-redux'

class AddPizzaFormContainer extends React.Component {
  addPizza = (pizza) => {
    this.props.dispatch({
      type: 'ADD_PIZZA',
      payload: {
        id: Math.ceil(Math.random()*10000),
        ...pizza
      }
    })
  }

  render() {
    return <AddPizzaForm addPizza={this.addPizza} />
  }

  
}
const mapStateToProps = (state) => {
    // if(state !== null ){
    //     return {pizza: state.pizzas.map((pizza)=>{
    //         return pizza
    //     })
    // }}
    return {pizza: state} 
}

export default connect(mapStateToProps)(AddPizzaFormContainer)