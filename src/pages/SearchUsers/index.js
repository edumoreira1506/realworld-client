import React, { useState } from 'react';
import Header from '../../components/Header';
import Form from '../../components/Form';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Link from '../../components/Link';
import { search } from '../../models/User';
import { baseUrl } from '../../config/constants';

import './index.scss';
import '../User/index.scss';

const SearchUsers = () => {
  const [ keyWord, setKeyWord ] = useState('');
  const [ users, setUsers ] = useState([]);

  const onSearch = e => {
    e.preventDefault();

    search(keyWord, {
      onFound: setUsers
    });
  }

  const inputs = [
    {
      type: 'text',
      onChange: e => setKeyWord(e.target.value),
      required: true,
      placeholder: 'Search...',
      value: keyWord
    }
  ];

  return (
    <div className="SearchUsers">
      <section className="SearchUsers__header">
        <Header />
      </section>
      <div className="SearchUsers__form">
        <Form
          onSubmit={onSearch}
          buttonText="Search"
          inputs={inputs}
        />
      </div>
      <ul className="SearchUsers__users">
        {
          users.map(user =>
            <li className="SearchUsers__user">
              <Link to={`${baseUrl}/user/${user.username}`} key={user.id} target='_self'>
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
                    </div>
                  </Container>
                </Banner>
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default SearchUsers
