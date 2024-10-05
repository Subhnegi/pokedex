import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { createPokemon } from '../api/api';
const PokemonForm = ({ pokemon, onSubmit }) => {
    const [name, setName] = useState('');
    const [level, setLevel] = useState(0);
    const [hp, setHp] = useState(0);
    const [moves, setMoves] = useState([]);
    const [types, setTypes] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { name, level, hp, moves, types };
        await createPokemon(payload);
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
        <h1 className='text-3xl font-bold mb-4 text-center'>Create Pokemon</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="level">
                    Level
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="level"
                    type="number"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hp">
                    HP
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="hp"
                    type="number"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="moves">
                    Moves
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="moves"
                    type="text"
                    value={moves.join(',')}
                    onChange={(e) => setMoves(e.target.value.split(','))}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="types">
                    Types
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="types"
                    type="text"
                    value={types.join(',')}
                    onChange={(e) => setTypes(e.target.value.split(','))}
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </motion.form>
    );
};

export default PokemonForm;