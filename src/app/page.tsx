import AddItem from "@/app/components/AddItem";
import ListItems from "@/app/components/ListItems";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1>Welcome To NextJS APP</h1>
            <AddItem/>
            <ListItems/>
        </div>
    );
}
