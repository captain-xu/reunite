// import React from 'react';

// const Create = () => {

//   return (
//     <div>
//       <p>新增</p>
//     </div>
//   );
// }

// export default Create

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ list: [] });
  const [query, setQuery] = useState('苹果');
  //提供一个状态数组作为useEffect的第二个参数，在该状态发生改变时触发
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:8001/search?query=${query}`,
      );

      setData(result.data);
    };

    fetchData();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <ul>
        {data.list.map(item => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;