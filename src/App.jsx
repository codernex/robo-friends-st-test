import React, { useEffect, useState } from 'react';
import './app.scss';
import Friends from './components/Friends';
import Search from './components/Search';
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className='app'>
      <h1>Robo Friends</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className='friends'>
        {filteredData.map((item, i) => {
          return <Friends key={i} friend={item} />;
        })}
      </div>
    </div>
  );
};

export default App;
