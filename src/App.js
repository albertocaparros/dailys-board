import Timeline from './components/Timeline';
import Member from './components/Member';

function App() {
  return (
    <div className='container'>
      <Timeline
        start={new Date(2021, 16, 10)}
        end={new Date(2021, 7, 12)}
        sprint={12}
      />
      <Member name='Alberto' surname='Caparros' color='steelblue' />
      <Member name='Juen' surname='Cruise' color='steelblue' />
    </div>
  );
}

export default App;
