//vendors
import React, { useContext, useEffect } from 'react';

//context
import { PostContext } from '../../providers/post-context';
import { FirebaseContext } from '../../providers/firebase-context';

//components
import { InjectedHTML } from '../injected-html/injected-html';
import { EmojisComponent } from '../emojis-component/emojis-component';

//assets
import { ReactComponent as StarIcon } from '../../assets/img/star.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/img/bookmark.svg';

//styles
import './post.scss';

export const Post = () => {
  const {
    handleRetriviengPost,
    isLoading,
    mainImage,
    markup,
    postData,
    profile,
    publishedAt,
    reactions,
    title,
  } = useContext(PostContext);
  const { getInfoFromDatabase, queryInfo } = useContext(FirebaseContext);

  useEffect(() => {
    if (!isLoading && !!postData) {
      document.title = postData.title;
    }
  }, [postData]);

  useEffect(() => {
    !queryInfo &&
      getInfoFromDatabase(
        'step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd'
      ); //Depend on the post
  }, [queryInfo]);

  useEffect(() => {
    handleRetriviengPost(queryInfo);
  }, [queryInfo]);

  return (
    <main className="post">
      {!isLoading ? (
        <>
          <div className="post__container">
            <h1 className="post__title">{title}</h1>
            <div className="post__story-meta">
              <div>
                <a className="date">{publishedAt}</a>
                <span className="stat">
                  <StarIcon /> 703 reads
                </span>
                <BookmarkIcon />
              </div>
              <EmojisComponent reactions={reactions} />
            </div>
            <div className="post__image">
              <img src={mainImage} />
            </div>
            <div className="post__profile">
              <a href="#">
                <img
                  src={profile?.avatar}
                  alt="Author profile picture"
                  width="50"
                  height="50"
                />
              </a>
              <div>
                <h3>
                  <a href="#">@{profile?.handle}</a>
                  <small>{profile?.displayName}</small>
                </h3>
                <p dangerouslySetInnerHTML={{ __html: profile.bio }}></p>
                <div className="social-links">
                  <a
                    href={`https://twitter.com/${profile?.twitter}`}
                    target="_blank"
                  >
                    <img
                      src="https://hackernoon.com/social-icons/twitter-new.png"
                      alt="Twitter social icon"
                      width="20"
                      height="20"
                    />
                  </a>
                  <a
                    href={`https://github.com/${profile?.github}`}
                    target="_blank"
                  >
                    <img
                      src="https://hackernoon.com/social-icons/github-new.png"
                      alt="github social icon"
                      width="20"
                      height="20"
                    />
                  </a>
                </div>
              </div>
            </div>
            <InjectedHTML markup={markup} />
            <div className="post__bottom-reactions">
              <EmojisComponent reactions={reactions} />
            </div>
          </div>
        </>
      ) : null}
    </main>
  );
};

export default Post;
