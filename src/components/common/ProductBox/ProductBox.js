import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  image,
  category,
  addToFavorites,
  removeFromFavorites,
  id,
  favorites,
  addToCompare,
  compare,
  compareActive,
  addActiveClass,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img src={image} alt='lux bed' />
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#'>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button
          className={favorites ? styles.favorites : styles.outlines}
          onClick={e => {
            e.preventDefault();
            favorites ? removeFromFavorites({ id }) : addToFavorites({ id });
          }}
          variant='outline'
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button
          className={compareActive ? styles.active : styles.outlines}
          variant='outline'
          onClick={e => {
            e.preventDefault();
            if (compare.length < 4 && compareActive === false) {
              addActiveClass({ id });
              addToCompare({ id, name, category, price, image, stars });
            }
          }}
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.priceWraper}>
        <div>
          {promo === 'sale' && <div className={styles.oldPrice}>$ {price} </div>}
        </div>
        <div className={styles.price}>$ {price}</div>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.node,
  favorites: PropTypes.bool,
  addToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
  id: PropTypes.string,
  addToCompare: PropTypes.func,
  compare: PropTypes.array,
  compareActive: PropTypes.bool,
  addActiveClass: PropTypes.func,
  category: PropTypes.string,
};

export default ProductBox;
