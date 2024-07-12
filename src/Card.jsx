import profilePic from './assets/natsuki.jpg'

function Card() {
    return (
        <div className='card'>
            <img className='card-image' src={profilePic} alt='profile picture'></img>
            <h2 className = 'card-title'>Weiming's Code</h2>
            <p className = 'card-text'>The more you learn, the more knowleadge you realize you don't know.</p>
        </div>
    );
}

export default Card