//vendors
import React, { useState } from 'react';
import firebase from 'firebase';

const PostContext = React.createContext(null);

//context
import { getStorageFromFirebase } from './firebase-context';

// const FETCH_URL =

const PostProvider = ({ children }) => {
  const [postData, setPostData] = useState(null);
  const [title, setTitle] = useState('');
  const [publishedAt, setPublishedAt] = useState(0);
  const [mainImage, setMainImage] = useState('');
  const [reactions, setReactions] = useState({});
  const [markup, setMarkup] = useState('');
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  function handleRetriviengPost(post) {
    setIsLoading(true);
    try {
      setPostData(post);

      setTitle(post.title);
      setReactions(post.reactions);
      setPublishedAt(post.publishedAt);
      setMainImage(post.mainImage);
      setMarkup(post.markup);
      setProfile(post.profile);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <PostContext.Provider
      value={{
        handleRetriviengPost,
        isLoading,
        mainImage,
        markup,
        postData,
        profile,
        publishedAt,
        reactions,
        setPostData,
        title,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
