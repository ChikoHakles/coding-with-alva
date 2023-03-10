import './styles/Navbar.css';

function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div className='title-container'>
                    NGOKNGOK
                </div>
                <ul className='menu-container'>
                    <a href="#"><li className='menu-list'>HOME</li></a>
                    <a href="#"><li className='menu-list'>ABOUT</li></a>
                    <a href="#"><li className='menu-list'>CONTACT</li></a>
                </ul>
            </div>
            <div style={{
                width : "100vw",
                height : "100vh",
                position: "fixed",
                backgroundImage : "url('https://pbs.twimg.com/profile_images/1363503631312453633/8tDNJiBX_400x400.jpg')",
                backgroundRepeat: "no-repeat",
                objectFit : "cover",
                backgroundSize: "cover",
                top: "0px"
            }}>

            </div>
        </>
    );
}
export default Navbar;