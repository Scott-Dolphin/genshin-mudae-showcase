import '../index.css';
import Navbar from '../components/navbar';

const Landing = () => {
    return (
        <div className="landing-page">
            <Navbar/>
            <div className='landing'>
                <h1 className='landing-title'>Genshin Impact Showcase</h1>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Genshin_Impact_logo.svg/2560px-Genshin_Impact_logo.svg.png" className='genshin-logo'/>
                <div className='text-container'>
                    <div className='text-area'>
                        <h2 className='landing-paragraph-title'>An Application To Showcase Genshin Impact Characters</h2>
                        <p className='landing-paragraph'>A user is able to upload a json from genshin impact and their characters will be rendered with their images and other details. The information will be displayed on a users profile which is public and can be viewed by others. Users can share links to their pages and show off their collections to friends and other players.</p>
                    </div>
                    <div className='text-area'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;