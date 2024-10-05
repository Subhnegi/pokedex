import { useState } from 'react';
import { motion } from 'framer-motion';
import {  createTrainer } from '../api/api';

const TrainerForm = () => {
    const [name, setName] = useState('');
    const [money, setMoney] = useState(0);
    const [badges, setBadges] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { name, money, badges };
        createTrainer(payload)
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-10 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
        <h1 className='text-3xl font-bold mb-4 text-center'>Create Trainer</h1>
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="money">
                    Money
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="money"
                    type="number"
                    value={money}
                    onChange={(e) => setMoney(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="badges">
                    Badges
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="badges"
                    type="text"
                    value={badges.join(',')}
                    onChange={(e) => setBadges(e.target.value.split(','))}
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

export default TrainerForm;