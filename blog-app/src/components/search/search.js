import React from "react";
import yeehaw from '../assets/yeehaw.wav'

const sound =() =>{
    new Audio(yeehaw).play
}
const search =() =>(
    <>
    <form>
        <label for='searchCowFolk'>Search</label>
        <input type='text' placeholder="Search cowfolk" id='searchCowFolk'></input>
        <button onClick={sound}>Yeehaw!</button>
    </form>
    </>
)
export default search;