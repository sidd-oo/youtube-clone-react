import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TopLevelComment from './TopLevelComment';
import CommentReply from './CommentReply';
import { COMMENTS_THREAD_URL } from '../../utils/constants';

const CommentsThread = ({ videoID }) => {

  const [commentThread, setCommentThread] = useState([]);
  const [visibleSection, setVisibleSection] = useState(null);


  useEffect(() => {
    const fetchCommentsThread = (async () => {
      const commentThreadResponse = await axios.get(COMMENTS_THREAD_URL+`&videoId=${videoID}`);
      setCommentThread(commentThreadResponse?.data?.items)

    })
    fetchCommentsThread();
  }, [videoID])


  return (
    <>
      {
        commentThread.map((item) => {
          return (
            <div key={item.id} >
              <TopLevelComment
                item={item}
                repliesQty={item?.replies?.comments?.length}
                visibleSection = {visibleSection}
                setVisibleSection={setVisibleSection}
              />
              {
                visibleSection === item.id && item?.replies?.comments?.map((commentStructure) => {
                  return (
                    <CommentReply key={commentStructure?.snippet?.parentId + commentStructure?.snippet?.textOriginal}
                      commentStructure={commentStructure}
                    />
                  )
                })
              }
            </div>)
        })

      }

    </>
  )
}

export default CommentsThread