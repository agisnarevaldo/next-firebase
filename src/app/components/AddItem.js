"use client";

import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import db from "@/utils/firestore";

const AddItem = () => {
    const [value, setValue] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "items"), {
                name: value
            });
            console.log("Document written with ID: ", docRef.id);
            setValue(''); // Clear the form
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add a new item"
                className="text-slate-900 p-2 border border-slate-900 rounded-lg"
            />
            <button type="submit" className="bg-blue-600 px-5 py-2 rounded-lg ml-2">Add Item</button>
        </form>
    );
};

export default AddItem;