import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ libraryState, setLibraryState }) => {

    const toggleLibraryState = () => {
        setLibraryState(!libraryState);
    };

    return (<nav>
        <h1>Rythm</h1>
        <button onClick={toggleLibraryState}>Library<FontAwesomeIcon icon={faMusic} ></FontAwesomeIcon></button>
    </nav>);
}

export default Nav;