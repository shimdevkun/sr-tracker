import { useState } from 'react';
import { Redirect } from 'react-router-dom';

import ButtonExit from './ButtonExit';

const AddGameStat = ({ onAdd }) => {
  const [toHome, setToHome] = useState(false);

  const [newSR, setNewSR] = useState('');
  const [healing, setHealing] = useState('');
  const [hero, setHero] = useState('');
  const [map, setMap] = useState('');

  const MIN_SR = 0, MAX_SR = 5000,
    MIN_HEALING = 0, MAX_HEALING = 50000;

  const onSubmit = (e) => {
    e.preventDefault();

    if (newSR < MIN_SR || newSR > MAX_SR) {
      alert(`SR must be between ${MIN_SR} and ${MAX_SR}`);
      setNewSR('');
      return;
    }

    if (healing !== '') {
      if (healing < MIN_HEALING || healing > MAX_HEALING) {
        alert(`Healing must be between ${MIN_HEALING} and ${MAX_HEALING}`);
        setNewSR('');
        return;
      }
    }

    const gameStat = {
      skillRanking: newSR,
      healing: healing,
      hero: hero,
      map: map
    };

    onAdd(gameStat);
    setToHome(true);
  }

  if (toHome) {
    return <Redirect to='/' />;
  }

  return (
    <section id="add-game-stats" onSubmit={onSubmit}>
      <ButtonExit />
      <form className="form--add-game-stats">
        <div>
          <div className="form-col">

            <div className="form-group">
              <label htmlFor="new-sr">New SR</label>
              <input
                name="new-sr"
                type="number"
                value={newSR}
                onChange={(e) => setNewSR(parseInt(e.target.value))}
                required />
            </div>
            <div className="form-group">
              <label htmlFor="healing">Healing Done</label>
              <input
                name="healing"
                type="number"
                value={healing}
                onChange={(e) => { setHealing(e.target.value) }} />
            </div>

          </div>
          <div className="form-col">

            <div className="form-group">
              <label htmlFor="hero">Hero Played</label>
              <input
                name="hero"
                type="text"
                value={hero}
                onChange={(e) => { setHero(e.target.value) }} />
            </div>
            <div className="form-group">
              <label htmlFor="map">Map</label>
              <input
                name="map"
                type="text"
                value={map}
                onChange={(e) => { setMap(e.target.value) }} />
            </div>

          </div>
        </div>

        <input type="submit" value="Add Game Stats"></input>
      </form>
    </section>
  )
}

export default AddGameStat;
