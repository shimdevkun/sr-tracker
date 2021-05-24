import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import CurrentSkillRanking from './components/CurrentSkillRanking';
import PreviousSkillRanking from './components/PreviousSkillRanking';
import AddGameStat from './components/AddGameStat';

function App() {
  const [gameStats, setGameStats] = useState([
    {
      skillRanking: 3572,
      healing: 7550,
      hero: 'Baptiste',
      map: 'Illios'
    },
    {
      skillRanking: 3599,
      healing: 8550,
      hero: 'Ana',
      map: 'Kings Row'
    },
    {
      skillRanking: 3476,
      healing: 11500,
      hero: 'Ana',
      map: 'Oasis'
    },
    {
      skillRanking: 3500,
      healing: 1059,
      hero: 'Mercy',
      map: 'Hanamura'
    }
  ]);

  const getCurrentSkillRanking = () => {
    const position = gameStats.length - 1;
    return gameStats[position].skillRanking;
  }

  const getPreviousSkillRanking = () => {
    const position = gameStats.length - 2;
    return gameStats[position].skillRanking;
  }

  const getDifference = () => {
    const current = getCurrentSkillRanking();
    const previous = getPreviousSkillRanking();

    return current - previous;
  }

  const addGameStat = (gameStat) => {
    setGameStats([...gameStats, gameStat]);
  }

  return (
    <Router>
      <div className="container--main">
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {<PreviousSkillRanking
                skillRanking={getPreviousSkillRanking()}
                difference={getDifference()} />}
              {<CurrentSkillRanking
                skillRanking={getCurrentSkillRanking()} />}
              {<Link to='/addGameStat'>Add Game Stat</Link>}
            </>
          )}
        />
        <Route
          path='/addGameStat'
          render={(props) => (
            <AddGameStat onAdd={addGameStat} />
          )}
        />
      </div>
    </Router>
  );
}

export default App;
