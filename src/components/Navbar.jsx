import './styles/Navbar.css';

function Navbar() {
    return (
        <div className='nav'>
            <div className='title-container'>
                NGOKNGOK
            </div>
            <ul className='menu-container'>
                <a href="#"><li className='menu-list'>HOME</li></a>
                <a href="#"><li className='menu-list'>ABOUT</li></a>
                <a href="#"><li className='menu-list'>CONTACT</li></a>
            </ul>
        </div>
    );
}
export default Navbar;