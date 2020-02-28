import React from 'react';
import Comment from '../Comment';

import './index.scss';

const Comments = ({ comments }) => (
  <div className="Comments">
    {
      comments.map(comment =>
        <Comment
          key={comment}
          content={comment.content}
          createdAt={comment.createdAt}
          user={comment.user}
        />
      )
    }
  </div>
);

export default Comments;
