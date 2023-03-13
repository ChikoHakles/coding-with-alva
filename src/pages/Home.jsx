import './styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-container'>
            <h1>INI ADALAH HOME NYA</h1>
            <Link className='to-customers' to="/customers">Ke Halaman Customers!</Link>
        </div>
    );
}
export default Home;