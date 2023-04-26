import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TopLevelComment from './TopLevelComment';
import CommentReply from './CommentReply';

const CommentsThread = ({ videoID }) => {

  const [commentThread, setCommentThread] = useState([]);
  const [visibleSection, setVisibleSection] = useState(null);


  useEffect(() => {
    const fetchCommentsThread = (async () => {
      const commentThreadResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoID}&key=${process.env.REACT_APP_API_KEY}&maxResults=100`);
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
                setVisibleSection={setVisibleSection}
              />
              {console.log(visibleSection, "visibleSection")}
              {console.log(item.id, "item.id")}
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