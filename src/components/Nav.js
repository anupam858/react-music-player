import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ libraryState, setLibraryState }) => {

    const toggleLibraryState = () => {
        setLibraryState(!libraryState);
    };

    return (<nav>
        <div className='brand-name'>
            <img src={process.env.PUBLIC_URL + "logo512.png"} alt='Rythm Logo' />
            <h1>Rythm</h1>
        </div>
        <button onClick={toggleLibraryState}>Library<FontAwesomeIcon icon={faMusic} ></FontAwesomeIcon></button>
    </nav>);
}

export default Nav;