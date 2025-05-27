import { useState } from "react";


export default function Greeting({ name }) {
    const [index, setIndex] = useState(0);

    const greetings = [
        "Hello",
        "Bonjour",
        "Hola",
        "Ciao",
        "Hallo",
        "Привет",
        "こんにちは",
        "안녕하세요",
        "你好",
    ];

    const handleClick = () => {
        
        const nextIndex = index === greetings.length - 1 ? 0 : index + 1;
        setIndex(nextIndex);
}
   return (
        <main>
            <h1>{greetings[index]} {name}!</h1>
            <button onClick={handleClick}>
                Next Greeting
            </button>
        </main>
    )
    };