import React from 'react';

const Video = () => {
    return ( 
        <footer>
            <div className="ratio ratio-16x9">
                <iframe 
                    src="https://www.youtube.com/embed/mRexQMVofuw" 
                    title="YouTube video" 
                    allowFullScreen
                ></iframe>
            </div>
        </footer>
    );
}

export default Video;
