import { useEffect } from "react";
import Header from "../components/header";

export default function NotFound() {
    useEffect(() => {
        document.title = "Not found - Instagram";
    }, []);

    return (
        <div className="bg-gray-background">
        <Header/>
            <div className="mx-auto max-w-screen-lg">
                <p className="text-center text-2xl">Not found!</p>
            </div>
        </div>
    )
}