import React from 'react';
import f1 from './f1.png';
import f2 from './f2.png';
import f3 from './f3.png';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div style={{ margin: '40px' }}>
      <h1>About Khudkaar</h1>
      <div className='Intro'>
        <p>
          {' '}
          Khud Kaar is a social enterprise working to create employment
          opportunities for un-employed and lift them up from scratch. It is
          committed to get them access to market and help them in setting their
          businesses. It is specifically designed to help unemployed women and
          the hostelite students. Its aim is to enable women to sell their
          home-made products such as hygienic food, beautiful art work and
          amazing handicrafts, and to allow students to get all these products
          at affordable prices.
        </p>{' '}
        <p> Khud Kaar servers its customers and users as follows:</p>
        <p>
          • Saves time for students as they do not need to go out and visit
          different shops or different markets to get the products they need.{' '}
        </p>{' '}
        <p> • Provides products at cheaper rates than market.</p>{' '}
        <p>
          • Provides hygienic, fresh and hot food in an era where you don’t get
          it easily.
        </p>{' '}
        <p>
          • Cash on delivery makes sure that you are not being scammed and you
          get the right product (the one which you ordered).
        </p>{' '}
        <p>
          • The training video lectures allow a lot of jobless people to get
          hand on new skills.
        </p>{' '}
        <p>
          • Success stories are here to motivate you to do new things or the
          current things in a better way.
        </p>{' '}
        <p>
          • Provides a safe and secure platform to women to sell their products
          and earn a reasonable amount.
        </p>
      </div>
      <br />
      <br />
      <h1>Our Founders:</h1>
      <div className='row'>
        <div className='column'>
          <img src={f1} alt='Wardah Noor' style={{ width: '100%' }} />
        </div>
        <div className='column'>
          <img src={f2} alt='Irfan Ahmed' style={{ width: '100%' }} />
        </div>
        <div className='column'>
          <img src={f3} alt='Hira Ibrahim' style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
