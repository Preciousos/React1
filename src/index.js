import React, {Component} from './lib/react';
import ReactDom from './lib/react-dom';


function Menu(props) {
  return <h1> menu {props.title}</h1>;
}


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'jirengu'
    }
  }

  handleClick() {
    this.setState({
      title:'cjw'
    })
  }

  render() {
    return (
      <div>
        <h1>{ this.state.title }</h1>
        <p>{ this.props.id }</p>
        <span onClick = {this.handleClick.bind(this)}>hello</span>
      </div>
    );
  }
}

ReactDom.render((
  <App id = "app">hello</App>
),document.body);



















// function clickMe() {
//   console.log('click Me');
// }

// let styleObj = {
//   color: 'blue',
//   fontSize: '20px'
// }

// let div = (<h1 className = "hello" onclick = { clickMe } style = {styleObj}>
//   <span>hello</span>
//   <span>world</span>
// </h1>);

// console.log(div);

// ReactDom.render(div, document.body);


