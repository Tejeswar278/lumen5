import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import NavbarLandingpage from "./NavbarLandingpage"
import Footer from "./Footer";
import Copyright from "./Copyright";
import styled from "styled-components";
import {PosterContent,VideoContent,brandImg, slideImages,posterVid1,video1} from "./Data/HomePageData";

const BtnStyle = styled.button`
        color : ${props => props.color};
        background-color : ${props => props.backgroundColor};
        border : 1px solid blue;
        &:hover {
            text-decoration : underline;
            cursor: pointer;
            color : white;
            background-color : ${props => props.backgroundcolor ? "blue" : "#4949D7"};
        }
    `

export default function Home(){
    

    const [btn, setBtn] = useState("contentmarketing")
    const btnTypes = ["contentmarketing","communication","promotional","people","localization"]
    const [vidchange, setVidChange] = useState(VideoContent["contentmarketing"])
    const [Posterchange, setPosterChange] = useState(PosterContent["contentmarketing"])

    const handleChange = (e) => {
            setBtn(e.target.value)
            setVidChange(VideoContent[e.target.value])
            setPosterChange(PosterContent[e.target.value])
    }

    // VIDEO COMPONENT FOR RE-RENDERING
    const Video = ({url,poster}) => {
        return (
            <div className="sec7-vd">
                <video
                    className="videoTag"
                    
                    src={url}
                    poster={poster}
                    onMouseOver={event =>   {
                                                event.target.play();
                                            }}
                    onMouseOut={event => {event.target.pause()}}
                    muted={true}
                />
                {/* <div className="play-btn-div">
                        <BsPlayFill className="play-btn"/>
                    </div> */}

                </div>
        )
    }

    // IMAGE COMPONENT FOR RE-RENDERING in sliding images in section 8
    const Image = ({url}) => {
        return (
            <img className="back-img" src={url} alt="lumen"/>
        )
    }
    
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
                                    alt="brand"
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
                    <div className="file-i"><i className="fa-solid fa-file-lines file-icon"></i></div>
                    <div className="sec4-2-2">Transform blog posts <br/>into videos with A.I.</div>
                    <div className="sec4-2-3">Starting from a blank page is hard — and <br/>with Lumen5, you don’t have to. Our AI-<br/>powered technology helps you storyboard <br/>your ideas, fit your content to a layout, and <br/>find music and visuals that enhance your <br/>message.</div>
                    <div className="sec4-2-4"><Link to="/signup" className='nav-links'>Get started for free <i className="fa-solid fa-arrow-right-long"></i></Link></div><hr className="hline"/>
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
                    <div className="sec5-1-4"><Link to="/pricing" className='nav-links'>View plans <i className="fa-solid fa-arrow-right-long"></i></Link></div><hr className="hline"/>
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
                <div className="sec7-btns d-flex">
                    {btnTypes.map((val,i) => {
                        return(
                            <BtnStyle onClick={handleChange} key={i} value={val} color={btn === val ? 'white' : 'blue'} backgroundColor={btn === val ? 'blue' : 'white  '}>
                                {val}
                            </BtnStyle>
                        )    
                        })
                    }
                    
                </div>
                <div className="sec3-vs">
                    {
                       
                    vidchange.map((url,i) => {
                        // console.log("url:",vidchange)
                        return <Video url={url} 
                                    poster={Posterchange[i]} 
                                    key={i}>
                                </Video>    
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
                                            <p className="lastp"><Link to="/signUp" className="nav-linkss">Read story </Link><i className="fa-solid fa-arrow-right-long"></i></p>
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
                            <div className="text-r link">Read Story <i className="fa-solid fa-arrow-right-long"></i></div>
                            
                        </div>
                        <div className="card1 borderlite w-30">
                        <img className="card-imgs" src="https://lumen5.com/learn/wp-content/uploads/2019/08/Host-an-Instagram-Takeover-in-7-Simple-Steps.jpg" alt="card"/>
                            <div className="text-b p-l m-b">BLOG</div>
                            <div className="text-l p-l mb2">How to Increase <br/>Your Facebook <br/>Video Views <br/>[Complete Guide]</div>
                            <div className="text-r link">Read Story <i className="fa-solid fa-arrow-right-long"></i></div>
                        </div>
                        <div className="card1 borderlite w-30">
                        <img className="card-imgs" src="https://lumen5.com/learn/wp-content/uploads/2018/10/photo-1518406432532-9cbef5697723.jpeg" alt="card"/>
                            <div className="text-b p-l m-b">BLOG</div>
                            <div className="text-l p-l mb3">The Importance of <br/>Video in Your <br/>Content Strategy</div>
                            <div className="text-r link">Read Story <i className="fa-solid fa-arrow-right-long"></i></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 10 */}
            <section className="section10 width">
                <div className="sec10">
                    <div className="sec10-0"></div>
                    <div className="sec10-1">
                    Join 800,000+ companies that are <br/>using Lumen5 to tell their stories.
                    </div>
                    <div className="sec10-2">
                    Lumen5 is a video creation software that helps marketers, <br/>publishers, and brands create video content in a breeze, <br/>without any technical expertise.
                    </div>
                    <div className="sec10-btn">
                            <Link 
                                className="lastbtn" 
                                to="/signup">
                                    Sign up free
                                </Link>
                        </div>
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