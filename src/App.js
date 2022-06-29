import Web3 from 'web3';
import logo from './logo.svg';
import HomePage from './pages/Homepage';

function App() {
  const web3 = new Web3(Web3.givenProvider || 'https://data-seed-prebsc-1-s1.binance.org:8545');
  web3.eth.getAccounts().then(res=>{
    console.log(res);
    console.log(web3.currentProvider);
  });
  // check web3 provider url
  

  return (

    <div className="App">

      <HomePage />
    </div>
  );
}

export default App;
