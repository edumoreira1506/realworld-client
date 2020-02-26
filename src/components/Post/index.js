import React from 'react';
import Markdown from 'markdown-to-jsx';
import FavoriteButton from '../FavoriteButton';

import './index.scss';

const Post = ({
  title,
  createdAt,
  content,
  favoritesAmount,
  userImage,
  onFavorite
}) => (
  <article className="Post">
    <div className="Post__header">
      <figure className="Post__image-container">
        <img src={userImage} alt={title} className="Post__image" />
      </figure>
      <div className="Post__title-container">
        <h3 className="Post__title">
          { title }
        </h3>
        <h4 className="Post__created-at">
          { createdAt }
        </h4>
      </div>
    </div>
    <div className="Post__content">
      <Markdown>
        { content }
      </Markdown>
    </div>
    <div className="Post__favorites">
      <FavoriteButton
        onClick={onFavorite}
        favoritesAmount={favoritesAmount}
      />
    </div>
  </article>
);

export default Post;
