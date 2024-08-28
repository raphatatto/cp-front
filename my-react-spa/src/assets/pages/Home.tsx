import React from 'react';
import SomeComponent from '/Users/rapha/teste cp/my-react-spa/src/components/SomeComponent';

const Home: React.FC = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <SomeComponent message="Welcome to the home page!" />
    </div>
  );
};

export default Home;
