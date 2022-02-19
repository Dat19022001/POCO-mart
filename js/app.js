// slick
$('.mobile__sub-right').slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<button class="slide-arrow prev-arrow"><i style="position:relative; width: 36px;line-height: 36px;top:0;right:0" class="fa fa-angle-left"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i style="position:relative; width: 36px;line-height: 36px;top:0;right:0" class="fa fa-angle-right"></i></button>',
});
//slick
$('.a').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
});
//tab
const a = document.querySelector.bind(document);
const b = document.querySelectorAll.bind(document);

const tabs = b('.menu__tab')


tabs.forEach((tab, index) => {
  tab.onclick = function(){
    a('.menu__tab.click').classList.remove('click')
    this.classList.add('click')
  }
});
//tab2
const tab2 = b('.mobile__menu-1')
const contents = b('.mobile__sub-right')
tab2.forEach((tab, index) => {
  const content = contents[index]
  tab.onclick = function(){
    a('.mobile__menu-1.active').classList.remove('active')
    a('.mobile__sub-right.active').classList.remove('active')
    this.classList.add('active')
    content.classList.add('active')
  }
});


