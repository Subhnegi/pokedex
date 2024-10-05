import React,{ useState } from 'react';
import {updateTrainer} from '../api/api';
const EditModal = ({ show, onHide, title, children }) => {
    if (!show) {
        return null;
    }
    const [name, setName] = useState(children.Name);
    const [money, setMoney] = useState(children.Money);
    const [badges, setBadges] = useState(children.Badges);

    const handleUpdate = async () => {
        const trainer = { name, money,  badges };
        await updateTrainer(children.ID, trainer);
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

export default EditModal;