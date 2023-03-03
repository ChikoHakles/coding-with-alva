import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";

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
      <h1>Data Customer PT. Ngokngok</h1>
      {loading && <div>Wait a moment please ...</div>}
      {error && <div>{`Error. Reason: ${error}`}</div>}

      <div className='container card-container'>
        {data && data.map((c) => {
          return (
            <div className='card' key={c.id.toString()}>
              <h3>{c.nama}</h3>
              <h5>{c.alamat}</h5>
              <h5>{c.email}</h5>
              <h5>{c.telepon}</h5>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
