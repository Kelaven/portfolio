import Button from "../common/Button";

const Header = () => {
    return (
        <header className="absolute w-full px-4 py-10 bg-black text-white lg:flex lg:justify-center">
            <div className="lg:w-11/12 flex justify-between">
                <Button>Kévin Lavenant</Button>
                <Button>Menu</Button>
            </div>
        </header>
    );
}

export default Header;