import React, { useEffect } from 'react';
import {getData} from '~/api'

const Home = () => {
  useEffect(() => {
    getData()
  }, []);

  return (
    <div>
      <p>首页</p>
    </div>
  );
}

export default Home