import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { userSlicer} from './redux/user/slicer';
import './App.css';

const mapStateToProps = (state) => {
  return {
    username: userSlicer.getUsername(state),
    birthdate: userSlicer.getBirthdate(state),
  };
};
interface Props extends ReturnType<typeof mapStateToProps> {}
function App(props: Props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          To Do APP:
          How to use types and typescript in development
        </p>
        <p>
          username: {props.username}
        </p>
        <p>
          birthdate: {props.birthdate.toDateString()}
        </p>
      </header>
    </div>
  );
}

export default connect(mapStateToProps)(App);
