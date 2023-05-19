import React from 'react';

const State = () => {
    return (
        <div className="stats shadow w-full my-10 bg-gray-400 hover:bg-gray-300 text-center">

            <div className="stat">
                <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div className="stat-title">Total View Daily</div>
                <div className="stat-value text-primary">2.6K</div>
                <div className="stat-desc">12% more than last month</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="stat-title">Sales Grow</div>
                <div className="stat-value text-primary">12.6%</div>
                <div className="stat-desc">7% more than last month</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <div className="avatar online">
                        <div className="w-16 rounded-full">
                            <img src="https://i.ibb.co/y4t6PcH/birthday-gift-concept-teddy-bear-260nw-1562728435.webp" />
                        </div>
                    </div>
                </div>
                <div className="stat-value">86%</div>
                <div className="stat-title">More Beautiful Products Available</div>
                <div className="stat-desc text-secondary">31 imports remaining</div>
            </div>

        </div>
    );
};

export default State;