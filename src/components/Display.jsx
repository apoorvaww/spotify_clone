import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

function Display() {

    const displayRef = useRef();
    const location = useLocation(); //to get the url of the page where you currently are 
    // console.log(location)
    //checking if our pathname has album i.e. if the page where we are is the album page or not
    const isAlbum = location.pathname.includes("album");

    //if we are on album page, we will get albumId like this:
    const albumId = isAlbum ? location.pathname.slice(-1) : "";
    // console.log(typeof(albumId)) since albumId is of string type we'll have to convert it into number

    const bgColor = albumsData[Number(albumId)].bgColor
    // console.log(bgColor);

    useEffect(() => {
        if (isAlbum) {
            displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
        }
        else{
            displayRef.current.style.background =`#121212`
        }
    },)

    return (
        <div ref={displayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
            <Routes>
                <Route path='/' element={<DisplayHome />} />
                <Route path='/album/:id' element={<DisplayAlbum />} />
            </Routes>
        </div>
    )
}

export default Display