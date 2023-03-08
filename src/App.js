import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";

import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const url = "http://localhost:8080/api/customers";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //coba disini
    const getData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
        setError(null);
      }
      catch (error) {
        setError(error.message);
        setData(null);
      }
      finally {
        setLoading(false);
      }
    }
    getData();
  }, [])
  return (
    <div className='App'>
      <Navbar/>
      <div className='container'>
        <h1>Data Customer PT. Ngokngok</h1>
        {loading && <div>Wait a moment please ...</div>}
        {error && <div>{`Error. Reason: ${error}`}</div>}

        <div className='card-container'>
          {data && data.map((c) => {
            return (
              <Card id={c.id} nama={c.nama} alamat={c.alamat} email={c.email} telepon={c.telepon}/>
            )
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
