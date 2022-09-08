import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import NavbarLandingpage from "./NavbarLandingpage"
import Footer from "./Footer";
import Copyright from "./Copyright";
import styled from "styled-components";
import {brandImg, slideImages,posterVid1,video1,contentmarketvideos,communicationsvideos,promotionalvideos,peopleAndculturevideos,localizationvideos,posterForContentMarket,posterForCommunication,posterForLocalization,posterForPeopleandculture,posterForPormotional} from "./Data/HomePageData";



export default function Home(){

    const [btn1, setBtn1] = useState(true)
    const [btn2, setBtn2] = useState(false)
    const [btn3, setBtn3] = useState(false)
    const [btn4, setBtn4] = useState(false)
    const [btn5, setBtn5] = useState(false)

    
    // Changing the state and style 

    const handleChange = (e) => {
            console.log("hanle click worked",e.target.value)
            if(e.target.value == "contentmarketing"){
                setVidChabge(contentmarketvideos)
                setPosterChange(posterForContentMarket)
                setBtn1(true)
                setBtn2(false)
                setBtn3(false)
                setBtn4(false)
                setBtn5(false)
            }
            if(e.target.value == "communication"){
                setVidChabge(communicationsvideos)
                setPosterChange(posterForCommunication)
                setBtn1(false)
                setBtn2(true)
                setBtn3(false)
                setBtn4(false)
                setBtn5(false)
            }
            if(e.target.value == "promotional"){
                setVidChabge(promotionalvideos)
                setPosterChange(posterForPormotional)
                setBtn1(false)
                setBtn2(false)
                setBtn3(true)
                setBtn4(false)
                setBtn5(false)
            }
            if(e.target.value == "people"){
                setVidChabge(peopleAndculturevideos)
                setPosterChange(posterForPeopleandculture)
                setBtn1(false)
                setBtn2(false)
                setBtn3(false)
                setBtn4(true)
                setBtn5(false)
            }
            if(e.target.value == "localization"){
                setVidChabge(localizationvideos)
                setPosterChange(posterForLocalization)
                setBtn1(false)
                setBtn2(false)
                setBtn3(false)
                setBtn4(false)
                setBtn5(true)
            }
    }


    //Changing the style using styled components

    const BtnStyle1 = styled.button`
        color : ${btn1 ? "white" : "blue"};
        background-color : ${btn1 ? "blue" : "white"};
        &:hover {
            text-decoration : underline;
            cursor: pointer;
            color : white;
            background-color : ${btn1 ? "blue" : "#4949D7"};
        }
    `

    const BtnStyle2 = styled.button`
        color : ${btn2 ? "white" : "blue"};
        background-color : ${btn2 ? "blue" : "white"};
        &:hover {
            text-decoration : underline;
            cursor: pointer;
            color : white;
            background-color : ${btn2 ? "blue" : "#4949D7"};
        }
    `

    const BtnStyle3 = styled.button`
        color : ${btn3 ? "white" : "blue"};
        background-color : ${btn3 ? "blue" : "white"};
        &:hover {
            text-decoration : underline;
            cursor: pointer;
            color : white;
            background-color : ${btn3 ? "blue" : "#4949D7"};
        }
    `

    const BtnStyle4 = styled.button`
        color : ${btn4 ? "white" : "blue"};
        background-color : ${btn4 ? "blue" : "white"};
        &:hover {
            text-decoration : underline;
            cursor: pointer;
            color : white;
            background-color : ${btn4 ? "blue" : "#4949D7"};
        }
    `

    const BtnStyle5 = styled.button`
        color : ${btn5 ? "white" : "blue"};
        background-color : ${btn5 ? "blue" : "white"};
        &:hover {
            text-decoration : underline;
            cursor: pointer;
            color : white;
            background-color : ${btn5 ? "blue" : "#4949D7"};
        }
    `

    // VIDEO COMPONENT FOR RE-RENDERING
    const Video = ({url,poster}) => {
        return (
                <video
                    src={url}
                    poster={poster}
                    onMouseOver={event => {event.target.play()}}
                    onMouseOut={event => event.target.pause()}
                    muted={true}
            />
        )
    }

    // IMAGE COMPONENT FOR RE-RENDERING in sliding images in section 8
    const Image = ({url}) => {
        return (
            <img className="back-img" src={url} alt="lumen"/>
        )
    }
    
    //Changing the state of set of videos and posters
    const [vidchange, setVidChabge] = useState(contentmarketvideos)
    const [Posterchange, setPosterChange] = useState(posterForCommunication)
    
    
    return (
        
        <div className="containerlanding">

            {/*Navbar component */}
            <NavbarLandingpage></NavbarLandingpage>


            {/* SECTION 1 */}
            <section className="section1 m-t">
                <div className="sec1-1">
                    <p className="sec1-p1">Video maker built to <br/>supercharge your <br/>current strategy</p>
                    <p className="sec1-p2">Easily make videos for <br/><b>content marketing,<br/>thought leadership,</b>  and <br/><b>brand awareness</b> in a snap.</p>
                    <button className="signupbtn">Sign up free</button>
                </div>
                <div className="sec1-2">
                    <img className="img1" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-hero.png" alt="section1-i"/>
                </div>
            </section>

            {/* SECTION 2 */}
            <section className="section2">
                <div className="text-c sec2-1">Over 6 million videos created by thousands of businesses</div>
                <div className="sec2-d2">
                    {brandImg.map((imag,i) => {
                        return <img 
                                    key={i} 
                                    src={imag} 
                                    className="brandImgClass"
                                    />
                        }
                    )}
                </div>
            </section>

            {/* SECTION 3 */}
            <section className="section3">
                <div className="text-c sec3-1">Captivating video templates</div>
                <div className="text-c sec3-2">Drag and drop. No experience required.</div>
                <div className="sec3-vs">
                    {video1.map((url,i) => {
                        return <Video 
                                    className="sec3-vd" 
                                    url={url} 
                                    poster={posterVid1[i]} 
                                    key={i}>

                                    </Video>    
                        }
                    )}
                </div>
            </section>

            {/* SECTION 4 */}
            <section className="section4 ">
                <div className="imgdiv">
                    <img className="sec4-img" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-content.png" alt="sec4-img"/>
                </div>
                <div className="sec4-2">
                    <div className="file-i"><i class="fa-solid fa-file-lines file-icon"></i></div>
                    <div className="sec4-2-2">Transform blog posts <br/>into videos with A.I.</div>
                    <div className="sec4-2-3">Starting from a blank page is hard — and <br/>with Lumen5, you don’t have to. Our AI-<br/>powered technology helps you storyboard <br/>your ideas, fit your content to a layout, and <br/>find music and visuals that enhance your <br/>message.</div>
                    <div className="sec4-2-4"><Link to="/signup" className='nav-links'>Get started for free <i class="fa-solid fa-arrow-right-long"></i></Link></div><hr className="hline"/>
                    <div className="sec4-2-5">“Lumen5 has enabled us to create more videos <br/>and drive more traffic, while having more time to <br/>invest in other projects.”</div>
                    <div className="width d-flex">
                        <div className="s4-rh-ld  ">
                            <img className="width sec4-img1" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-drew-s.jpg" alt="s4-img"/>
                        </div>
                        <div className="s4-lh-ld ">
                            <div><b>Drew Sykes</b>, Social Media Director</div>
                            <div className="sec4-nc">NC STATE</div>
                            <div className="sec4-un">UNIVERSITY</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5 */}
            <section className=" section5">
                <div className="sec5-1">
                    <div className="file-i" ><i className="fa-solid fa-image file-icon"></i></div>
                    <div className="sec4-2-2">Content library with <br/>millions of stock <br/>photos & videos</div>
                    <div className="sec5-1-3">The Lumen5 media library gives you <br/>easy access to millions of photos,<br/>video clips, and audio files, so you <br/>always have the elements you need<br/>to create the perfect video.</div>
                    <div className="sec5-1-4"><Link to="/signUp" className='nav-links'>View plans <i class="fa-solid fa-arrow-right-long"></i></Link></div><hr className="hline"/>
                    <div className="sec5-1-5">“We promoted our downloadable study <br/>on top PPC skills for 2019 on social media <br/>using a short video created in Lumen5 in<br/>just 30 minutes, and decreased cost per<br/>download by 5x!”</div>
                    <div className="width d-flex">
                        <div className="s4-rh-ld">
                            <img className="width sec4-img1" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-julia-o.jpg" alt="s4-img"/>
                        </div>
                        <div className="s4-lh-ld">
                            <div className="sec5-1-6-2"><b>Julia Olennikova</b>, Product Marketing</div>
                            <div className="sec5-1-6-2">Manager</div>
                            <div className="width"><img className="width2" src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-semrush.png" alt="img-1"/></div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="sec5-img" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-media.png" alt="sec5-img"/>
                </div>
            </section>

            {/* SECTION 6 */}
            <section className=" section4 section6">
                <div className="">
                    <img className="sec4-img" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-customize.png" alt="sec6-img"/>
                </div>
                <div className="sec4-2">
                <div  className="file-i"><i className="fa-solid fa-palette file-icon"></i></div>
                    <div className="sec4-2-2">Making it easy to <br/>stay on brand</div>
                    <div className="sec6-2-3">It has never been easier to stay on brand.<br/>With Lumen5 templates, you can customize<br/>each video with your unique logo, <br/>watermark, fonts, colors, and more.</div>
                    <div className="sec4-2-4"><Link to="/signUp" className='nav-links'>Get started free <i className="fa-solid fa-arrow-right-long"></i></Link></div><hr className="hline"/>
                    <div className="sec4-2-5">“Whenever I got in touch with Lumen5 I felt like my <br/>suggestions mattered and I was being listened to. <br/>It’s like I’m co-creating in a tiny way. It’s a great<br/>feeling.”</div>
                    <div className="width d-flex">
                        <div className="s4-rh-ld">
                            <img className="width sec4-img1" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-promod-s.jpg" alt="s4-img"/>
                        </div>
                        <div className="s4-lh-ld">
                            <div className="sec6-mb"><b>Promod Sharma</b>, Actuary & Insurance Consultant</div>
                            <div><img className="width2" src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-taxevity-color.png" alt="sec6-img"/></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7 */}
            <section className="section7">
                <h1 className="text-c sec7-1">Explore videos make with Lumen5</h1>
                <div className="sec8-btns d-flex">
                    <BtnStyle1 
                        id="contentmarket" 
                        value="contentmarketing"
                        onClick={handleChange}
                        >
                            ContentMarketing
                        </BtnStyle1>
                    <BtnStyle2 
                        id="communicate" 
                        value="communication" 
                        onClick={handleChange}>
                            Communications
                        </BtnStyle2>
                    <BtnStyle3 
                        id="promotion" 
                        value="promotional"
                        onClick={handleChange}>
                            Promotional
                        </BtnStyle3>
                    <BtnStyle4 
                        id="people" 
                        value="people" 
                        onClick={handleChange}>
                            People Culture
                        </BtnStyle4>
                    <BtnStyle5 
                        id="local" 
                        value="localization" 
                        onClick={handleChange}>
                            Localization
                        </BtnStyle5>
                </div>
                <div className="sec3-vs">
                    {
                       
                    vidchange.map((url,i) => {
                        return <Video url={url} 
                        poster={Posterchange[i]} key={i}></Video>    
                    })}
                </div>
               
            </section>
            
            {/* SECTION 8 */}
            <section className="section8 ">
                    <h1 className="sec8-1">Customer sucess stories</h1>
                    <div className="sec8-2">Discover how leading brands are getting results with Lumen5.</div>
                    <div className="slide-container">
                    <Slide className="slide-comp">
                        {slideImages.map((slideImage, index)=> (
                            <div className="each-slide" key={index}>
                                <div className="slide-img" style={{'backgroundImage': `url(${slideImage.url})`}}>
                                    <span className="slide-caption">

                                        <div className="box-c">
                                            <Image className="background-img" url={slideImage.icon}></Image>
                                            <p className="p-1">{slideImage.description}</p>
                                            <p className="p-2">{slideImage.name}</p>
                                            <p className="p-3">{slideImage.title}</p>
                                            <p className="lastp"><Link to="/signUp" className="nav-linkss">Read story </Link><i class="fa-solid fa-arrow-right-long"></i></p>
                                        </div>
                                        </span>
                                    
                                </div>
                            </div>
                        ))} 
                    </Slide>
                    
                    </div>
                    <div className="sec8-2">   
                        {slideImages.map((slideImage,i)=>{
                            return (
                                <Image className="sec8-2" url={slideImage.icon} key={i}></Image>
                            )
                        })}
                    </div>
            </section>

            {/* SECTION 9 */}
            <section className="section9 width ">
                <div className="heading9 text-c">
                Tips and tricks for amplifying<br/>your brand with video
                </div>
                <div className="cards d-flex width">
                    
                    <div className="innercard d-flex w-50">
                        <div className="card1 borderlite w-30">
                            <img className="card-imgs" src="https://lumen5.com/learn/wp-content/uploads/2019/05/Video-Marketing-How-to-Get-Started.jpg" alt="card"/>
                            <div className="text-b p-l m-b">BLOG</div>
                            <div className="text-l p-l mb1 ">Video Marketing: <br/>How to Get Started <br/>[Step by Step]</div>
                            <div className="text-r link">Read Story <i class="fa-solid fa-arrow-right-long"></i></div>
                            
                        </div>
                        <div className="card2 borderlite w-30">
                        <img className="card-imgs" src="https://lumen5.com/learn/wp-content/uploads/2019/08/Host-an-Instagram-Takeover-in-7-Simple-Steps.jpg" alt="card"/>
                            <div className="text-b p-l m-b">BLOG</div>
                            <div className="text-l p-l mb2">How to Increase <br/>Your Facebook <br/>Video Views <br/>[Complete Guide]</div>
                            <div className="text-r link">Read Story <i class="fa-solid fa-arrow-right-long"></i></div>
                        </div>
                        <div className="card3 borderlite w-30">
                        <img className="card-imgs" src="https://lumen5.com/learn/wp-content/uploads/2018/10/photo-1518406432532-9cbef5697723.jpeg" alt="card"/>
                            <div className="text-b p-l m-b">BLOG</div>
                            <div className="text-l p-l mb3">The Importance of <br/>Video in Your <br/>Content Strategy</div>
                            <div className="text-r link">Read Story <i class="fa-solid fa-arrow-right-long"></i></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 10 */}
            <section className="section10 width">
                <div >
                    <div className="sec10-0"></div>
                    <div className="sec10-1">
                    Join 800,000+ companies that are <br/>using Lumen5 to tell their stories.
                    </div>
                    <div className="sec10-2">
                    Lumen5 is a video creation software that helps marketers, <br/>publishers, and brands create video content in a breeze, <br/>without any technical expertise.
                    </div>
                    <div><button className="lastbtn"><Link className="signupbtnlast nav-links" to="/signup">Sign up free</Link></button></div>
                </div>
            </section>

            {/* SECTION 11 */}
            <section className="section11">
            <Footer></Footer>
            <Copyright></Copyright>
            </section>
        </div>
       
    )
}