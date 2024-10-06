// src/components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-4 px-16">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-xl font-bold"><img src="/logo.png" alt="logo" className='h-12'/></Link>
                <div>
                    <Link to="/trainers" className="text-white hover:text-gray-400 px-3">Trainers</Link>
                    <Link to="/pokemons" className="text-white hover:text-gray-400 px-3">Pokemons</Link>
                    <Link to="/create-pokemon" className="text-white hover:text-gray-400 px-3">Create Pokemon</Link>
                    <Link to="/create-trainer" className="text-white hover:text-gray-400 px-3">Create Trainer</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;