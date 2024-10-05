// src/pages/Trainers.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getTrainers, createTrainer, updateTrainer, deleteTrainer } from '../api/api';
import TrainerForm from '../components/TrainerForm';
import EditModal from '../components/EditModal';
const Trainers = () => {
    const [trainers, setTrainers] = useState([]);
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        fetchTrainers();
    }, [trainers]);

    const fetchTrainers = async () => {
        const data = await getTrainers();
        setTrainers(data);
    };

    const handleDelete = async (id) => {
        await deleteTrainer(id);
        fetchTrainers();
    };

    const handleEdit = (trainer) => {
        setSelectedTrainer(trainer);
        setShowModal(true);
    };


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Trainers</h1>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {trainers.map((trainer) => (
                    <motion.div
                        key={trainer.ID}
                        className="bg-white shadow-md rounded p-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-xl font-bold">{trainer.Name}</h2>
                        <p>Money: {trainer.Money}</p>
                        <p>Badges: {trainer.Badges.join(', ')}</p>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mr-2"
                            onClick={() => handleEdit(trainer)}
                        >
                            Edit
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                            onClick={() => handleDelete(trainer.ID)}
                        >
                            Delete
                        </button>
                    </motion.div>
                ))}
            </motion.div>
            <TrainerForm />
            <EditModal
                show={showModal}
                onHide={() => setShowModal(false)}
                title="Edit Trainer"
                children={selectedTrainer}
            />
        </div>
    );
};

export default Trainers;