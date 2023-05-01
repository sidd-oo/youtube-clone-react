import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { publishedAt as publishedAtFunc } from "../../utils/publisedAt"
import { SEARCH_URL } from '../../utils/constants';


const SearchResultsPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const location = useLocation();
    const searchedQuery = location.state?.searchedQuery;

    useEffect(() => {
        const fetchSearchedResults = async () => {
            const res = await axios.get(SEARCH_URL+`&q=${searchedQuery}`);
            setSearchResults(res.data.items);
        }

        fetchSearchedResults();
    }, [searchedQuery])

    console.log("I am triggered!!")

    return (
        <div className='flex flex-col w-[60%] mx-auto mb-5'>
            {searchResults.map((result) => {
                return (<Link to={`/watch?v=${result?.id?.videoId}`} className='flex flex-row mt-5' key={result?.id?.videoId}>
                    <img className="w-72 rounded-md mr-5" src={result?.snippet?.thumbnails?.medium?.url} alt="videoThumbnail" />
                    <div className="flex flex-col">
                        <h1 className='font-semibold'>{result?.snippet?.title}</h1>
                        <div className="flex text-gray-500 gap-2 text-sm mb-2">
                            <h2>112K views</h2>
                            <h2>{publishedAtFunc(result?.snippet?.publishedAt)}</h2>
                        </div>
                        <h2 className='text-sm text-gray-500 mb-2'>{result?.snippet?.channelTitle}</h2>
                        <h2 className='text-sm text-gray-500'>{result?.snippet?.description}</h2>

                    </div>
                </Link>)
            })}
        </div>
    )
}

export default SearchResultsPage;