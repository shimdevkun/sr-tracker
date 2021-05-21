import CurrentSkillRanking from './components/CurrentSkillRanking';
import PreviousSkillRanking from './components/PreviousSkillRanking';

function App() {
  const skillRankings = [3572, 3599, 3476, 3500];

  const getCurrentSkillRanking = () => {
    const position = skillRankings.length - 1;
    return skillRankings[position];
  }

  const getPreviousSkillRanking = () => {
    const position = skillRankings.length - 2;
    return skillRankings[position];
  }

  const getDifference = () => {
    const current = getCurrentSkillRanking();

    const previous = getPreviousSkillRanking();
    return current - previous;
  }

  return (
    <div className="container--main">
      <PreviousSkillRanking
        skillRanking={getPreviousSkillRanking()}
        difference={getDifference()} />

      <CurrentSkillRanking
        skillRanking={getCurrentSkillRanking()} />
    </div>
  );
}

export default App;
