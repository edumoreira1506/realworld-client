import React from 'react';
import Markdown from 'markdown-to-jsx';
import Link from '../Link';
import { baseUrl } from '../../config/constants';

import './index.scss';

const Comment = ({
  content,
  createdAt,
  user
}) => (
  <div className="Comment">
    <div className="Comment__content">
      <Markdown>
        { content }
      </Markdown>
    </div>
    <div className="Comment__footer">
      <figure className="Comment__image-container">
        <img
         src={user.image}
         alt={user.username}
         className="Comment__image"
        />
      </figure>
      <Link to={`${baseUrl}/user/${user.username}`} target="_self">
        <h3 className="Comment__username">
          { user.username }
        </h3>
      </Link>
      <h3 className="Comment__created-at">
        { createdAt }
      </h3>
    </div>
  </div>
);

export default Comment;
