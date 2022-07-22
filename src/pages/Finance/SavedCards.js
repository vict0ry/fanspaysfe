import './SavedCards.css';
export const SavedCards = ({type, number, expiered}) => {
  const getCard = () => {
    switch(type) {
      case 'VISA':
        return <div className="credit-card visa selectable">
          <div className="credit-card-last4">
            {number}
          </div>
          <div className="credit-card-expiry">
            {expiered}
          </div>
        </div>
      case 'MASTERCARD':
        return <div className="credit-card mastercard selectable">
          <div className="credit-card-last4">
            {number}
          </div>
          <div className="credit-card-expiry">
            {expiered}
          </div>
        </div>;
      case 'AMEX':
        return <div className="credit-card amex selectable">
          <div className="credit-card-last4">
            {number}
          </div>
          <div className="credit-card-expiry">
            {expiered}
          </div>
        </div>
      case 'DISCOVER':
        return <div className="credit-card discover selectable">
          <div className="credit-card-last4">
            {number}
          </div>
          <div className="credit-card-expiry">
            {expiered}
          </div>
        </div>
      case 'DINERS':
        return <div className="credit-card diners selectable">
          <div className="credit-card-last4">
            {number}
          </div>
          <div className="credit-card-expiry">
            {expiered}
          </div>
        </div>
      case 'JCB':
        return <div className="credit-card jcb selectable">
          <div className="credit-card-last4">
            {number}
          </div>
          <div className="credit-card-expiry">
            {expiered}
          </div>
        </div>
      case 'UNIONPAY':
        return <div className="credit-card unionpay selectable">
          <div className="credit-card-last4">
            {number}
          </div>
          <div className="credit-card-expiry">
            {expiered}
          </div>
        </div>
    }
  }
  return <div>
    {getCard()}
  </div>
}