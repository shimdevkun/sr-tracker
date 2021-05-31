import HistoryTable from './HistoryTable';
import ButtonExit from './ButtonExit';

const History = ({ gameStats }) => {
  return (
    <section id="history">
      <ButtonExit />
      {gameStats.length > 0 ? <HistoryTable gameStats={gameStats} /> : 'No data available'}
    </section>
  )
}

export default History;
