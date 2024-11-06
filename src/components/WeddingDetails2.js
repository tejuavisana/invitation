import React from 'react';
import '../OurStory.css';
import img3 from '../images/met3.jpeg'
import img2 from '../images/met2.jpeg'
import img1 from '../images/met1.jpeg'
const WeddingDetails = () => {
    return (
        <section className="section w-details-area center-text">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading">
                            <span>We Love Each Other</span>
                            <h2 className="title">Our Story</h2>
                            <p>To love a person is to see all of their magic, and to remind them of it when they have forgotten.</p>
                            <p>Ah, life grows lovely where you are.</p>
                            <span className="heading-bottom"><i className="icon icon-star"></i></span>
                        </div>
                    </div>
                    <div className="col-md-12 col-md-offset-0">
                        <ul className="timeline animate-box fadeInUp animated-fast">
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img1})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">First We Met</h3>
                                        <span className="date">October 13, 2023</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>After four hours of long drive he met my family members, fall in love with each other.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img2})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">First Date</h3>
                                        <span className="date"><i className="icon icon-date"></i>October 14, 2023</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>First memory added to our journey</p>
                                    </div>
                                </div>
                            </li>
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img3})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">In A Relationship</h3>
                                        <span className="date">Dec 14, 2023</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>It's our engagement time. We started new relationship.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WeddingDetails;