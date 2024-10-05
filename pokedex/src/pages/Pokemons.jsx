// src/pages/Pokemons.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getPokemons, deletePokemon } from '../api/api';
import PokemonForm from '../components/PokemonForm';
import EditPokemon from '../components/EditPokemon';
const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        fetchPokemons();
    }, [pokemons]);

    const fetchPokemons = async () => {
        const data = await getPokemons();
        setPokemons(data);
    };

    const handleDelete = async (id) => {
        await deletePokemon(id);
        fetchPokemons();
    };

    const handleEdit = (pokemon) => {
        setSelectedPokemon(pokemon);
        setShowModal(true);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Pokemons</h1>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {pokemons.map((pokemon) => (
                    <motion.div
                        key={pokemon.ID}
                        className="bg-white shadow-md rounded p-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-xl font-bold">{pokemon.Name}</h2>
                        <p>Level: {pokemon.Level}</p>
                        <p>HP: {pokemon.HP}</p>
                        <p>Moves: {pokemon.Moves.join(', ')}</p>
                        <p>Types: {pokemon.Types.join(', ')}</p>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mr-2"
                            onClick={() => handleEdit(pokemon)}
                        >
                            Edit
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                            onClick={() => handleDelete(pokemon.ID)}
                        >
                            Delete
                        </button>
                    </motion.div>
                ))}
            </motion.div>
            <PokemonForm />
            <EditPokemon
                show={showModal}
                onHide={() => setShowModal(false)}
                title="Edit Pokemon"
                children={selectedPokemon}
            />
        </div>
    );
};

export default Pokemons;