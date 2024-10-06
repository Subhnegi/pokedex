// src/pages/Trainers.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getTrainers, createTrainer, updateTrainer, deleteTrainer } from '../api/api';
import EditModal from '../components/EditModal';
import TrainerCard from '../components/TrainerCard';
const Trainers = () => {
    const [trainers, setTrainers] = useState([]);
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        fetchTrainers();
    }, []);

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
            <h1 className='text-4xl font-bold text-center p-4 text-gray-800'>Trainers</h1>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {trainers.map((trainer) => (
                    <TrainerCard
                        key={trainer.ID}
                        trainer={trainer}
                        handleEdit={() => handleEdit(trainer)}
                        handleDelete={() => handleDelete(trainer.ID)}
                    />
                ))}
            </motion.div>
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