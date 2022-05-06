import { React, useState } from "react"
import "./Template.css"
import Modern_data from "./Data/Modern_data"
import Proff from "./Data/proff"
import Dynamic from "./Data/dyanamic-data"
import Geometric from "./Data/geometric"
import Rounded from "./Data/rounded"
import Gradients from "./Data/Gradients"
import Basic from "./Data/basic"
import { Button,Show_Button,Left_div_compo } from "./Button"
import Navbar from "./Navbar"


const Left_Div_Compo = ["Recent templates","Modern","Professional","Dynamic","Geometric","Rounded","Gradients","Basic"];

export const Template = () => {

     const [items] = useState(Modern_data);
     const [temps] = useState(Proff)
     const [dyna] = useState(Dynamic)
     const [gdata] = useState(Geometric)
     const [round] = useState(Rounded)
     const [grad] = useState(Gradients)
     const [basic] = useState(Basic)

     return(
          <div className="container">
               <div className="bgcolor">
                    <div className="component-div">
                         <div className="LeftDiv">
                              {Left_Div_Compo.map((e) => {
                                   return <Left_div_compo className="component"> {e} </Left_div_compo>  
                              })}
                         </div>
                         <div className="right-div">
                              <div>
                                   <span className="text">Choose a template</span>
                                   <span className="smalltext">Recommended color, font, and style combos, curated and ready to use.</span>
                              </div>
                              <div className="modern-div">
                                   <span className="smalltext">MODERN</span>
                              </div>
                              <div className="pictures">
                                   {
                                        items.map((elem) => {
                                             const  {button,name,video,image} = elem
                                             return(
                                                  <div className="images-div">
                                                       <video className="height"
                                                       poster={image} 
                                                       autoPlay
                                                       onMouseOver={event => event.target.play()} 
                                                       onMouseOut={event => event.target.pause()} 
                                                       controls="constrol"
                                                       src={video}
                                                       />
                                                       <div className="flex-div">
                                                            <p className="img-text">{name}</p>
                                                            <Button>{button}</Button>
                                                       </div>
                                                  </div>
                                             );
                                        })
                                   }  
                              </div> 
                              <div className="modern-div">
                                   <span className="smalltext">PROFESSIONAL</span>
                              </div>
                              <div className="pictures">
                                   {
                                        temps.map((elem) => {
                                             const  {image,button,name,video} = elem
                                             return(
                                                  <div className="images-div">
                                                       <video className="height"
                                                       poster={image} 
                                                       autoPlay
                                                       onMouseOver={event => event.target.play()} 
                                                       onMouseOut={event => event.target.pause()} 
                                                       controls="constrol"
                                                       src={video}
                                                       />
                                                       <div className="flex-div">
                                                            <p className="img-text">{name}</p>
                                                            <Button>{button}</Button>
                                                       </div>
                                                  </div>
                                             );
                                        })
                                   }  
                              </div>  
                              <div className="btn-div">
                                   <Show_Button>Show all </Show_Button>
                              </div>
                              <div className="modern-div">
                                   <span className="smalltext">DYNAMIC</span>
                              </div>
                              <div className="pictures">
                                   {
                                        dyna.map((elem) => {
                                             const  {image,button,name,video} = elem
                                             return(
                                                  <div className="images-div">
                                                       <video className="height"
                                                       poster={image} 
                                                       autoPlay
                                                       onMouseOver={event => event.target.play()} 
                                                       onMouseOut={event => event.target.pause()} 
                                                       controls="constrol"
                                                       src={video}
                                                       />
                                                       <div className="flex-div">
                                                            <p className="img-text">{name}</p>
                                                            <Button>{button}</Button>
                                                       </div>
                                                  </div>
                                             );
                                        })
                                   }  
                              </div> 
                              <div className="modern-div">
                                   <span className="smalltext">GEOMETRIC</span>
                              </div>
                              <div className="pictures">
                                   {
                                        gdata.map((elem) => {
                                             const  {image,button,name,video} = elem
                                             return(
                                                  <div className="images-div">
                                                       <video className="height"
                                                       poster={image} 
                                                       autoPlay
                                                       onMouseOver={event => event.target.play()} 
                                                       onMouseOut={event => event.target.pause()} 
                                                       controls="constrol"
                                                       src={video}
                                                       />
                                                       <div className="flex-div">
                                                            <p className="img-text">{name}</p>
                                                            <Button>{button}</Button>
                                                       </div>
                                                  </div>
                                             );
                                        })
                                   }  
                              </div>
                              <div className="btn-div">
                                   <Show_Button>Show all </Show_Button>
                              </div>
                              <div className="modern-div">
                                   <span className="smalltext">ROUNDED</span>
                              </div>
                              <div className="pictures">
                                   {
                                        round.map((elem) => {
                                             const  {image,button,name,video} = elem
                                             return(
                                                  <div className="images-div">
                                                       <video className="height"
                                                       poster={image} 
                                                       autoPlay
                                                       onMouseOver={event => event.target.play()} 
                                                       onMouseOut={event => event.target.pause()} 
                                                       controls="constrol"
                                                       src={video}
                                                       />
                                                       <div className="flex-div">
                                                            <p className="img-text">{name}</p>
                                                            <Button>{button}</Button>
                                                       </div>
                                                  </div>
                                             );
                                        })
                                   }  
                              </div>
                              <div className="modern-div">
                                   <span className="smalltext">GRADIENTS</span>
                              </div>
                              <div className="pictures">
                                   {
                                        grad.map((elem) => {
                                             const  {image,button,name,video} = elem
                                             return(
                                                  <div className="images-div">
                                                       <video className="height"
                                                       poster={image} 
                                                       autoPlay
                                                       onMouseOver={event => event.target.play()} 
                                                       onMouseOut={event => event.target.pause()} 
                                                       controls="constrol"
                                                       src={video}
                                                       />
                                                       <div className="flex-div">
                                                            <p className="img-text">{name}</p>
                                                            <Button>{button}</Button>
                                                       </div>
                                                  </div>
                                             );
                                        })
                                   }  
                              </div>
                              <div className="btn-div">
                                   <Show_Button>Show all </Show_Button>
                              </div>
                              <div className="modern-div">
                                   <span className="smalltext">BASIC</span>
                              </div>
                              <div className="pictures">
                                   {
                                        basic.map((elem) => {
                                             const  {image,button,name,video} = elem
                                             return(
                                                  <div className="images-div">
                                                       <video className="height"
                                                       poster={image} 
                                                       autoPlay
                                                       onMouseOver={event => event.target.play()} 
                                                       onMouseOut={event => event.target.pause()} 
                                                       controls="constrol"
                                                       src={video}
                                                       />
                                                       <div className="flex-div">
                                                            <p className="img-text">{name}</p>
                                                            <Button>{button}</Button>
                                                       </div>
                                                  </div>
                                             );
                                        })
                                   }  
                              </div>  
                              <div className="btn-div">
                              <Show_Button>Show all </Show_Button>
                              </div>             
                         </div>
                    </div>
               </div>
          </div>
     )
}