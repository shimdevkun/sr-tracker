const HistoryRow = ({ gameStat }) => {
  return (
    <tr className="history__row">
      <td className="col__sr">{gameStat.skillRanking}</td>
      <td className="col__healing">{gameStat.healing}</td>
      <td className="col__hero">{gameStat.hero}</td>
      <td className="col__map">{gameStat.map}</td>
    </tr>
  )
}

export default HistoryRow;
