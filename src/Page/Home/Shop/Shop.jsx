import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import ToyCard from './ToyCard';



const Shop = () => {
    const [activeTab, setactiveTab] = useState('ac')
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);

    const handleTab = tab => {
        setactiveTab(tab)
    }
    
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center'>Shop by Category</h1>
            <div className="tabs tabs-boxed w-3/5 mt-10 mx-auto">
                <div className='mx-auto'>
                <a onClick={() => handleTab('panda')} className={`tab font-bold text-xl ${activeTab == 'panda' ? 'bg-white' : ''}`}>Panda</a>
                <a onClick={() => handleTab('honey')} className={`tab font-bold text-xl ${activeTab == 'honey' ? 'bg-white' : ''}`}>Honey</a>
                <a onClick={() => handleTab('coco')} className={`tab font-bold text-xl ${activeTab == 'coco' ? 'bg-white' : ''}`}>CoCo</a>
                </div>
            </div>
            <div className='grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-4/5 mx-auto'>
                {
                    toys.map(toy => <ToyCard
                        key={toy._id}
                        toy={toy}
                    ></ToyCard>)
                }
            </div>
        </div>
    );
};

export default Shop;