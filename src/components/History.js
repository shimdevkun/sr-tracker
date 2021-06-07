import HistoryTable from './HistoryTable';
import ButtonExit from './ButtonExit';

const History = ({ gameStats }) => {
  return (
    <section id="history">
      <div className="pop-up">
        <ButtonExit />
        {gameStats.length > 0 ? <HistoryTable gameStats={gameStats} /> : 'No data available'}
      </div>
    </section>
  )
}

export default History;
