import React from 'react';

const CurrentSkillRanking = ({ skillRanking }) => {
  return (
    <section id="current-sr">
      <h2>Current SR</h2>
      <p>{skillRanking}</p>
    </section>
  )
}

export default CurrentSkillRanking;
