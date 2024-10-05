import React,{ useState } from 'react';
import {updatePokemon} from '../api/api';
const EditPokemon = ({ show, onHide, title, children }) => {
    if (!show) {
        return null;
    }
    const [name, setName] = useState(children.Name);
    const [level, setLevel] = useState(children.Level);
    const [hp, setHp] = useState(children.HP);
    const [moves, setMoves] = useState(children.Moves);
    const [types, setTypes] = useState(children.Types);
    const handleUpdate = async () => {
        const pokemon = { name, level, hp, moves, types };
        await updatePokemon(children.ID, pokemon);
        onHide();
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <button className="text-gray-500 hover:text-gray-700" onClick={onHide}>
                        &times;
                    </button>
                </div>
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
                <div className="flex justify-end">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2" onClick={handleUpdate}>
                        Save
                    </button>
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400" onClick={onHide}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditPokemon;