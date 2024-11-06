import React, { useState, useEffect } from 'react';

const CountDown = () => {
    const [isExpired, setIsExpired] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const countDownDate = new Date("Feb 23, 2025 10:53:25").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                setIsExpired(true);
                clearInterval(intervalId);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        const intervalId = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="section counter-area center-text">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading">
                            <h2 className="title">Don't miss it!</h2>
                            <span className="heading-bottom"><i className="color-white icon icon-star"></i></span>
                        </div>
                    </div>

                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <div className="remaining-time">
                            {isExpired
                                ? <div>Yay....</div>
                                : <div id="clock">
                                    <div className="time-sec"><span className="title">{timeLeft.days}</span> Days </div>
                                    <div className="time-sec"><span className="title">{timeLeft.hours}</span> Hours </div>
                                    <div className="time-sec"><span className="title">{timeLeft.minutes}</span> Minutes </div>
                                    <div className="time-sec"><span className="title">{timeLeft.seconds}</span> Seconds </div>
                                  </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountDown;
