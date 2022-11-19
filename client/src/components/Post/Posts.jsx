import React, {useState, useEffect} from 'react';
import axios from "axios";
import Post from "./Post";


function Posts() {
    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/").then(
            response => {
                const data = response.data;
                setThoughts(data);
            }
        )
    }, []);

    return (
        <>
            {thoughts.map((thought, i) => {
                return (
                    <Post key={i} text={thought.text}/>
                );
            })} 
        </>
    )
}

export default Posts