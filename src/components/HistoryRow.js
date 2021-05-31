const HistoryRow = ({ gameStat }) => {
  return (
    <tr className="history__row">
      <td>{gameStat.skillRanking}</td>
      <td>{gameStat.healing}</td>
      <td>{gameStat.hero}</td>
      <td>{gameStat.map}</td>
    </tr>
  )
}

export default HistoryRow;
