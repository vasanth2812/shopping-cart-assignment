/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = React.memo((data) => {
  const {name, imageURL, sku, description, price} = data;
  return (
    <div className="product-wrap">
      <div className="product-header-wrapper">
        <h4>{name}</h4>
      </div>
      <div className="product-detail-wrap">
        <img
          src={require(`../../../static/images/products/${imageURL}`).default}
          alt={sku}
        />
        <div className="product-description">
          <p>{description}</p>
        </div>
        <div className="product-price-wrap">
          <div className="product-price">
            <span>MRP RS.{price}</span>
          </div>
          <div className="product-buy-out">
            <button type="button" disabled>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;