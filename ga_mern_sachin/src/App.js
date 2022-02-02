import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Home from './component/home'
import Users from './component/Users'
import UserShow from './component/UserShow'
import Posts from './component/Posts'
import PostsShow from './component/PostsShow'


function App() {
  return (
    <BrowserRouter>
      <div>
          <Link to="/">Home</Link> <br/>
          <Link to="/users">Users</Link>  <br/>
          <Link to="/posts">Posts</Link>

          <Route path="/" component={Home} exact={true}/>
          <Route path="/users" component={Users} exact={true}/>
          <Route path="/users/:id" component={UserShow} />
          <Route path="/posts" component={Posts} exact={true}/>
          <Route path="/posts/:id" component={PostsShow} />
      </div>
    </BrowserRouter>
  );
}

export default App;
 