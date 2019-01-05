
    let box = document.querySelector('.box');
    let icon = document.querySelector('.icon');
    let header = document.querySelector('.header');
    icon.addEventListener('click',function(){
      box.classList.toggle('show');
      header.classList.toggle('m_header');
      document.body.classList.toggle('body_fix');

    });
    let boxLi = document.querySelectorAll('.box > Li');
    boxLi.forEach(function(item){
      item.addEventListener('click',function (){
        this.querySelector('.sub_box').classList.toggle('ul_show');
      });
    });
