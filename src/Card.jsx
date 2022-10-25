import React from "react";

function Card(props) {
    return (
        <React.Fragment>
            <div className='col-6 col-lg-3 col-md-4 col-sm-6'>
                <div className="card shadow-sm border-0">
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Card;