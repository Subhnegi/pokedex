// src/pages/Pokemons.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getPokemons, deletePokemon } from '../api/api';
import PokemonForm from '../components/PokemonForm';
import EditPokemon from '../components/EditPokemon';
import PokemonCard from '../components/PokemonCard';
const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        fetchPokemons();
    }, []);

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
            <h1 className="text-4xl font-bold text-center p-4 text-gray-800">Pokemons</h1>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {pokemons.map((pokemon) => (
                    <PokemonCard 
                    pokemon={pokemon} 
                    key={pokemon.ID}
                    handleEdit={() => handleEdit(pokemon)}
                    handleDelete={() => handleDelete(pokemon.ID)}
                    />
                ))}
            </motion.div>
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