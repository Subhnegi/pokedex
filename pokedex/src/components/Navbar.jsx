// src/components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-xl font-bold">Pokedex</Link>
                <div>
                    <Link to="/trainers" className="text-white hover:text-gray-400 px-3">Trainers</Link>
                    <Link to="/pokemons" className="text-white hover:text-gray-400 px-3">Pokemons</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;