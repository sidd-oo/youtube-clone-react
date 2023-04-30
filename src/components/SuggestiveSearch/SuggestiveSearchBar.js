import React, { useEffect, useState } from 'react'
import MaginfierIcon from "../../assets/images/maginfier.svg"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cacheSearchResult } from '../../redux/cacheSearchSlice';
import { AUTOSUGGESTION_SEARCH_URL } from '../../utils/constants';

const SuggestiveSearchBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchSuggestion, setSearchSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    const cacheResult = useSelector((store)=> store.cacheSearch);
    const dispatch = useDispatch();

    useEffect(() => {
        const CORS_PROXY = `https://corsproxy.io/?`

        const autosuggestionQuery = async () => {
            const res = await axios.get(`${CORS_PROXY}${AUTOSUGGESTION_SEARCH_URL}${searchValue}`);
            setSearchSuggestion(res.data[1]);
            dispatch(cacheSearchResult({
                [searchValue]:res.data[1]
            }));
        }
        
        const timer = setTimeout(() => {
            if(cacheResult[searchValue]){
                setSearchSuggestion(cacheResult[searchValue])
            }else{
                autosuggestionQuery();
            }
        }, 500);
        
        return () => {
            clearTimeout(timer);
        }
    }, [searchValue]);

    return (
        <>
            <div className='flex flex-col'>
                <form className="flex flex-row relative">
                    <input
                        className="placeholder:pl-3 placeholder-gray-500 border-2 rounded-l-3xl border-r-0 h-9 w-96 pl-3 "
                        type='text'
                        placeholder='Search'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={()=>setShowSuggestion(true)}
                        onBlur={()=>setShowSuggestion(false)}
                    ></input>
                    <button className='border-2 rounded-r-3xl bg-gray-100 border-l-0 w-16 h-9'>
                        <img className='w-5 h-5 mx-auto' src={MaginfierIcon} alt="search-icon" />
                    </button>
                </form>
                {showSuggestion && searchSuggestion.length > 0 && <ul className='absolute top-10 rounded-lg border-gray-900 bg-white hover:bg-gray-400-200 w-96 shadow-lg py-2'>
                    {searchSuggestion.map((item, index) => {
                        return <Link key={index} to="/searchResults" state={{ searchedQuery: item }} onClick={() => { setSearchValue("") }}>
                            <li className='flex items-center pt-3 px-5 hover:bg-gray-50 font-semibold text-slate-700'>
                                <img src={MaginfierIcon} alt="maginfierIcon" className='h-5 w-5 mr-4' />
                                {item}
                            </li>
                        </Link>
                    })}
                </ul>}
            </div >
        </>
    )
}

export default SuggestiveSearchBar