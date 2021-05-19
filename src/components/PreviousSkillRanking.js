import React from 'react';

const PreviousSkillRanking = ({ skillRanking, difference }) => {
  const displayDifference = () => {
    if (difference === 0)
      return 'draw';
    return difference > 0 ? `+${difference}` : difference;
  }

  return (
    <section id="previous-sr">
      <div className="sr-info">
        <h4>Previous game</h4>
        <p>{skillRanking}</p>
      </div>

      <span className="sr-difference">{displayDifference()}</span>
    </section>
  )
}

export default PreviousSkillRanking;
