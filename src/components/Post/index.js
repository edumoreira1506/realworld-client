import React from 'react';
import Markdown from 'markdown-to-jsx';
import FavoriteButton from '../FavoriteButton';
import Link from '../Link';
import { baseUrl } from '../../config/constants';

import './index.scss';

const Post = ({
  title,
  createdAt,
  content,
  favoritesAmount,
  onFavorite,
  user,
  id
}) => (
  <article className="Post">
    <div className="Post__header">
      <figure className="Post__image-container">
        <img src={user.image} alt={title} className="Post__image" />
      </figure>
      <div className="Post__title-container">
        <Link target="_self" to={`${baseUrl}/user/${user.username}`}>
          <h3 className="Post__username">
            { user.username } |
          </h3>
        </Link>
        <h3 className="Post__title">
          { title }
        </h3>
        <h4 className="Post__created-at">
          { createdAt }
        </h4>
      </div>
    </div>
    <Link target="_self" to={`${baseUrl}/post/${id}`}>
      <div className="Post__content">
        <Markdown>
          { content }
        </Markdown>
      </div>
    </Link>
    <div className="Post__favorites">
      <FavoriteButton
        onClick={onFavorite}
        favoritesAmount={favoritesAmount}
      />
    </div>
  </article>
);

export default Post;
