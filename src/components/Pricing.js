import "./pri.css";
import { Button2 } from "./button2";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"
export const Pricingfn = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch("http://localhost:8080/prices").then((d) =>
      d.json()
    );
    setPrices(data);
  };
  const navigate = useNavigate();
  return (
    <div className="pricing3">
      <h4 className="jk">PRICING</h4>
      <h1 className="O">Plans for your video content creation strategy</h1>
      <div className="c">
        {prices.map((t) => (
          <div className="C">
            <h4 className="ch">{t.title}</h4>
            <p className="cp">{t.desc}</p>
            <div className="M">
              <h3 className="ch">{t.price}</h3>
              <h5 className="ch">{t.usd}</h5>
            </div>
            <p className="chp">{t.pdesc}</p>
            <h6 className="cs">{t.save}</h6>
            <div className="Bt1">
              <Button2 className="Bt" onClick={() => {navigate("/ypayment")}}>{t.button}</Button2>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h3>Over 6 million videos created by thousands of businesses</h3>
      <div className="B">
        <Button2>Compare plans</Button2>
        <p>or</p>
        <Button2>Get started today</Button2>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="N">
        <div className="N1">
          <div className="L">
            <img src="https://storage.googleapis.com/lumen5-site-images/comment-darren.png" />
            <p>
              "A member from our ProBlogger group created a video using Lumen5
              and published it on Facebook. In 24 hours the video got 300,000
              views, just using this little tool."
            </p>
            <p className="np">DARREN ROWSE</p>
          </div>
          <div className="L">
            <img src="https://storage.googleapis.com/lumen5-site-images/comment-nicholas.png" />
            <p>
              "By using Lumen5, we increased our Facebook engagements by 448%,
              and boosted our reach dramatically. Our page grew from 5,000 to
              23,000 likes within a week!"
            </p>
            <p className="np">NICHOLAS YANG</p>
          </div>
          <div className="L">
            <img src="https://storage.googleapis.com/lumen5-site-images/comment-tova.png" />
            <p>
              "My first video already got over 650,000 views on my facebook
              page. It is an amazing program and I’m really impressed! It made
              converting a blog post into a video so easy."
            </p>
            <p className="np">TOVA LEIGH</p>
          </div>
        </div>
        <div className="N2">
          <div className="L">
            <img src="https://storage.googleapis.com/lumen5-site-images/comment-lauren.png" />
            <p>
              "I created a video using an older blog post and it's been a huge
              hit! Great way to freshen up and share things again—170,000 views
              and climbing!"
            </p>
            <p className="np">LAUREN CASPER</p>
          </div>
          <div className="L">
            <img src="https://storage.googleapis.com/lumen5-site-images/comment-steve.png" />
            <p>
              "Lumen5 is fantastic! I made a video and now it has gone viral! It
              has 22,000 views from a reach of 65,000. No advertising. No
              promotion."
            </p>
            <p className="np">STEVE LAST</p>
          </div>
          <div className="L">
            <img src="https://storage.googleapis.com/lumen5-site-images/comment-kaylene.png" />
            <p>
              My Lumen5 video went viral with over3 million reach and it grew my
              page from 1500 to 5000 likes! I’m making these for all my top
              posts."
            </p>
            <p className="np">KAYLENE GEORGE</p>
          </div>
        </div>
      </div>
      <h1 className="Q">Choose the plan that's right for you</h1>
      <hr></hr>
      <h4 className="H">Usage</h4>
      <div className="Box">
        <div className="Box1">
          <h5>Videos per month</h5>
          <h5>Saved Templates</h5>
          <h5>Workspaces</h5>
          <h5>Instant videos</h5>
          <h5>Team members</h5>
          <h5>Brand kits</h5>
        </div>
        <div className="Box2">
          <div>
            <h5>Unlimited</h5>
            <h5>1</h5>
            <h5>1</h5>
            <h5>1</h5>
            <h5>1</h5>
            <h5>0</h5>
          </div>
          <div>
            <h5>Unlimited</h5>
            <h5>1</h5>
            <h5>1</h5>
            <h5>1</h5>
            <h5>1</h5>
            <h5>1</h5>
          </div>
          <div>
            <h5>Unlimited</h5>
            <h5>5</h5>
            <h5>5</h5>
            <h5>10</h5>
            <h5>Up to 3</h5>
            <h5>3</h5>
          </div>
          <div>
            <h5>Custom</h5>
            <h5>Custom</h5>
            <h5>Custom</h5>
            <h5>Custom</h5>
            <h5>Custom</h5>
            <h5>Custom</h5>
          </div>
        </div>
      </div>
      <h4 className="H">Rendering</h4>
      <div className="Box">
        <div className="Box1">
          <h5>Resolution</h5>
          <h5>Landscape</h5>
          <h5>Square</h5>
          <h5>Vertical</h5>
        </div>
        <div className="Box2">
          <div>
            <h5>720p</h5>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
          </div>
          <div>
            <h5>1080p</h5>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
          </div>
          <div>
            <h5>1080p</h5>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
          </div>
          <div>
            <h5>1080p</h5>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
          </div>
        </div>
      </div>
      <h4 className="H">Branding</h4>
      <div className="Box">
        <div className="Box1">
          <h5>branded another</h5>
          <h5>Popular templates</h5>
          <h5>custom other</h5>
          <h5>Custom fonts</h5>
          <h5>Custom colors</h5>
          <h5>Watermark upload</h5>
          <h5>Upload your own fonts</h5>
          <h5>Custom templates</h5>
        </div>
        <div className="Box2">
          <div>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <h5>—</h5>
            <h5>—</h5>
            <h5>—</h5>
            <h5>—</h5>
            <h5>—</h5>
          </div>
          <div>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <h5>—</h5>
            <h5>—</h5>
            <h5>—</h5>
          </div>
          <div>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <h5>—</h5>
          </div>
          <div>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
          </div>
        </div>
      </div>
      <h4 className="H">Media</h4>
      <div className="Box">
        <div className="Box1">
          <h5>Millions of free-to-use videos and images</h5>
          <h5>Upload your own videos & photos</h5>
          <h5>Upload your own audio tracks</h5>
          <h5>Unlimited premium media</h5>
          <h5>Exclusive media marketplace</h5>
          <h5>Record your own voiceover</h5>
        </div>
        <div className="Box2">
          <div>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <h5>—</h5>
            <h5>—</h5>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
          </div>
          <div>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <h5>—</h5>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
          </div>
          <div>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <h5>25/month</h5>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
          </div>
          <div>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <h5>25/month</h5>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
          </div>
        </div>
      </div>
      <h4 className="H">Team management</h4>
      <div className="Box">
        <div className="Box1">
          <h5>Brand management</h5>
          <h5>Team permissions</h5>
          <h5>Workspace management</h5>
          <h5>Two-factor authentication</h5>
        </div>
        <div className="Box2">
          <div>
            <h5>—</h5>
            <h5>—</h5>
            <h5>—</h5>
            <h5>—</h5>
          </div>
          <div>
            <h5>—</h5>
            <h5>—</h5>
            <h5>—</h5>
            <h5>—</h5>
          </div>
          <div>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <h5>—</h5>
          </div>
          <div>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
          </div>
        </div>
      </div>
      <h4 className="H">Support</h4>
      <div className="Box">
        <div className="Box1">
          <h5>Help center access</h5>
          <h5>Chat support</h5>
          <h5>Customized support</h5>
          <h5>Invoiced billing</h5>
        </div>
        <div className="Box2">
          <div>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <h5>—</h5>
            <h5>—</h5>
          </div>
          <div>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <h5>—</h5>
            <h5>—</h5>
          </div>
          <div>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <h5>—</h5>
            <h5>—</h5>
          </div>
          <div>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
            <p className="check">
              <FontAwesomeIcon icon={faCheck} />
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <h3>A few frequently asked questions</h3>
      <br></br>
      <br></br>
      <br></br>
      <div className="Que">
        <div className="Que1">
          <h4>What if I only need Lumen5 for a set amount of time?</h4>
          <p>That's fine! You can cancel your account anytime.</p>
          <h4> What happens to my videos if I cancel?</h4>
          <p>All the videos you create are yours to keep forever and ever.</p>
        </div>
        <div className="Que2">
          <h4>Do you have a non-profit discount?</h4>
          <p> We do. Contact us for more information.</p>
          <h4> How do I pay for my plan?</h4>
          <p>
            You can pay with Visa, Mastercard, and American Express. All prices
            are in USD. Invoiced billing is available on the Enterprise plan.
          </p>
        </div>
      </div>
    </div>
  );
};
