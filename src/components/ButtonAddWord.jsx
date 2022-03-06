import { Button } from 'antd';

const NewWordButton = () => {
  const cellAll = document.querySelectorAll('.ant-col');
  let newWord = '';
  function classСheck(cell) {
    return cell.classList.contains('cell-checked');
  }
  function clickOn(event) {
    event.preventDefault();
    const cell = event.target;
    if (classСheck(cell)) {
      cell.innerText === 'Q' ? newWord += 'QU' : newWord += cell.innerText;
    }
  }
  cellAll.forEach((cell) => {
    cell.addEventListener('click', clickOn);
  })
  
  const onButtonClick = (event) => {
    event.preventDefault();

    let cardInfo = document.querySelector('.ant-card-body')
    cardInfo = document.querySelector('.ant-card-body');
    cardInfo.innerHTML += `<span><strong>&nbsp${newWord.toLowerCase()}&nbsp<strong></span>`
    newWord = '';
  }

  return (
      <>
        <Button type="primary"
          className="new-word-btn"
          onClick={onButtonClick}
          block>
          Add Word</Button>
      </>
    )
}

export default NewWordButton;
