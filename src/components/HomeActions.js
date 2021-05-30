import { Link } from 'react-router-dom';

const HomeAction = () => {
  return (
    <section id="home-actions">
      <Link className="btn btn-primary" to='/addGameStat'>Add Game Stat</Link>
    </section>
  )
}

export default HomeAction;
