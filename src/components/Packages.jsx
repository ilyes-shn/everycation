import React from 'react'

const Card = ({place, src, title}) => (
    <div className='card'>
        <h4>{title}</h4>
        <h5 style={{margin: '5px 0px'}}><i class="fas fa-map-marker-alt" /> {place} <i class="fas fa-gift" style={{marginRight: '10px', fontSize: '15px'}}/>5 days</h5>
       <h4 style={{margin: '5px 0px'}}>$150 <span style={{fontSize: '13px'}}>/Per person</span></h4>
        <img src={`/images/${src}`} alt={place} />
    </div>
)

const Packages = () => {
    return (
        <div className='packages'>
            <h1>Browse Our Packages</h1>
            <div className='grid'>
                <div><Card title='Sky is the Limit' place='Manali' src='f9e74b5123ad3f74600834145bd55102.jpeg' /></div>
                <div><Card title='Beyond the blues' place='Maldives' src='e3f081b05c26dc844d79ddfaeda856c2.jpeg'/></div>
                <div className='twoCol'>
                <i style={{color: 'white', fontSize: '40px', marginBottom: '20px'}} class="fas fa-gift"/>
                    <h4>Popular Packages</h4>
                    <p>Choose the most popular bundles and be get excited for your next trip.</p>
                </div>
                <div><Card title='Within the Greens' place='Philippines' src='86621bf0f6f05f70e0fcca5e834cf36d.jpeg' /></div>
                <div><Card title="Queen's Gambit" place='London' src='fc59ae85cd25f7ed0d8c441aa6f7f7c4.jpeg' /></div>
                <div><Card title='City of Canals' place='Venice' src='fd657f3df2ebbf58132705ffe80cee98.jpeg' /></div>
                <div className='twoRow yellow'>
                    <p>Most exclusive packages are available for you. It's only a click away!</p>
                    <h3>Click to view more <i class="fas fa-arrow-circle-right"></i></h3>
                </div>
                <div className='start3'><Card title='Mountain Venture' place='Kathmandu' src='3d49cb24496e056f73f0f1d323c2096b.jpeg' /></div>
            </div>
            <img src="/images/2d3d93925657ec86e1ec617fa3b62fe2.png" alt="points" className='points'/>
        </div>
    )
}

export default Packages
