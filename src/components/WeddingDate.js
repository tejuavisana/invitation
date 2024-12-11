import React from 'react';
import sindurdan from '../images/ap.png';
import hand from '../images/w22.png';
import '../WeddingDate.css';

const WeddingDate = () => {
    return (
        <div className="main-slider">
            <div className="display-table center-text">
                <div className="display-table-cell">
                    <div className="slider-content">

                        <img className="sindur-dan" src={sindurdan} alt="Sindur Dan"/>
                        <h5 className="date"> DEC 14 2024</h5>
                        <h3 className="pre-title">Save The Date</h3>
                        <h1 className="title">Dheeraj  <img className="sindur-dan" src={hand} alt="Sindur Dan"/> Tejaswini</h1>
                        <br/>
                        <h3><a href="url" target="_blank" rel="noopener noreferrer"> Watch our Engagement Live!
</a></h3>
                    </div>
			</div>
		</div>
	</div>
    );
}

export default WeddingDate;