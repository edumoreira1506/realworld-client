import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import { find } from '../../models/Post';
import * as Alert from '../../helpers/alert';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Link from '../../components/Link';
import { baseUrl } from '../../config/constants';
import Markdown from 'markdown-to-jsx';

import './index.scss';

const PostPage = () => {
  const [ post, setPost ] = useState({ user: {}, content: '' });
  const { postId } = useParams();

  useEffect(() => {
    find(postId, {
      onFound: setPost,
      onError: Alert.error
    })
  }, [postId])

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
      </Container>
    </div>
  );
}

export default PostPage;
