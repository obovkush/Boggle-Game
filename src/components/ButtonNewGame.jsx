import { Button } from 'antd';
import { createGameField } from '../functions/functions';

const NewGameButton = () => {

  const onButtonClick = (event) => {
    event.preventDefault();
    const cellAll = document.querySelectorAll('.ant-row');
    const letterAll = createGameField();

    //Заполняет ячейки символами
    for (let i = 0; i < cellAll.length; i++) {
      for (let j = 0; j < cellAll[i].children.length; j++) {
        cellAll[i].children[j].innerText = letterAll[i][j];
      }
    }
  }

  return (
  <>
      <Button type="primary"
        className="new-game-btn"
        onClick={onButtonClick}
        block
        danger>
      New Game</Button>
  </>
  )
}

export default NewGameButton;
