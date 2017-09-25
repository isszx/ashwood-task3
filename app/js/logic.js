let menuArray = document.getElementsByClassName('info__nav');
for(let i = 0; i < menuArray.length; i++)
  menuArray[i].addEventListener('click', function() {
    if(document.getElementsByClassName('info__nav active').length > 0)
      document.getElementsByClassName('info__nav active')[0].classList.remove('active');
    this.classList.add('active');
  }, false);

let buttonzArray = document.getElementsByClassName('mc__button');
for(let i = 0; i < buttonzArray.length; i++)
  buttonzArray[i].addEventListener('click', function() {
    if(document.getElementsByClassName('mc__button active').length > 0)
      document.getElementsByClassName('mc__button active')[0].classList.remove('active');
    this.classList.add('active');
  }, false);
