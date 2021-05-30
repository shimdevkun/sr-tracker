import React from 'react';

const PreviousSkillRanking = ({ skillRanking, difference }) => {
  const displayDifference = () => {
    if (difference === 0)
      return 'draw';
    return difference > 0 ? `+${difference}` : difference;
  }

  const getDifferenceClassColor = () => {
    if (difference === 0 || difference === 'N/A')
      return;
    return difference > 0 ? 'positive' : 'negative';
  }

  return (
    <section id="previous-sr">
      <div className="sr-info">
        <p className="title">Previous game</p>
        <p className="prev-sr">{skillRanking}</p>
      </div>

      <span className={`sr-difference ${getDifferenceClassColor()}`}>{displayDifference()}</span>
    </section>
  )
}

export default PreviousSkillRanking;
