//vendors
import React, { useState } from 'react';
import firebase from 'firebase/app';

const FirebaseContext = React.createContext(null);

//config
import { firebaseConfig } from '../../firebaseConfig';

const FirebaseProvider = ({ children }) => {
  !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
  let database = firebase.database();

  const [queryInfo, setQueryInfo] = useState(null);

  function getInfoFromDatabase(ref) {
    database
      .ref(ref)
      .once('value')
      .then((snapshot) => {
        setQueryInfo(snapshot.val());
      });
  }

  return (
    <FirebaseContext.Provider value={{ getInfoFromDatabase, queryInfo }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };
