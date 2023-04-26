import React from 'react'
import { publishedAt as publishedAtFunc } from '../../utils/publisedAt'
import LikeIcon from "../../assets/images/like.svg"
import UnlikeIcon from "../../assets/images/unlike.svg"
import ArrowDownIcon from "../../assets/images/arrow-down.svg"
import ArrowUpIcon from "../../assets/images/arrow-up.svg"

const TopLevelComment = ({ item, repliesQty, setVisibleSection, visibleSection }) => {
    const { authorProfileImageUrl, authorDisplayName, publishedAt, textDisplay } = item.snippet?.topLevelComment?.snippet;
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row items-start mb-3 font-roboto'>
                <img className='mt-2 h-9 w-9 rounded-[50%]' src={authorProfileImageUrl} alt="commentAuthor" />
                <div className='flex flex-col ml-3 justify-start'>
                    <h2 className='text-black-400 font-semibold text-md'>{authorDisplayName}
                        <span className='ml-2 text-gray-600 text-sm'>{publishedAtFunc(publishedAt)}</span>
                    </h2>
                    <h3 className='text-sm mt-1'>{textDisplay}</h3>
                </div>
            </div>
            <div className='flex flex-row mr-3 items-center ml-12 mb-2'>
                <img className="w-5 h-5 mr-2 hover:bg-gray-300 hover:rounded-full" src={LikeIcon} alt="like" />
                <img className="w-5 h-5 mr-2 hover:bg-gray-300 hover:rounded-full" src={UnlikeIcon} alt="unlike" />
                <span className=''>Reply</span>
            </div>
            {repliesQty &&
                (
                    <div
                        className='flex flex-row mr-3 items-center ml-12 mb-2 cursor-pointer'
                        onClick={item.id !== visibleSection ? ()=>setVisibleSection(item.id) : ()=>setVisibleSection(null)}
                    >
                        {
                            item.id === visibleSection  ? <img className="w-3 h-3 mr-2 hover:bg-gray-300 hover:rounded-full" src={ArrowUpIcon} alt="like" /> : <img className="w-3 h-3 mr-2 hover:bg-gray-300 hover:rounded-full" src={ArrowDownIcon} alt="like" />}
                        <span className='text-blue-900 font-semibold'> {repliesQty} Reply</span>
                    </div>
                )}
        </div>
    )
}

export default TopLevelComment