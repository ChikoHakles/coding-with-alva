import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles/Customer.css';

const Details = ({data}) => {
    return (
        <div className='detail-container'>
            <h3>{data.nama}</h3>
            <h5>{data.alamat}</h5>
            <h5>{data.email}</h5>
            <h5>{data.telepon}</h5>
        </div>
    )
}

const Customer = () => {
    const {id} = useParams();
    const url = `http://localhost:8080/api/customers/${id}`;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            axios.get(url)
            .catch((error) => {
                setError(error);
            })
            .then((res) => {
                // console.log(res.data);
                setData(res.data);
                setError(false);
            })
            .finally(() => {
                setLoading(false);
            });
        }
        getData();
    }, []);

    useEffect(()=>{
        // console.log(data);
    }, [data])
    return (
        <>
            <h1>HALAMAN DETAIL CUSTOMER</h1>
            {loading && <p>Wait a moment please ...</p>}
            {error && <p>{`Reason: ${error}`}</p>}

            <Details data={data}/>
        </>
    )
}
export default Customer;