"use client";

import {useEffect, useState} from "react";
import DeleteItem from "./DeleteItem";
import {getDocs, collection     } from "@firebase/firestore";
import db from "@/utils/firestore";

const ListItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const querySnapShot = await getDocs(collection(db, "items"));
            setItems(querySnapShot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        }

        fetchItems();
    }, []);

    return (
        <div className="border w-96 text-center p-4 mt-6">
            <h2 className="text-2xl font-semibold">List Of Items</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id} className="text-left border-b p-2">
                        <p>{item.name}</p>
                        <DeleteItem id={item.id}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListItems;