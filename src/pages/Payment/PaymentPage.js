import "./payment.css";
const PaymentPage = () => {
  return (
    <div className="payment-container">
      <div className="container21">
        <h1>Payment Information</h1>
        <form id="payment-form" className="paymentform">
          <div className="form-group">
            <label htmlFor="card-number">Card Number:</label>
            <input
              type="text"
              id="card-number"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="card-name">Cardholder Name:</label>
            <input type="text" id="card-name" placeholder="John Doe" required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiry-date">Expiry Date:</label>
              <input
                type="text"
                id="expiry-date"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" placeholder={123} required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input type="text" id="amount" placeholder="$100.00" required />
          </div>
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
