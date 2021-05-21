import React from 'react';

const CurrentSkillRanking = ({ skillRanking }) => {
  return (
    <section id="current-sr">
      <p>Current SR</p>
      <span>{skillRanking}</span>
    </section>
  )
}

export default CurrentSkillRanking;
