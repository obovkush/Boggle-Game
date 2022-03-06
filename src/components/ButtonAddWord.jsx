import { Button } from 'antd';

const NewWordButton = () => {

  const onButtonClick = (event) => {
    event.preventDefault();
    const newWord = 'word'
    let cardInfo = document.querySelector('.ant-card-body')
    cardInfo = document.querySelector('.ant-card-body');
    cardInfo.innerHTML += `<span><strong>&nbsp;${newWord}&nbsp<strong></span>`
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
