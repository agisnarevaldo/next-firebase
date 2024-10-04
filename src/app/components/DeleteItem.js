import {deleteDoc, doc} from "@firebase/firestore";
import db from "@/utils/firestore";

const DeleteItem = ({ id }) => {
    const handleDelete = async () => {
        const itemRef = doc(db, "items", id);
        try {
            await deleteDoc(itemRef);
            alert('Item deleted successfully');
        } catch (e) {
            console.error("Error deleting document: ", e);
            alert('Error deleting item');
        }
    }

    return (
        <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-3 py-1 rounded-lg"
        >
            Delete Item
        </button>
    )
}

export default DeleteItem;