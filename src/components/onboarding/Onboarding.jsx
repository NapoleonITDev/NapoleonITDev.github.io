import React, {useRef, useEffect} from 'react';
import videoBg from '../../asserts/home.mp4';
import './onboarding.css';


function AutoPlaySilentVideo(props) {
    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })
    return (
        <video
            className={props.className}
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline>
            <source src={props.video} type="video/mp4"/>
        </video>

    );
}

export const Onboarding = () => {

    return (
        <section className='onboarding' id='onboarding'>
            <AutoPlaySilentVideo
                video={videoBg}
                className="onboarding__video"
            />
            <div className="blur-overlay"></div>
            <div className='onboarding__wrapper'>
                <div className='onboarding__container container'>
                    <h1 className='onboarding__title text-cs'>
                        <span>Napoleon</span> IT Dev
                    </h1>
                </div>
            </div>
         </section>
    );
};

export default Onboarding;
