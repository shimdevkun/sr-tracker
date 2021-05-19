import CurrentSkillRanking from './components/CurrentSkillRanking'

function App() {
  const skillRankings = [1500, 2500, 3500, 4500];

  const getCurrentSkillRanking = () => {
    const position = skillRankings.length - 1;
    return skillRankings[position];
  }

  return (
    <div className="App">
      <CurrentSkillRanking
        skillRanking={getCurrentSkillRanking()} />
    </div>
  );
}

export default App;
