// src/api/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getTrainers = async () => {
    const response = await axios.get(`${API_URL}/trainers`);
    return response.data;
};

export const getTrainer = async (id) => {
    const response = await axios.get(`${API_URL}/trainers/${id}`);
    return response.data;
};

export const createTrainer = async (trainer) => {
    const response = await axios.post(`${API_URL}/trainers`,{
        "name": trainer.name,
        "money": Number(trainer.money),
        "badges": trainer.badges
    });
    return response.data;
};

export const updateTrainer = async (id, trainer) => {
    const response = await axios.put(`${API_URL}/trainers/${id}`,{
        "name": trainer.name,
        "money": Number(trainer.money),
        "badges": trainer.badges
    });
    return response.data;
};

export const deleteTrainer = async (id) => {
    const response = await axios.delete(`${API_URL}/trainers/${id}`);
    return response.data;
};

export const getPokemons = async () => {
    const response = await axios.get(`${API_URL}/pokemons`);
    return response.data;
};

export const getPokemon = async (id) => {
    const response = await axios.get(`${API_URL}/pokemons/${id}`);
    return response.data;
};

export const createPokemon = async (pokemon) => {
    const { name,level, hp, moves, types } = pokemon;
    const response = await axios.post(`${API_URL}/pokemons`, { name, "level":Number(level), "hp":Number(hp), moves, types });
    return response.data;
};

export const updatePokemon = async (id, pokemon) => {
    const { name,level, hp, moves, types } = pokemon;
    const response = await axios.put(`${API_URL}/pokemons/${id}`, { name, "level":Number(level), "hp":Number(hp), moves, types });
    return response.data;
};

export const deletePokemon = async (id) => {
    const response = await axios.delete(`${API_URL}/pokemons/${id}`);
    return response.data;
};