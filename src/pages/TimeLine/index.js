import React, { useState, useEffect } from 'react';
import Container from '../../components/Container';
import Form from '../../components/Form';
import * as Post from '../../models/Post';
import * as Alert from '../../helpers/alert';
import * as User from '../../models/User';
import Posts from '../../components/Posts';
import { formatFromArray } from '../../helpers/time';

import './index.scss';

const TimeLine = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [timeLinePosts, setTimeLinePosts] = useState([]);

  useEffect(() => {
    User.getTimeLine({
      onFound: originalPosts => {
        const posts = formatFromArray(originalPosts);

        setTimeLinePosts(posts);
      },
      onError: Alert.error
    })
  }, [])

  const onFavorite = postId => {
    Post.favorite(postId, {
      onError: Alert.error,
      onFavorited: () => Alert.success('Favorited!')
    })
  }

  const onSubmit = e => {
    e.preventDefault();

    const post = { content, title };

    Post.register(post, {
      onRegistered: () => {
        setContent('');
        setTitle('');

        Alert.success('Posted');
      },
      onError: Alert.error
    });
  }

  const textAreas = [
    {
      onChange: e => setContent(e.target.value),
      required: true,
      placeholder: 'Type what you want...',
      value: content
    }
  ];

  const inputs = [
    {
      type: 'text',
      onChange: e => setTitle(e.target.value),
      required: true,
      placeholder: 'Title',
      value: title
    },
  ];

  return (
    <section className="TimeLine">
      <Container>
        <div className="TimeLine__post-area">
          <Form
            onSubmit={onSubmit}
            buttonText="Post!"
            textAreas={textAreas}
            inputs={inputs}
          />
        </div>
        <div className="TimeLine__posts">
          <Posts posts={timeLinePosts} onFavorite={onFavorite} />
        </div>
      </Container>
    </section>
  );
}

export default TimeLine;
