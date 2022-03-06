import { Button } from 'antd';
import { createGameField } from '../functions/functions';
// import Info from './Card';

const NewGameButton = () => {

  const onButtonClick = (event) => {
    event.preventDefault();
    const cellAll = document.querySelectorAll('.ant-row');
    const letterAll = createGameField();

    //Заполняет ячейки символами
    for (let i = 0; i < cellAll.length; i++) {
      for (let j = 0; j < cellAll[i].children.length; j++) {
        cellAll[i].children[j].innerText = letterAll[i][j];
        cellAll[i].children[j].style.pointerEvents = 'auto';
      }
    }
    const cells = document.querySelectorAll('.ant-col');
    //Удаляет классы ячеек
    cells.forEach((cell) => cell.classList.contains('cell-checked') ?
                            cell.classList.remove('cell-checked') :
                            cell
    )
    const card = document.querySelector('.ant-card-body')
    console.log(card)
    //Очищает карточку слов
    card.innerHTML = '';
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
