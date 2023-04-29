import React, { useEffect, useState } from 'react'
import SearchIcon from "../../assets/images/search.svg"
import MaginfierIcon from "../../assets/images/maginfier.svg"
import axios from 'axios';

const SuggestiveSearchBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchSuggestion, setSearchSuggestion] = useState([]);

    useEffect(() => {
        const CORS_PROXY = `https://corsproxy.io/?`
        const autosuggestionQuery = async () => {
            const res = await axios.get(`${CORS_PROXY}https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchValue}`);
            setSearchSuggestion(res.data[1]);
        }

        autosuggestionQuery();
    }, [searchValue])

    console.log(searchSuggestion);
    return (
        <>
            <div className='flex flex-col'>
                <div className="flex flex-row relative">
                    <input
                        className="placeholder:pl-3 placeholder-gray-500 border-2 rounded-l-3xl border-r-0 h-8 w-96 pl-3 "
                        type='text'
                        placeholder='Search'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    ></input>
                    <button className='border-2 rounded-r-3xl bg-gray-100 border-l-0 w-12 h-8'>
                        <img className='w-5 h-5 mx-auto' src={MaginfierIcon} alt="search-icon" />
                    </button>
                </div>
                {searchSuggestion.length > 0  && <ul className='absolute top-10 rounded-lg border-gray-900 bg-white hover:bg-gray-400-200 w-96 shadow-lg py-2'>
                    {searchSuggestion.map((item)=>{
                        return <li className='flex items-center pt-3 px-5 hover:bg-gray-50 font-semibold text-slate-700'>
                        <img src={MaginfierIcon} alt="maginfierIcon" className='h-5 w-5 mr-4'/>
                        {item}
                    </li>
                    })}
                </ul>}
            </div>
        </>
    )
}

export default SuggestiveSearchBar