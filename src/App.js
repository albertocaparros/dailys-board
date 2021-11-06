import Header from './components/Header';
import Member from './components/Member';

function App() {
  return (
    <div className='container'>
      <Header />
      <Member name='Alberto' surname='Caparros' color='steelblue' />
      <Member name='Juen' surname='Cruise' color='steelblue' />
    </div>
  );
}

export default App;
