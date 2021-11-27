import React from 'react'

const Card = ({place, src}) => (
    <div className='card'>
        <h4>{place}</h4>
        <h5><i class="fas fa-gift" style={{marginRight: '10px', fontSize: '15px'}}/>5 Packages</h5>
        <img src={`/images/${src}`} alt={place} />
    </div>
)

const WhereTravel = () => {
    return (
        <div className='whereTravel'>
            <h1>Where Can You Travel?</h1>
            <div className='grid'>
                <div className='twoCol'>
                    <i style={{color: 'white', fontSize: '40px', marginBottom: '20px'}} class="fas fa-map-marker-alt"/>
                    <h4>Popular Places</h4>
                    <p>Enjoy the benefits of our packages to the sites where our visitors have more fun.</p>
                    <p>Property arranged with low costing.</p>
                </div>
                <div><Card place='Paris' src='cdf0b3374de3beed01ed1f6ed30db482.jpeg' /></div>
                <div><Card place='Agra' src='1df71158ae8ebd52bc8a763a278a11b6.jpeg'/></div>
                <div className='start2'><Card place='Kuala Lumpur' src='cc96e680960f2ae39ea90c6108b8b48f.jpeg' /></div>
                <div><Card place='Vienna' src='c0785b3544294ace522f57d201a53033.jpeg' /></div>
                <div className='twoRow yellow'>
                    <p>Want to travel to the most thrilling spot on the planet? We've set a bunch of surprises for you</p>
                    <h3>Click to view more <i class="fas fa-arrow-circle-right"></i></h3>
                </div>
                <div className='start2'><Card place='Prague' src='e9d0e8dc20eab66902c578d7066cbd24.jpeg' /></div>
                <div><Card place='Munich' src='fdc8b8f725b7026d684a939b61474fe4.jpeg' /></div>
            </div>
            <img src="/images/2d3d93925657ec86e1ec617fa3b62fe2.png" alt="points" className='points'/>
        </div>
    )
}

export default WhereTravel
