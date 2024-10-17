import Button from "../../common/Button";

const Header = () => {


    return (
        <header className="fixed mobile-landscape:absolute z-20 left-0 w-full px-4 py-10 text-white lg:flex lg:justify-center">
            <div className="lg:w-11/12 flex justify-between">
                <Button>Kévin Lavenant</Button>
                <Button headerMenuBtn={true}>
                    Menu
                </Button>
            </div>
        </header>
    );
}

export default Header;