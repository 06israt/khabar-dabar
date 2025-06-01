import React, { useState } from 'react'
import './Home.css'
import Header from './../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/exploreMenu';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <div className=''>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <foodDisplay catagory={category}></foodDisplay>
    </div>
  );
};


export default Home
