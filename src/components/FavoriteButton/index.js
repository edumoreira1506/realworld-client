import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FavoriteButton = ({
  onClick,
  favoritesAmount
}) => (
  <Button onClick={onClick}>
    <Icon icon={faHeart} />
    { favoritesAmount }
  </Button>
);

export default FavoriteButton;
