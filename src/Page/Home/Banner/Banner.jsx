import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/zJtWfRS/492408489-2.jpg")` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-6xl font-bold">Collect Your Beautiful Teddy</h1>
                    <p className="mb-5 font-semibold">
                    The website also features informative articles on teddy bear history, care tips, and collecting advice. With a user-friendly interface and secure purchasing options, Teddy World provides a convenient and enjoyable shopping experience for teddy bear lovers worldwide
                    </p>
                    <button className="btn btn-primary">Enjoy Your Teddy</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;