import React from 'react'
import {motion} from 'framer-motion'
const TrainerCard = ({trainer, handleEdit, handleDelete}) => {
    return (
        <motion.div
            key={trainer.ID}
            className="bg-white shadow-md rounded p-4"
            whileHover={{ scale: 1.05 }}
        >
            <h2 className="text-xl font-bold capitalize">{trainer.Name}</h2>
            <p>Money: {trainer.Money}</p>
            <p>Badges: {trainer.Badges.join(', ')}</p>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mr-2"
                onClick={handleEdit}
            >
                Edit
            </button>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                onClick={handleDelete}
            >
                Delete
            </button>
        </motion.div>
    )
}

export default TrainerCard