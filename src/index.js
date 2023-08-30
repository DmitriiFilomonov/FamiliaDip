import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
//import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import IndexHTML from './js/ReactComponents/IndexHTML';
import $ from 'jquery'
// import './js/mixitup.min.js'
// import './js/slick.min.js'
import './css/style.css'

$(function () {

    $(".menu a, .menu__item a, .footer a").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
            $('.header__top').addClass('header__top--fix');
        }
        else {
            $('.header__top').removeClass('header__top--fix');
        }
    });
    
    $('.header__btn, .menu__link').on('click', function(){
        $('.menu__list').toggleClass('header__top--inner--active');
        $('.header__btn').toggleClass('header__btn--active');
        $('body').toggleClass('lock');
    });

});
//слаидер

class Index extends React.Component{

  render(){
    return(
      <div>
        <IndexHTML/>
      </div>
    )
  }
}

// class NavigatingThroughPages extends React.Component{
//   render() {
//     return(
//       <div>
//         <Router>
//           <div>
//             <Link to="/adminRoute" class="portfolio__btn--download potfolio__click" >Записться онлайн</Link>
//             <Route exact path='/adminRoute' element={<adminRecord/>}/>
//           </div>
//         </Router>
//       </div>
//     )
//   }
// }


  const body = ReactDOMClient.createRoot(document.getElementById("Body"))
  body.render(<Index/>)
  // const admin__record = ReactDOMClient.createRoot(document.getElementById("adminRecordReact"))
  // admin__record.render(<adminRecord/>)

// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   autoplay: true,
//   autoplaySpeed: 5000,
//   asNavFor: '.slider-nav',
//   swipeToSlide: true,
//   touchThreshold: 5000
// });
// $('.slider-nav').slick({
//   slidesToShow: 7,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   arrows: false,
//   centerMode: true,
//   focusOnSelect: true,
//   touchThreshold: 5000,
//   swipeToSlide: true,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 3
//       }
//     }
//   ]
// });

//модальное окно
// document.addEventListener("DOMContentLoaded", function(){
//   var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
//   console.log(scrollbar);
//   document.querySelector('[href="#openModal"]').addEventListener('click',function(){
//     document.body.style.overflow = 'hidden';
//     document.querySelector('#openModal').style.marginLeft = scrollbar;
//   });
//   document.querySelector('[href="#close"]').addEventListener('click',function(){
//     document.body.style.overflow = 'visible';
//     document.querySelector('#openModal').style.marginLeft = '0px';
//   });
// });



