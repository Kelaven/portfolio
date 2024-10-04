import Button from "../common/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {


    return (
        <header className="absolute z-10 left-0 w-full px-4 py-10 bg-black text-white lg:flex lg:justify-center">
            <div className="lg:w-11/12 flex justify-between">
                <Button>Kévin Lavenant</Button>
                <Button headerMenuBtn={true}>
                    <span className="flex font-space_grotesk">
                        {/* Menu <FontAwesomeIcon icon={faBars} className="ml-4 w-4" /> */}
                        Menu
                    </span>
                </Button>
            </div>
        </header>
    );
}

export default Header;