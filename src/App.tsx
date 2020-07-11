import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';


class App extends Component { 

  render() {
    // let firstVal: string = 'Manny';
    // let firstVal: number = 6;
    // let firstVal: boolean = true;
    // let firstVal: boolean = true;
    // let firstVal: number[] = [1,2,3,4];
    // let firstVal: Array<string> = ['Manny', 'Mike', 'Luke'];

    // Tuple
    // let aTuple: [number, string] = [34, 'Mike'];

    //enum
    // enum Codes {first = 1, second=2};

    //Any
    // let firstName: any = 34;
    // Note: It is not a good idea to use typeScript

    // Function return
    // const warning = (): void => {
    //   console.log('Warning!');
    // }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message />
        </header>
      </div>
    );
  }

}

export default App;
