import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";
// const PageOne = () => {
//   return (
//     <div>
//       PageOne
//       <Link to="/pagetwo">Naviagate to page two</Link>
//     </div>
//   );
// };

// const PageTwo = () => {
//   return (
//     <div>
//       PageTwo
//       <button>Click Me!</button>
//       <Link to="/">Naviagate to page one</Link>
//     </div>
//   );
// };

// const PageTwo = () => {
//   return (
//     <div>
//       PageTwo BAAAD!!!
//       PageOne BAAAD!!!
//       // the browser will think you are visint
//       // new page and dump all the data it has
//       // it would need to refetch everything
//       // don't use anchor tags!
//       <button>Click Me!</button>
//       <a href="/">Naviagate to page one</a>
//     </div>
//   );
// };

// use the switch to only show one path instead of multiple matching paths
// streams/new and streams/:id will both match normally now with switch
// new will render but not the id but not the streams/new
const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
