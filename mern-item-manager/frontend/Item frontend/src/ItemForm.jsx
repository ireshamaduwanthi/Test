import { useState } from 'react';
import { createItem } from '../api';
export default function ItemForm({ onItemAdded }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [barcodeNo, setBarcodeNo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createItem({ name, description, barcodeNo: Number(barcodeNo) });
        setName('');
        setDescription('');
        setBarcodeNo('');
        onItemAdded();
    };
    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
            <h2>Add New Item</h2>
            <div>
                <input
                    placeholder="Item name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    placeholder="Barcode No (e.g. 123456)"
                    type="number"
                    value={barcodeNo}
                    onChange={e => setBarcodeNo(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Item</button>
        </form>
    );
}