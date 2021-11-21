import Timeline from './components/Timeline';
import Member from './components/Member';

function App() {
  return (
    <div className='container'>
      <Timeline
        start={new Date(2021, 10, 17, 0, 0, 0, 0)}
        end={new Date(2021, 11, 7, 0, 0, 0, 0)}
        sprint={12}
      />
      <Member name='Alberto' surname='Caparros' color='steelblue' />
      <Member name='Juen' surname='Cruise' color='steelblue' />
    </div>
  );
}

export default App;
