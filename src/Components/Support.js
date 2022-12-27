import React from 'react'

function Support() {
    return (
        <>
            <div className="header">
                <h1>Our Support</h1>
                <div class="border"></div>
                <p>Our Artificial Intelligence powered tools use to create products much durability and successfully</p>
            </div>
            <div className="row1-container">
                <div className="box box-down cyan">
                    <h2>Supervisor</h2>
                    <p>We are giving 100% Quality</p>
                    <img className='images' src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="One"/>
                </div>

                <div className="box red">
                    <h2>Delivery</h2>
                    <p>Door step delivery free</p>
                    <img className='images' src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="Two"/>
                </div>

                <div className="box box-down blue">
                    <h2>Support</h2>
                    <p>Life time support</p>
                    <img className='images' src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="Three"/>
                </div>
            </div>
            <div className="row2-container">
                <div className="box orange">
                    <h2>Tech</h2>
                    <p>AI Tech using testing</p>
                    <img className='images' src="https://assets.codepen.io/2301174/icon-karma.svg" alt="Four"/>
                </div>
            </div>
        </>
    )
}

export default Support