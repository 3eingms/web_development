
// targetting button of latest work section
const p_btns  = document.querySelector('.p-btns');
const p_btn =document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click',(e)=>{
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked)

    p_btn.forEach((curElem)=>{
        curElem.classList.remove('p-btn-active')
    })
    
    p_btn_clicked.classList.add('p-btn-active')

    // to find number in data attr
    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num)

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

// hide all images
    p_img_elem.forEach((curElm)=>{
        curElm.classList.add('p-btn-not-active')
    })

    img_active.forEach((curElm)=>{
        curElm.classList.remove('p-btn-not-active')
    })


})

// swiper section
var swiper = new Swiper(".mySwiper", {
    slidesPerView:2,
    spaceBetween: 30,
    autoplay:{
        delay:2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });