import React, { omponent} from 'react';
import {connect} from 'react-redux';

class Post extends Component {
  render() {
    return (
      <div>
        {console.log('test')}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state
  }
};

export default Post;
