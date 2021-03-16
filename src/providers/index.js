//vendors
import React from 'react';

//providers
import { PostProvider } from './post-context';
import { FirebaseProvider } from './firebase-context';

function AppProviders({ children }) {
  return (
    <FirebaseProvider>
      <PostProvider>{children}</PostProvider>
    </FirebaseProvider>
  );
}

export default AppProviders;
