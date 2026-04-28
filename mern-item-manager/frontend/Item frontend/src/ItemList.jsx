import { deleteItem } from '../api';

export default function ItemList({ items, onRefresh }) {
    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this item?')) {
            return;
        }

        try {
            await deleteItem(id);
            onRefresh();
        } catch (error) {
            console.error('Failed to delete item:', error);
            alert('Failed to delete item. Please try again.');
        }
    };

    return (
        <div>
            <h2>Items</h2>

            {items.length === 0 ? (
                <p>No items found.</p>
            ) : (
                items.map((item) => (
                    <div
                        key={item._id}
                        style={{
                            border: '1px solid #ccc',
                            padding: '1rem',
                            marginBottom: '1rem',
                            borderRadius: '8px',
                        }}
                    >
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>
                            <strong>Barcode No: {item.barcodeNo}</strong>
                        </p>
                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </div>
                ))
            )}
        </div>
    );
}