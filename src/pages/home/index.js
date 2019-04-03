import React, { useState, useEffect } from 'react';

const Home = () => {
  const getTitle = () => {
    return '首页'
  }

  const [title, setTitle] = useState(getTitle);

  useEffect(() => {
    console.log('re-render')
  }, [title]);

  return (
    <div>
      <p>{title}</p>
      <button onClick={() => setTitle('首页')}>设置为首页</button>
      <button onClick={() => setTitle('详情')}>设置为详情</button>
    </div>
  );
}

export default Home