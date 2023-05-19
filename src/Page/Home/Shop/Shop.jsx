import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from './ToyCard';



const Shop = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => setToys(data))
    },[])
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center'>Shop by Category</h1>
            <div className='grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-4/5 mx-auto'>
                {
                    toys.map(toy => <ToyCard
                    key={toy._id}
                    toy={toy}
                    ></ToyCard>)
                }
            </div>



            {/* <div className='mx-auto w-4/6'>
                <Tabs>
                    <TabList className='text-center'>
                        <Tab>Panda</Tab>
                        <Tab>Cute</Tab>
                        <Tab>Sleepy</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div> */}
        </div>
    );
};

export default Shop;