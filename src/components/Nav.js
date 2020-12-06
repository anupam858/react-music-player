import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ libraryState, setLibraryState }) => {

    const toggleLibraryState = () => {
        setLibraryState(!libraryState);
    };

    return (<nav>
        <div className='brand-name'>
            <img src={process.env.PUBLIC_URL + "logo512.png"} alt='Rythm Logo' />
            <h2>Rythm</h2>
        </div>
        <button onClick={toggleLibraryState} className={`${libraryState ? 'elevate' : ''}`}>{`${!libraryState ? "Library" : "Close"}`}<FontAwesomeIcon icon={faMusic} ></FontAwesomeIcon></button>
    </nav>);
}

export default Nav;