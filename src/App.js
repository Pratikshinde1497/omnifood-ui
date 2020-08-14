import React, {Component} from 'react';
import PostForm from "./components/createpost";
import AllPost from './components/allPosts';

class App extends Component {

  render() {
    return (
      <div>
        <PostForm/>
        <AllPost/>
      </div>
    );
  }
}


export default (App);


