//imports
import {useState, useEffect} from 'react'
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome'
import { faBars }            from '@fortawesome/free-solid-svg-icons'
import { faTimes }           from '@fortawesome/free-solid-svg-icons'

const Navbar = ({active}) => {
    //huseStates Hooks
    const [isMobile, setMobile] = useState(typeof window !== "undefined" && window.innerWidth < 650 ? true : false)
    const [showMenu, setShowMenu] = useState(false)

    //useEffects hooks
    useEffect(() => {
        setMobile(window.innerWidth < 650 ? true : false)
    }, [])

    //main render
    return (
        <nav className="w-full md:text-left py-3 md:px-10 px-5 bg-black border-b-2 bg-opacity-50 mb-3 backdrop-blur-sm shadow-lg border-white text-white">
            {isMobile ?
            !showMenu ? 
            <div className='py-1'>
                <FontAwesomeIcon onClick={e => setShowMenu(true)} icon={faBars} width={30}/>
            </div>
            :
            <>
                <FontAwesomeIcon onClick={e => setShowMenu(false)} icon={faTimes} width={30}/>
                <ul>
                    <li className={`py-3 my-3 ${active == 1 ? 'bg-blue-500' : 'bg-gray-800'} rounded-md shadow-md text-center align-middle md:w-44 cssanimation pushReleaseFrom [animation-delay:0.1s]`}><a href="/">HOME</a></li>
                    <li className={`py-3 my-3 ${active == 2 ? 'bg-blue-500' : 'bg-gray-800'} rounded-md shadow-md text-center align-middle md:w-44 cssanimation pushReleaseFrom [animation-delay:0.2s]`}><a href="/terms-of-use">TERMS OF USE</a></li>
                    <li className={`py-3 my-3 ${active == 3 ? 'bg-blue-500' : 'bg-gray-800'} rounded-md shadow-md text-center align-middle md:w-44 cssanimation pushReleaseFrom [animation-delay:0.3s]`}><a href="/contact-us">CONTACT US</a></li>
                    <li className={`py-3 my-3 ${active == 4 ? 'bg-blue-500' : 'bg-gray-800'} rounded-md shadow-md text-center align-middle md:w-44 cssanimation pushReleaseFrom [animation-delay:0.4s]`}><a href="/privacy-policy">PRIVACY POLICY</a></li>
                    <li className={`py-3 my-3 ${active == 5 ? 'bg-blue-500' : 'bg-gray-800'} rounded-md shadow-md text-center align-middle md:w-44 cssanimation pushReleaseFrom [animation-delay:0.5s]`}><a href="/disclaimer">DISCLAIMER</a></li>
                </ul>
            </>
            :
            <ul className='flex'>
                <li className={`py-2 mx-3 px-4 my-2 ${active == 1 ? 'bg-blue-500' : 'bg-gray-800'} rounded-md shadow-md text-center align-middle cssanimation pushReleaseFrom [animation-delay:0.1s]`}><a href="/">HOME</a></li>
                <li className={`py-2 mx-3 px-4 my-2 ${active == 2 ? 'bg-blue-500' : 'bg-gray-800'} rounded-md shadow-md text-center align-middle cssanimation pushReleaseFrom [animation-delay:0.2s]`}><a href="/terms-of-use">TERMS OF USE</a></li>
                <li className={`py-2 mx-3 px-4 my-2 ${active == 3 ? 'bg-blue-500' : 'bg-gray-800'} rounded-md shadow-md text-center align-middle cssanimation pushReleaseFrom [animation-delay:0.3s]`}><a href="/contact-us">CONTACT US</a></li>
                <li className={`py-2 mx-3 px-4 my-2 ${active == 4 ? 'bg-blue-500' : 'bg-gray-800'} rounded-md shadow-md text-center align-middle cssanimation pushReleaseFrom [animation-delay:0.4s]`}><a href="/privacy-policy">PRIVACY POLICY</a></li>
                <li className={`py-2 mx-3 px-4 my-2 ${active == 5 ? 'bg-blue-500' : 'bg-gray-800'} rounded-md shadow-md text-center align-middle cssanimation pushReleaseFrom [animation-delay:0.5s]`}><a href="/disclaimer">DISCLAIMER</a></li>
            </ul>
            }
        </nav>
    )
}

export default Navbar
