import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'




export default function Home(){
    // VIDEO COMPONENT FOR RE-RENDERING
    const Video = ({url}) => {
        return (
            <video
                src={url}
                controls="pause"
                onMouseOver={event => {event.target.play()}}
                onMouseOut={event => event.target.pause()}
                muted={true}
            />
        )
    }

    // IMAGE COMPONENT FOR RE-RENDERING
    const Image = ({url}) => {
        return (
            <img className="back-img" src={url}/>
        )
    }

    //SLIDING IMAGES DATA
    const slideImages = [
        {
          url: 'https://storage.googleapis.com/lumen5-site-images/carousel-siemens-bg.png',
          caption: 'Slide 1',
          icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-mitsubishi.png',
          description: "“Thanks to Lumen5, we have been able to cut down on the time and costs related to video making.”",
          name: "Adrian Ngo",
          title: "Global Advertising and Sponsorships"
        },
        {
          url: 'https://storage.googleapis.com/lumen5-site-images/carousel-dnv-bg.png',
          caption: 'Slide 2',
          icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-dnv.png',
          description: "“Lumen5 is especially helpful for business people who don't have the technical experience to make their own videos.”",
          name: "Peter Lovegrove",
          title: "Media Relations and Content Manager"
        },
        {
          url: 'https://storage.googleapis.com/lumen5-site-images/carousel-mhi-bg.png',
          caption: 'Slide 3',
          icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-mitsubishi.png',
          description: "“Thanks to Lumen5, we have been able to cut down on the time and costs related to video making.”",
          name: "Adrian Ngo",
          title: "Global Advertising and Sponsorships"
        },
        {
        url: 'https://storage.googleapis.com/lumen5-site-images/carousel-ncstate-bg.png',
        caption: 'Slide 4',
        icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-ncstate.png',
          description: "“We knew Lumen5 was the right tool, so there was no point in looking any further.”",
          name: "Drew Sykes",
          title: "Social Media Director"
        },
        {
        url: 'https://storage.googleapis.com/lumen5-site-images/carousel-cms-bg.png',
        caption: 'Slide 5',
        icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-cms.png',
        description: "“Lumen5 is especially helpful for business people who don't have the technical experience to make their own videos.”",
        name: "Amsal Alihodzic",
        title: "Senior Online Marketing Manager"
        },
        {
        url: 'https://storage.googleapis.com/lumen5-site-images/carousel-mondadori-bg.png',
        caption: 'Slide 6',
        icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-mondadori.png',
          description: "“Lumen5 helps us with what we want to achieve on social: engagement and reach.”",
          name: "Alfonso Biondi",
          title: "Social Video Specialist"
        },
        {
        url: 'https://storage.googleapis.com/lumen5-site-images/carousel-berkshire-bg.png',
        caption: 'Slide 7',
        icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-berkshire.png',
          description: "“We were very attracted to Lumen5 due to the fact it was very turnkey and very simple. We could train a team of people to assist in the production of video.”",
          name: "Glen Wellbrock",
          title: "Senior Director of Marketing"
        },
      ];


    const [video1, setVideo1] = useState([
        "https://storage.googleapis.com/lumen5-site-images/prev_tracer.mp4",
        "https://storage.googleapis.com/lumen5-site-images/prev_billow.mp4",
        "https://storage.googleapis.com/lumen5-site-images/prev_vertex.mp4",
        "https://storage.googleapis.com/lumen5-site-images/prev_circuit.mp4",
        "https://storage.googleapis.com/lumen5-site-images/prev_vault.mp4",
        "https://storage.googleapis.com/lumen5-site-images/prev_notice.mp4",
        "https://storage.googleapis.com/lumen5-site-images/flux_prev.mp4",
        "https://storage.googleapis.com/lumen5-site-images/unity_prev.mp4",
        "https://storage.googleapis.com/lumen5-site-images/looper_prev.mp4"
    ]);

    const [contentmarketvideos, setcontentmarket] = useState([
        "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Hydrogen%20Economy.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/siemens-content.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Responsible%20Investment.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Workplace%20Evolution.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/The%20Pandemic.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Supply%20Chain%20Resilience.mp4"
    ]);

    const [communicationsvideos, setCommunication] = useState([
        "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Coral%20Reef%20Protection.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Zespri%20Selects%20SAP.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Textile%20Recycling.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Navigating%20the%20Seas.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Outstanding%20Researchers.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Fighting%20COVID-19.mp4"
    ])

    const [promotionalvideos, setPromotional] = useState([
        "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Global%20Leader%20(1).mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Remote%20Auditing.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Turbocompressor.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Innovation%20Awards.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Dormakaba%20(1).mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/V%20Plate.mp4"
    ])

    const [peopleAndculturevideos, setPeopleandculture] = useState([
        "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Women%20in%20Tech.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Women%20in%20Tech.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Create%20Your%20Future.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/siemens-culture.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Voice%20of%20Sulzer.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Fundraising%20Challenge.mp4"
    ])

    const [localizationvideos, setLocalization] = useState([
        "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Colliers%20(1).mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/siemens-local.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Agility.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Siemens%20Energy.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/DNV%20GL.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Colliers%20(2).mp4"
    ])

    const [val, setValue] = useState("contentmarket");

    const handleChange = (value) => {

        console.log(value)
        setValue(value);
    }
    
    return (
        <div className="container">
            {/* SECTION 1 */}
            <section className="section1 m-tb">
                <div>
                    <p className="sec1-p1">Video maker built to <br/>supercharge your <br/>current strategy</p>
                    <p className="sec1-p2">Easily make videos for <br/>content marketing, <br/>thought leadership, and <br/>brand awareness in a snap.</p>
                    <button>Sign up free</button>
                </div>
                <div>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-hero.png" alt="section1-i"/>
                </div>
            </section>

            {/* SECTION 2 */}
            <section className="section2 m-b">
                <div className="text-c">Over 6 million videos created by thousands of businesses</div>
                <div className="sec2-d2">
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-salesforce-color.png" alt="sec2-img1"/>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-pwc-color.png" alt="sec2-img2"/>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png" alt="sec2-img3"/>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-color.png" alt="sec2-img4"/>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merk-color.png" alt="sec2-img5"/>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png" alt="sec2-img6"/>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-mitsubishi-color.png" alt="sec2-img7"/>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png" alt="sec2-img8"/>
                    
                </div>
            </section>

            {/* SECTION 3 */}
            <section className="section3 m-b">
                <div className="text-c">Captivating video templates</div>
                <div className="text-c m-b">Drag and drop. No experience required.</div>
                <div className="sec3-vs">
                {video1.map((url,i) => {
                        console.log(url)
                        return <Video url={url} key={i}></Video>    
                    })}
                </div>
            </section>

            {/* SECTION 4 */}
            <section className="section4 m-b">
                <div>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-content.png" alt="sec4-img"/>
                </div>
                <div>
                    <div className="file-i"><i class="fa-solid fa-file-lines file-icon"></i></div>
                    <div>Transform blog posts <br/>into videos with A.I.</div>
                    <div>Starting from a blank page is hard — and <br/>with Lumen5, you don’t have to. Our AI-<br/>powered technology helps you storyboard <br/>your ideas, fit your content to a layout, and <br/>find music and visuals that enhance your <br/>message.</div>
                    <div><Link to="/signUp" className='nav-links'>Get started free <i class="fa-solid fa-arrow-right-long"></i></Link></div><hr/>
                    <div>“Lumen5 has enabled us to create more videos <br/>and drive more traffic, while having more time to <br/>invest in other projects.”</div>
                    <div className="width d-flex">
                        <div className="s4-rh-ld border">
                            <img className="width" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-drew-s.jpg" alt="s4-img"/>
                        </div>
                        <div className="s4-lh-ld border">
                            <div>Drew Sykes, Social Media Director</div>
                            <div>NC STATE</div>
                            <div>UNIVERSITY</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5 */}
            <section className="section4 border m-b">
                <div>
                    <div className="fa-solid fa-image "></div>
                    <div>Content library with <br/>millions of stock <br/>photos & videos</div>
                    <div>The Lumen5 media library gives you <br/>easy access to millions of photos,<br/>video clips, and audio files, so you <br/>always have the elements you need<br/>to create the perfect video.</div>
                    <div><Link to="/signUp" className='nav-links'>View plans <i class="fa-solid fa-arrow-right-long"></i></Link></div><hr/>
                    <div>“We promoted our downloadable study <br/>on top PPC skills for 2019 on social media <br/>using a short video created in Lumen5 in<br/>just 30 minutes, and decreased cost per<br/>download by 5x!”</div>
                    <div className="width d-flex">
                        <div className="s4-rh-ld border">
                            <img className="width" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-julia-o.jpg" alt="s4-img"/>
                        </div>
                        <div className="s4-lh-ld border">
                            <div>Julia Olennikova, Product Marketing</div>
                            <div>Manager</div>
                            <div className="width"><img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-semrush.png" alt="img-1"/></div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-media.png" alt="sec5-img"/>
                </div>
            </section>

            {/* SECTION 6 */}
            <section className="section4 m-b">
                <div>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-customize.png" alt="sec6-img"/>
                </div>
                <div>
                <div className="fa-solid fa-palette "></div>
                    <div>Making it easy to <br/>stay on brand</div>
                    <div>It has never been easier to stay on brand.<br/>With Lumen5 templates, you can customize<br/>each video with your unique logo, <br/>watermark, fonts, colors, and more.</div>
                    <div><Link to="/signUp" className='nav-links'>Get started free <i class="fa-solid fa-arrow-right-long"></i></Link></div><hr/>
                    <div>“Whenever I got in touch with Lumen5 I felt like my <br/>suggestions mattered and I was being listened to. <br/>It’s like I’m co-creating in a tiny way. It’s a great<br/>feeling.”</div>
                    <div className="width d-flex">
                        <div className="s4-rh-ld border">
                            <img className="width" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-promod-s.jpg" alt="s4-img"/>
                        </div>
                        <div className="s4-lh-ld border">
                            <div>Promod Sharma, Actuary & Insurance Consultant</div>
                            <div><img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-taxevity-color.png" alt="sec6-img"/></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7 */}
            <section>
                <h1 className="text-c">Explore video make with lumen5</h1>
                <div className="sec8-btns d-flex">
                    <button id="contentmarket" value="contentmarketing" onClick={() => {handleChange("contentmarketvideos")}}>ContentMarketing</button>
                    <button id="communicate" value="communication" onClick={() => {handleChange("communicationsvideos")}}>Communications</button>
                    <button id="promotion" value="promotional" onClick={() => {handleChange("promotionalvideos")}}>Promotional</button>
                    <button id="people" value="people" onClick={() => {handleChange("peopleAndculturevideos")}}>People&Culture</button>
                    <button id="local" value="localization" onClick={() => {handleChange("localizationvideos")}}>Localization</button>
                </div>
                <div className="sec3-vs">
                    {
                       
                    contentmarketvideos.map((url,i) => {
                        console.log(url)
                        return <Video url={url} key={i}></Video>    
                    })}
                </div>
               
            </section>
            
            {/* SECTION 8 */}
            <section className="section7">
                    <h1>Customer sucess stories</h1>
                    <div>Discover how leading brands are getting results with Lumen5.</div>
                    <div className="slide-container">
                    <Slide>
                        {slideImages.map((slideImage, index)=> (
                            <div className="each-slide" key={index}>
                                <div className="slide-img" style={{'backgroundImage': `url(${slideImage.url})`}}>
                                    <span className="slide-caption">
                                        <Image className="background-img" url={slideImage.icon}></Image>
                                        <p>{slideImage.description}</p>
                                        <p>{slideImage.name}</p>
                                        <p>{slideImage.title}</p>
                                        </span>
                                    
                                </div>
                            </div>
                        ))} 
                    </Slide>
                    </div>
            </section>
        </div>
    )
}