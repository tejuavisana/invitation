import React from 'react';

const Weddinglocation = () => {
    return ( <section className="section w-details-area center-text">
		<div className="container">
			<div className="row">
				<div className="col-sm-1"></div>
				<div className="col-sm-10">
					
					<div className="heading">
						<h2 className="title">Wedding & Reception Details</h2>
						<span className="heading-bottom"><i className="icon icon-star"></i></span>
					</div>
					
					<div className="wedding-details margin-bottom">
						
						<div className="w-detail right">
							<i className="icon icon-ciurclke"></i>
							<h4 className="title">WEDDING CEREMONY</h4>
                            <p>Sunday, February 23 2024</p>
							<p>YVR Kalyanamandapam</p>
                            <p><i className="icon icon-email-plane"></i></p>
                            <p>Prodhutur, Kadapa, Andhra Pradesh</p>
                            <p>
							<div className="map-responsive">
							<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="600"
  height="450"
  frameBorder="0"
  allowFullScreen
  title="Map showing wedding location"
></iframe>

                            </div>
							</p>

						</div> 
						
						<div className="w-detail right">
							<i className="icon icon-wine-glass"></i>
							<h4 className="title">LUNCH</h4>
							<p>Time: 12AM Onwards</p>
						</div> 
						
						<div className="w-detail left">
							<i className="icon icon-cake"></i>
							<h4 className="title">RECEPTION PARTY</h4>
							<p>Wednesday, Feb26th, 2024</p>
							<p>Prasanna SaiRam Kalyanamandapam</p>
                            <p><i className="icon icon-email-plane"></i></p>
                            <p>
							<div className="map-responsive">
                            <iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="600"
  height="450"
  frameBorder="0"
  allowFullScreen
  title="Map showing Reception location"
></iframe>


                                </div>
								</p>
						</div> 
						
						<div className="w-detail left">
							<i className="icon icon-wine-glass"></i>
							<h4 className="title">Dinner</h4>
							<p>Time: 7PM Onwards</p>
						</div> 
						
					</div>
					
				</div>
			</div>
		</div>
    </section>    
    );
}

export default Weddinglocation;