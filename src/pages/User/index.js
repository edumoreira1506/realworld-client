import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Banner from '../../components/Banner';
import Tabs from '../../components/Tabs';
import Button from '../../components/Button';
import Posts from '../../components/Posts';
import * as Alert from '../../helpers/alert';
import { find, follow, getPosts, getFavoritePosts } from '../../models/User';
import { favorite, hasPosts } from '../../models/Post';
import { useParams } from 'react-router-dom';

import './index.scss';

const User = () => {
  const [ user, setUser ] = useState({});
  const [ posts, setPosts ] = useState([]);
  const [ favoritePosts, setFavoritePosts ] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    find(username, {
      onError: Alert.error,
      onFound: setUser
    });

    getPosts(username, {
      onError: Alert.error,
      onFound: setPosts
    });

    getFavoritePosts(username, {
      onError: Alert.error,
      onFound: setFavoritePosts
    })
  }, [username, user.image, user.username]);

  const followUser = () => {
    follow(user.id, {
      onFollowed: Alert.success,
      onError: Alert.error
    });
  }

  const onFavorite = postId => {
    favorite(postId, {
      onError: Alert.error,
      onFavorited: () => Alert.success('Favorited!')
    })
  }

  const tabs = [
    {
      label: 'Posts',
      children: (
        <Posts posts={posts} onFavorite={onFavorite} />
      )
    },
    {
      label: 'Favorites',
      children: (
        <Posts posts={favoritePosts} onFavorite={onFavorite} />
      )
    }
  ];

  return (
    <div className="User">
      <section className="User__header">
        <Header />
      </section>
      <Banner>
        <Container>
          <div className="User__banner">
            <div className="User__left-area">
              <figure className="User__image-container">
                <img className="User__image" src={user.image} alt={user.username} />
              </figure>
              <h2 className="User__name">
                { user.username }
              </h2>
            </div>
            <p className="User__bio">
              { user.bio || 'Nothing here...' }
            </p>
            <span className="User__follow-button">
              <Button onClick={followUser} type="button">
                Follow +
              </Button>
            </span>
          </div>
        </Container>
      </Banner>
      {
        (hasPosts(posts) || hasPosts(favoritePosts)) && (
          <div className="User__posts">
            <Tabs tabs={tabs} />
          </div>
        )
      }
    </div>
  );
}

export default User;
