import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import * as Post from '../../models/Post';
import * as Alert from '../../helpers/alert';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Link from '../../components/Link';
import Comments from '../../components/Comments';
import Form from '../../components/Form';
import { baseUrl } from '../../config/constants';
import Markdown from 'markdown-to-jsx';
import { getUsername, getImage } from '../../models/User';
import { format } from '../../helpers/time';

import './index.scss';

const PostPage = () => {
  const [ post, setPost ] = useState({ user: {}, content: '' });
  const [ comments, setComments ] = useState([]);
  const [ comment, setComment ] = useState('');
  const { postId } = useParams();

  useEffect(() => {
    Post.find(postId, {
      onFound: setPost,
      onError: Alert.error
    });

    Post.findComments(postId, {
      onFound: setComments,
      onError: Alert.error
    });
  }, [postId]);

  const onComment = e => {
    e.preventDefault();

    Post.comment(postId, comment, {
      onCommented: () => {
        setComments(prevComments => [{
          content: comment,
          createdAt: format(),
          user: {
            username: getUsername(),
            image: getImage()
          }
        }, ...prevComments]);

        setComment('');
      },
      onError: Alert.error
    });
  }

  const textAreas = [
    {
      onChange: e => setComment(e.target.value),
      required: true,
      placeholder: 'Comment here',
      value: comment
    }
  ];

  return (
    <div className="PostPage">
      <section className="PostPage__header">
        <Header />
      </section>
      <Banner>
        <Container>
          <div className="PostPage__banner">
            <h2 className="PostPage__title">
              { post.title }
            </h2>
            <div className="PostPage__details">
              <figure className="PostPage__image-container">
                <img src={post.user.image} alt={post.user.username} className="PostPage__image" />
              </figure>
              <Link target="_self" to={`${baseUrl}/user/${post.user.username}`}>
                <div className="PostPage__user-link">
                  <h2 className="PostPage__username">
                    { post.user.username }
                  </h2>
                  <h3 className="PostPage__created-at">
                    { post.createdAt }
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </Banner>
      <Container>
        <article className="PostPage__content">
          <Markdown>
            { post.content }
          </Markdown>
        </article>
        <section className="PostPage__comments-area">
          <div className="PostPage__comment-form">
            <Form
              onSubmit={onComment}
              buttonText="Comment"
              textAreas={textAreas}
            />
          </div>
          <div className="PostPage__comments">
            <Comments
              comments={comments}
            />
          </div>
        </section>
      </Container>
    </div>
  );
}

export default PostPage;
