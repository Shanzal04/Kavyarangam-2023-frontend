import { useState , useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';

function Home() {
    const [hamburgerOpen , setHamburgerOpen] = useState(false);
    const [isMobile , setISMobile] = useState(false);

    function handleResize(){
        if (window.innerWidth <= 500) {
            setISMobile(true);
        } else {
            setISMobile(false);
            setHamburgerOpen(false);
        }
    }

    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log('usestate called');
        // eslint-disable-next-line no-unused-expressions
        handleResize;
    }, []);
    return (
        <nav>
            <div className='container'>
                { isMobile ? (
                    hamburgerOpen ? (
                        <img/>
                    ):(
                        <img />
                    )
                   
                ) : (
                    
                )}
            </div>
        </nav>
    );
}

export default Home;
