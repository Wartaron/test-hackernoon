//vendors
import React from 'react';

//components
import Header from '../../components/header/header';
import SubHeader from '../../components/sub-header/sub-header';

//styles
import './app.scss';

export class App extends React.Component {
  render() {
    return (
      <>
        <div className="header-layout">
          <Header />
          <SubHeader />
        </div>
      </>
    );
  }
}

export default App;
