import React, {Component} from "react"

class ClassCounter extends Component {
   constructor(props) {
      super(props)
      this.state = {
         count: 0,
         name: 'Click Me'
      }
   }
   
   /* after render. */
   componentDidMount() {
      document.title = `you mounted ${this.state.count} times`
   }
   
   /* setiap dom update */
   componentDidUpdate(prevProps, prevState) {
      if(prevState.count != this.state.count) {
         document.title = `you updated ${this.state.count} times`
         console.log('updated components')
      }
   }

   incrementCount = () => {
      /* this.setState({
         count: this.state.count + 1
      }) */

      // get prevState values
      this.setState(prevState => {
         return {
            count: prevState.count + 1
         }
      })
   }

   render() {
      return (
         <div>
            <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
            <p>You clicked {this.state.count} times</p>
            <button onClick={this.incrementCount}>
               {this.state.name}
            </button>
         </div>
      )
   }
}

export default ClassCounter