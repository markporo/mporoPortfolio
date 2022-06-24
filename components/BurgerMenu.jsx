import React from "react";

const BurgerMenu = ({isOpen, setIsOpen}) => {

  let burgerTopLine;
  let burgerMidLine;
  let burgerBotLine;
  let burgerBorder;

  if (isOpen === false) {
    burgerTopLine = 'w-9';
    burgerBotLine = 'w-7';
    burgerBorder = 'flex flex-col flex-end pl-2 mr-6 border-0';
  } else {
    burgerTopLine = 'w-10 mb-0 absolute top-9 -rotate-45';
    burgerBotLine = 'w-10 mt-2 absolute bottom-8 rotate-45';
    burgerMidLine = 'hidden';
    burgerBorder = 'flex flex-col flex-end mr-6 pl-2 border-gray-200 border w-12 h-12';
  }

  return (
    <div onClick={() => setIsOpen(isOpen === true ? false : true)} className={burgerBorder}>
      <i className={burgerTopLine}></i>
      <i className={burgerMidLine}></i>
      <i className={burgerBotLine}></i>
    </div>
  )
}

export default BurgerMenu;