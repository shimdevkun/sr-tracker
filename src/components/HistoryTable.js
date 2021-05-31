import HistoryHeaders from "./HistoryHeaders";
import HistoryRow from "./HistoryRow";

const HistoryTable = ({ gameStats }) => {
  return (
    <table>
      <HistoryHeaders />
      <tbody>
        {gameStats.slice(0).reverse().map((gameStat, index) => <HistoryRow key={index} gameStat={gameStat} />)}
      </tbody>
    </table>
  )
}

export default HistoryTable;
