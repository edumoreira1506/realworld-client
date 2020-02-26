import React from 'react';
import Post from '../Post';

import './index.scss';

const Posts = ({ posts, onFavorite }) => (
  <div className="Posts">
    {
      posts.map(post =>
        <Post
          key={post._id}
          title={post.title}
          content={post.content}
          favoritesAmount={post.favorites.length}
          createdAt={post.createdAt}
          userImage={post.userImage}
          onFavorite={() => onFavorite(post._id)}
        />
      )
    }
  </div>
);

export default Posts;
