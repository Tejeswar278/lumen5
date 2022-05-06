import "./ypayment.css";

export const YpaymentDetails = (ypayment) => {
  return (
    <>
      <div id="container">
        <div id="leftDiv">
          <a href="./ypayment.jsx">
            <img
              src="data:image/png;base64,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"
              alt="#"
            />{" "}
          </a>
          <div id="lightText">
            <p class="subscriptionModel"> Subscribe to Premium - v1.5 (yearly)</p>
            <div class="amount">
              $ <span> </span>USD
              {ypayment.price}
            </div>
          </div>

          <div class="premiumPayPage">
            <h3>Premium - v1.5(yearly) </h3>
            <h3 id="price1">
              $ <span> </span>
              {ypayment.price}
            </h3>
          </div>

          <div id="toatlAmt">
            <h3>Subtotal</h3>
            <h3 id="price2">
              $ <span> </span>
              {ypayment.price}
            </h3>
          </div>

          <hr />
          <div id="tax">
            <p>Tax</p>
            <p>$0.00</p>
          </div>
          <hr />

          <div id="dueAmt">
            <h3>Total due today </h3>
            <h3 id="price3">
              $ <span> </span>
              {ypayment.price}
            </h3>
          </div>
        </div>

        <div class="container2">
          <h3>Pay with Card</h3>
          <form>
            <input type="email" placeholder="Email" />
            <div>
              <h4>Card information</h4>
              <input id="card" type="text" placeholder="1234 1234 1234 1234 " />
              <br />
              <input id="mmyycvc" type="text" placeholder="MM/YY" />
              <input id="mmyycvc" type="text" placeholder="CVC" />
            </div>
            <h4>Name on card</h4>
            <input id="name" type="text" />
            <h4>Billing address</h4>
            <select name="country" id="">
              <option value="India">India</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Nepal">Nepal</option>
            </select>
            <input className="name" type="text" placeholder="Address" />
            <br />

            <p className="EnterAdd">Enter address manually</p>

            <div className="right3">
              <div className="right31">
                <input type="checkbox" name="" id="" />
              </div>

              <div className="right32">
                <p>Sava my info for security 1-click checkout</p>
                <p className="right321">Pay faster on Lumen5 Technologys Ltd and thousands of sites.</p>
              </div>
            </div>
            <br />
            <input id="subscribe" type="submit" value="subscribe" />
          </form>
          <br />
          <div class="confirm">
            By confirming your subscription, you allow Lumen5 Technologies Ltd to charge your card for this payment and future payments in accordance with their
            terms.
          </div>
        </div>
      </div>
    </>
  );
};
