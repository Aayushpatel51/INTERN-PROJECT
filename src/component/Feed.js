import React from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

const Feed = ({data, feedIndex})=>{
  return (
    <>
        {data[feedIndex].map(item=>(
            <div className="social-feed" key={feedIndex}>
                <ElfsightWidget widgetID={item.key} />
            </div>
        ))}
    </>
  );
}

export default Feed;
