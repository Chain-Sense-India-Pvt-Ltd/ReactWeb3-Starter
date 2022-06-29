import Web3 from 'web3';
import logo from './logo.svg';
import HomePage from './pages/Homepage';

function App() {
  const checkWalletIsConnected = () => {
    if (!ethereum) {
      alert('Please connect to your wallet');
      return;
    } else {
      ethereum.enable();

    }
  }
  return (

    <div className="App">

      <HomePage />
    </div>
  );
}

export default App;
