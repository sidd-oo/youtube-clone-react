import React, { useEffect, useState } from 'react'
import SearchIcon from "../../assets/images/search.svg"
import axios from 'axios';

const SuggestiveSearchBar = () => {

    const [searchValue, setSearchValue] = useState("");
    const [searchSuggestion, setSearchSuggestion] = useState([]);

    // useEffect(()=>{
    //     const autosuggestionQuery = async() => {
    //         const res = await axios.get(`https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchValue}`);
    //         console.log(res)
    //         // setSearchSuggestion(res);
    //     }

    //     autosuggestionQuery();
    // },[searchValue])

    return (
        <div className='flex'>
            <input
                className="placeholder:pl-3 placeholder-gray-500 border-2 rounded-l-3xl border-r-0 h-8 w-96 pl-3 "
                type='text'
                placeholder='Search'
                value={ searchValue }
                onChange={(e)=>setSearchValue(e.target.value)}
            ></input>
            <button className='border-2 rounded-r-3xl bg-gray-100 border-l-0 w-12 h-8'>
                <img className='w-5 h-5 mx-auto' src={SearchIcon} alt="search-icon" />
            </button>
        </div>
    )
}

export default SuggestiveSearchBar