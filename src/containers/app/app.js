//vendors
import React from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';

//components
import Header from '../../components/header/header';
import SubHeader from '../../components/sub-header/sub-header';
import NotFound404 from '../../components/not-found-404/not-found-404';
import Post from '../../components/post/post';
import Initial from '../../components/initial/initial';

//styles
import './app.scss';

export const App = () => {
  return (
    <>
      <div className="header-layout">
        <Header />
        <SubHeader />
      </div>
      <Switch>
        <Route exact path="/" component={Initial}></Route>
        <Route
          exact
          path="/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd"
          component={Post}
        />
        <Route path="/404" component={NotFound404} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
};

export default withRouter(App);
