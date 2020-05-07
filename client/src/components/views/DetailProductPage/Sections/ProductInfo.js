import React, { useEffect, useState } from 'react';
import { Button, Descriptions } from 'antd';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProductInfo(props) {
  const user = useSelector((state) => state.user);
  const [Product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);

  const addToCarthandler = () => {
    props.addToCart(props.detail._id);
  };

  return (
    <div>
      <Descriptions title='Product Info'>
        <Descriptions.Item label='Price'> {Product.price}</Descriptions.Item>
        <Descriptions.Item label='Sold'>{Product.sold}</Descriptions.Item>
        <Descriptions.Item label='View'> {Product.views}</Descriptions.Item>
        <Descriptions.Item label='Description'>
          {' '}
          {Product.description}
        </Descriptions.Item>
      </Descriptions>

      <br />
      <br />
      <br />
      {user.userData && user.userData.isAuth ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            size='large'
            shape='round'
            type='danger'
            onClick={addToCarthandler}
          >
            Add to Cart
          </Button>
        </div>
      ) : (
        <div style={{ justifyContent: 'center' }}>
          <h3>
            Please <a href='/login'>sign in</a> to add this product to your cart
          </h3>
          <h3>
            Don't have an account? <a href='/register'>sign up!</a>{' '}
          </h3>
        </div>
      )}
    </div>
  );
}

export default ProductInfo;
