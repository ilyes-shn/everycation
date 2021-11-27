import React from 'react'

const Steps = () => {
    return (
        <div className='steps'>
            <h1>Book Your Next Trip in 3 Steps</h1>
            <div className='items'>
                <div>
                <img src='/images/1a97bc02de8f07538f093f92ad3cecc5.png' alt='1a97bc02de8f07538f093f92ad3cecc5.png' />
                <h3>1</h3>
                <h4>Choose Destination</h4>
                </div>
                <div>
                <img src='/images/409673480b502a56d3f4192a35c74a79.png' alt='409673480b502a56d3f4192a35c74a79.png' />
                <h3>2</h3>
                <h4>Save, load your wallet, or pay from your wallet</h4>
                </div>
                <div>
                <img src='/images/9bb8c7c46891d254d0e2584e9d9ccf8c.png' alt='9bb8c7c46891d254d0e2584e9d9ccf8c.png' />
                <h3>3</h3>
                <h4>Leave the rest to us and enjoy your trip</h4>
                </div>
            </div>
            <button>Get Started</button>
        </div>
    )
}

export default Steps
