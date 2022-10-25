import React from 'react';
import './index.css';
import Navbar from './Navbar';
import Card from './Card';
import images from './data';


function App() {
    return (
        <React.Fragment>
            <Navbar />
            <div className='container'>
                <div className='row mt-4'>
                    {images.map((val,index) => {
                        return <Card key={index} img={val.imgurl} />;
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
