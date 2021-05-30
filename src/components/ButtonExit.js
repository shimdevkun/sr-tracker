import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCloseSquare } from 'react-icons/ai'

const ButtonExit = () => {
  return (
    <Link className="form__close" to='/'>
      <AiOutlineCloseSquare />
    </Link>
  )
}

export default ButtonExit;
