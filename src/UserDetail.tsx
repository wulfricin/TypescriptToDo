import React from 'react';
import { connect } from 'react-redux';
import { userSlicer } from './redux/user/slicer';
import { getUserById } from './redux/user/action';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    username: userSlicer.getUsername(state),
    email: userSlicer.getUserEmail(state),
  };
};
const mapActionsToDispatch = (dispatch) => {
  return bindActionCreators({ getUserById }, dispatch);
};
interface Props extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapActionsToDispatch> {}

class UserDetail extends React.Component<Props> {

  componentWillMount() {
    this.props.getUserById('5edcfb0fa3a4742e7b1fb23c');
  }
  render() {
    return (
      <div>
        user: {this.props.username}
        email: {this.props.email}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapActionsToDispatch)(UserDetail);
