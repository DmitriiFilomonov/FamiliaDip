import React from "react";
import AdminRecord from "./AdminRecord";
import SimpleSlider from "./SimpleSlider";
import Record from "./Record/Record";
import InputPage from "./InputPage";
import car1 from "../../img/photo_5413758907869940694_y.jpg"
import car2 from "../../img/photo_5413758907869940695_y.jpg"
import car3 from "../../img/photo_5413758907869940696_y.jpg"
import car4 from "../../img/photo_5413758907869940697_y.jpg"
import car5 from "../../img/photo_5413758907869940700_y.jpg"
import car6 from "../../img/photo_5413758907869940705_y.jpg"
import car7 from "../../img/photo_5413758907869940705_y.jpg"
import car8 from "../../img/photo_5413758907869940706_y.jpg"
import car9 from "../../img/photo_5413758907869940707_y.jpg"


class IndexHTML extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          flag: 0
        }
      }
    render(){
      if(this.state.flag === 1 )
        {return(
            <div>
                <InputPage/>
            </div>
        )
        }
      if(this.state.flag === 2 )
      {        return(
        <div>
            <Record/>
        </div>
    )}
    if(this.state.flag === 0 )
      return(
        <div>
          <header className="header">
          <div className="container">
              <nav className="header__top">
                  <div className="header__top--inner">
                      <a href="#" className="logo">
                          <svg className="logo__icon" viewBox="0 0 159 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 26.151V52.302L22.9495 52.3069C35.572 52.3096 71.2097 52.3107 102.145 52.3096L158.391 52.3074L158.529 26.1537L158.667 0H79.3336H0V26.151ZM45.6337 26.4206V50.6844H23.6128H1.59187V26.4206V2.15678H23.6128H45.6337V26.4206ZM10.0574 11.8871C9.00946 12.952 8.97763 13.4896 9.12885 27.5718L9.28592 42.1538L10.5387 43.1842C11.6934 44.1337 12.7801 44.2141 24.4294 44.2141C38.0404 44.2141 38.7462 44.0723 38.7276 41.345C38.7085 38.6361 38.4517 38.5703 26.684 38.2829L15.6534 38.0133L15.5107 25.3735C15.3886 14.5631 15.2422 12.5924 14.4998 11.7588C13.3494 10.4669 11.3999 10.523 10.0574 11.8871ZM62.2915 17.5681C62.4688 18.0372 62.6136 21.4341 62.6136 25.1168V31.8126H68.7322C73.7047 31.8126 74.9092 31.9652 75.1592 32.6284C75.329 33.077 75.1724 33.8049 74.8121 34.246C73.8305 35.4478 60.9225 35.409 59.7329 34.2007C59.0505 33.5067 58.8992 31.9107 58.8992 25.3934C58.8992 21.0157 59.0584 17.2721 59.2532 17.0747C59.9287 16.3883 61.971 16.7199 62.2915 17.5681ZM93.5394 17.4576C100.685 20.5644 100.685 31.1984 93.5394 34.3053C90.8083 35.4926 85.5435 35.2478 83.0586 33.8173C79.9072 32.004 78.5323 29.5932 78.5323 25.8814C78.5323 22.031 79.9661 19.6359 83.292 17.9283C86.0513 16.5118 90.8566 16.2907 93.5394 17.4576ZM118.289 17.6598C120.761 18.9414 121.483 20.2118 120.378 21.3344C119.597 22.1286 119.348 22.107 117.357 21.075C112.185 18.3936 106.125 20.9871 106.125 25.8814C106.125 27.7492 107.629 30.1211 109.404 31.0539C111.829 32.328 116.578 31.8606 117.887 30.2182C119.648 28.0085 119.192 27.5599 115.013 27.3879C111.305 27.2353 111.166 27.1809 111.166 25.8814C111.166 24.5593 111.254 24.5302 115.751 24.3787C121.113 24.1975 122.043 24.7378 122.043 28.0355C122.043 32.114 118.181 35.0477 112.809 35.0477C109.2 35.0477 107.405 34.3775 105.186 32.2029C100.79 27.8937 102.285 19.9848 107.972 17.4667C110.342 16.4169 116.102 16.5247 118.289 17.6598ZM141.698 17.9568C144.406 19.4121 146.452 22.822 146.452 25.8814C146.452 28.9408 144.406 32.3507 141.698 33.806C137.057 36.2998 129.892 34.9696 127.116 31.0992C126.265 29.9135 126.023 28.7591 126.023 25.8814C126.023 23.0037 126.265 21.8493 127.116 20.6636C129.892 16.7933 137.057 15.4631 141.698 17.9568ZM84.5342 21.0028C82.4478 22.2958 81.5643 25.0079 82.322 27.7966C83.7839 33.1767 93.2221 33.187 94.9679 27.8101C95.8296 25.1573 94.8893 22.3632 92.6719 20.9887C90.4788 19.63 86.7395 19.6364 84.5342 21.0028ZM132.125 20.8318C129.989 22.3718 129.507 23.3057 129.489 25.9429C129.475 27.9298 129.756 28.7187 130.882 29.8628C132.599 31.6077 134.095 32.0309 137.26 31.6686C140.778 31.2658 142.473 29.384 142.473 25.8814C142.473 22.0547 140.744 20.3692 136.526 20.084C134.193 19.9265 133.132 20.1066 132.125 20.8318Z" fill="white"/>
                          </svg>
                      </a>
                      <button className="header__btn" type="button" aria-label="Мобильное меню">
                          <span></span>
                      </button>
                      <ul className="menu__list">
                          <li className="menu__item">
                              <a className="menu__link" href="#about" >
                                  О нас
                              </a>
                          </li>
                          <li className="menu__item">
                              <a className="menu__link" href="#services">
                                  Услуги
                              </a>
                          </li>
                          <li className="menu__item">
                              <a className="menu__link" href="#portfolio">
                                  Работы
                              </a>
                          </li>
                          <li className="menu__item">
                              <a className="menu__link" href="#contacts">
                                  Контакты
                              </a>
                          </li>
                          <li className="menu__item">
                              <button onClick={() => {this.setState({flag: 1})}}>
                                  Для персонала
                              </button>
                          </li>
                      </ul>
                  </div>
              </nav>
          </div>
      </header>
      <div className="combo">
          <div className="head">
          <div className="container">
              <div className="header__content--inner">
                  <h1 className="header__title">
                      Приветствуем вас на сайте салона красоты
                      <span className="header__subtitle">
                          Familia
                      </span>
                  </h1>
                  <div id="recordButton">
  
                  </div>
                  <button className="portfolio__btn--download potfolio__click" onClick={() => {this.setState({flag: 2})}}>Записться онлайн</button>
                  <a className="header__icon" href="#portfolio">
                      Работы
                  </a>
              </div>
          </div>
      </div>
  
    <div className="slider-for" id="sliderFor">
      <SimpleSlider/>
    </div>
  </div>
      <main>
  
          <section className="about__me section" id="about">
              <div className="container">
                  <h2 className="title">
                      О нас
                  </h2>
                  <div className="about__text">
                  <p>
                  Салон красоты Familia – это место куда приходят семьями .
                    Для каждого из вас, будь вы ребенок, подросток, мужчина или женщина, отдельная зона для комфортного времяпровождения.
                    Мы создаем красоту, предоставляя качественные услуги в дружелюбной обстановке по привлекательной цене

                  </p>
                  <p>
              </p>
          </div>
      </div>
  </section>
          <section className="services section" id="services">
      <div className="container">
          <div className="services__container">
              <h2 className="title">
                  Услуги
              </h2>
  
              <div className="services__items">
                  <div className="services__item">
                      <h3 className="services__item--title">
                          Стрижки мужские
                      </h3>
                      <p className="services__item--text">
                        Профессионально выполним классическую мужскую или модельную стрижку
                        <p className="services__item--text">-Стрижка подросток ( до 16 лет) – 400</p> 
                        <p className="services__item--text">-Мужская стрижка – 500 р</p>
                      </p>
                  </div>
                  <div className="services__item">
                      <h3 className="services__item--title">
                          Женские стрижки
                      </h3>
                      <p className="services__item--text">
                      Проведем диагностику ваших волос, подберем стрижку, посоветуем домашний уход
                        
                        <p className="services__item--text">-Стрижка женская – 650-800 р</p> 
                        <p className="services__item--text">-Стрижка челки – 200 р</p>
                        <p className="services__item--text">-Стрижка коньчики – от 300 р – 400</p> 
                        <p className="services__item--text">-Укладка по форме стрижки – 700 р </p>
                        <p className="services__item--text">-Укладка с применением горячих инструментов  – 1000-1500</p> 
                        <p className="services__item--text">-Мужская стрижка – 500 р</p>
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </section>
          <section className="portfolio section_botton" id="portfolio">
      <div className="container">
          <div className="portfolio__top">
              <h2 className="title">Наши работы</h2>
              {/* <div className="portfolio__filter-btm">
                  <button className="portfolio__btn" data-filter="all">Все работы</button>
                  <button className="portfolio__btn" data-filter=".category-1">Стрижки</button>
                  <button className="portfolio__btn" data-filter=".category-2">Маникюр</button>
                  <button className="portfolio__btn" data-filter=".category-3">Макияж</button>
              </div> */}
          </div>
          <div className="portfolio__content">
              <div className="portfolio__item mix category-1">
                  <img src={car1} className="portfolio__img" data-fancybox="single" alt="Река с городом"/>
              </div>
              <div className="portfolio__item mix category-2">
  
                  <img src={car2} className="portfolio__img" data-fancybox="single" alt="Река с мостом и лодками"/>
              </div>
              <div className="portfolio__item mix category-1">
  
                  <img src={car3} className="portfolio__img" data-fancybox="single"   alt="Мост"/>
              </div>
              <div className="portfolio__item mix category-3">
  
                  <img src={car4}className="portfolio__img" data-fancybox="single"  alt="Город"/>
              </div>
              <div className="portfolio__item mix category-2">
  
                  <img src={car5} className="portfolio__img" data-fancybox="single"  alt="Пляж"/>
              </div>
              <div className="src/portfolio__item mix category-3">
  
                  <img src={car6} className="portfolio__img" data-fancybox="single"  alt=""/>
              </div>
              <div className="src/portfolio__item mix category-3">
  
                  <img src={car7} className="portfolio__img" data-fancybox="single"  alt=""/>
              </div>
              <div className="src/portfolio__item mix category-3">
  
                  <img src={car8} className="portfolio__img" data-fancybox="single"  alt=""/>
              </div>
              <div className="src/portfolio__item mix category-3">
  
                  <img src={car9} className="portfolio__img" data-fancybox="single"  alt=""/>
              </div>
          </div>
      </div>
  </section>
          <section className="contact section_botton" id="contacts">
      <div className="container">
          <h2 className="title">Контакты</h2>
          <div className="contact__box">
              <div className="contact__info">
                  <p className="contact__info--text">Связаться с нами можно, или напрямую по номеру телефона, email, в соцсетях:</p>
                  <div className="contact__list">
                      <a href="tel: +38 (050) 111 11 11" className="contact__link">+79145335423</a>
                  </div>
                  <div className="contact__info--social">
                      <a href="telegram.com" className="contact__link">
                          <svg width="44" height="39" viewBox="0 0 44 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                      d="M43.3206 1.4923C42.7831 0.816754 41.9781 0.444824 41.0536 0.444824C40.5511 0.444824 40.0187 0.553505 39.4715 0.768451L2.22633 15.381C0.249764 16.1563 -0.0164409 17.3197 0.000679409 17.9441C0.0177997 18.5686 0.347786 19.7148 2.36396 20.3741C2.37605 20.3779 2.38813 20.3817 2.40022 20.3851L10.1259 22.6574L14.3039 34.9366C14.8736 36.6107 16.1522 37.6505 17.6414 37.6505C18.5803 37.6505 19.5038 37.2462 20.3121 36.4816L25.0907 31.9595L32.0218 37.6954C32.0225 37.6961 32.0235 37.6964 32.0241 37.6971L32.0899 37.7516C32.096 37.7565 32.1024 37.7616 32.1084 37.7665C32.8788 38.3806 33.7197 38.7049 34.5412 38.7053H34.5415C36.1465 38.7053 37.4244 37.4842 37.7967 35.5949L43.8993 4.62472C44.1444 3.38162 43.9389 2.26928 43.3206 1.4923ZM12.7104 22.2258L27.6155 14.3998L18.3346 24.5354C18.1825 24.7013 18.0747 24.9045 18.0217 25.1257L16.2321 32.576L12.7104 22.2258ZM18.5655 34.5323C18.5038 34.5906 18.4417 34.6427 18.3796 34.6906L20.0399 27.7792L23.0601 30.2789L18.5655 34.5323ZM41.3725 4.09857L35.27 35.0691C35.2112 35.3655 35.0236 36.0552 34.5412 36.0552C34.3028 36.0552 34.0034 35.9217 33.6969 35.6791L25.843 29.1797C25.842 29.1786 25.8407 29.1776 25.8393 29.1769L21.1661 25.3092L34.5875 10.6518C35.0172 10.1826 35.0561 9.46394 34.6798 8.94849C34.3032 8.43303 33.6207 8.27087 33.0624 8.56414L10.9879 20.1547L3.1572 17.852L40.391 3.24396C40.7055 3.12044 40.9251 3.09456 41.0536 3.09456C41.1325 3.09456 41.2728 3.10422 41.3249 3.17012C41.3933 3.25603 41.4806 3.54895 41.3725 4.09857Z"
                                      fill="#2352DE" />
                          </svg>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </section>
  
  
      </main>
        <footer className="footer">
            <svg className="logo__icon" viewBox="0 0 159 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 26.151V52.302L22.9495 52.3069C35.572 52.3096 71.2097 52.3107 102.145 52.3096L158.391 52.3074L158.529 26.1537L158.667 0H79.3336H0V26.151ZM45.6337 26.4206V50.6844H23.6128H1.59187V26.4206V2.15678H23.6128H45.6337V26.4206ZM10.0574 11.8871C9.00946 12.952 8.97763 13.4896 9.12885 27.5718L9.28592 42.1538L10.5387 43.1842C11.6934 44.1337 12.7801 44.2141 24.4294 44.2141C38.0404 44.2141 38.7462 44.0723 38.7276 41.345C38.7085 38.6361 38.4517 38.5703 26.684 38.2829L15.6534 38.0133L15.5107 25.3735C15.3886 14.5631 15.2422 12.5924 14.4998 11.7588C13.3494 10.4669 11.3999 10.523 10.0574 11.8871ZM62.2915 17.5681C62.4688 18.0372 62.6136 21.4341 62.6136 25.1168V31.8126H68.7322C73.7047 31.8126 74.9092 31.9652 75.1592 32.6284C75.329 33.077 75.1724 33.8049 74.8121 34.246C73.8305 35.4478 60.9225 35.409 59.7329 34.2007C59.0505 33.5067 58.8992 31.9107 58.8992 25.3934C58.8992 21.0157 59.0584 17.2721 59.2532 17.0747C59.9287 16.3883 61.971 16.7199 62.2915 17.5681ZM93.5394 17.4576C100.685 20.5644 100.685 31.1984 93.5394 34.3053C90.8083 35.4926 85.5435 35.2478 83.0586 33.8173C79.9072 32.004 78.5323 29.5932 78.5323 25.8814C78.5323 22.031 79.9661 19.6359 83.292 17.9283C86.0513 16.5118 90.8566 16.2907 93.5394 17.4576ZM118.289 17.6598C120.761 18.9414 121.483 20.2118 120.378 21.3344C119.597 22.1286 119.348 22.107 117.357 21.075C112.185 18.3936 106.125 20.9871 106.125 25.8814C106.125 27.7492 107.629 30.1211 109.404 31.0539C111.829 32.328 116.578 31.8606 117.887 30.2182C119.648 28.0085 119.192 27.5599 115.013 27.3879C111.305 27.2353 111.166 27.1809 111.166 25.8814C111.166 24.5593 111.254 24.5302 115.751 24.3787C121.113 24.1975 122.043 24.7378 122.043 28.0355C122.043 32.114 118.181 35.0477 112.809 35.0477C109.2 35.0477 107.405 34.3775 105.186 32.2029C100.79 27.8937 102.285 19.9848 107.972 17.4667C110.342 16.4169 116.102 16.5247 118.289 17.6598ZM141.698 17.9568C144.406 19.4121 146.452 22.822 146.452 25.8814C146.452 28.9408 144.406 32.3507 141.698 33.806C137.057 36.2998 129.892 34.9696 127.116 31.0992C126.265 29.9135 126.023 28.7591 126.023 25.8814C126.023 23.0037 126.265 21.8493 127.116 20.6636C129.892 16.7933 137.057 15.4631 141.698 17.9568ZM84.5342 21.0028C82.4478 22.2958 81.5643 25.0079 82.322 27.7966C83.7839 33.1767 93.2221 33.187 94.9679 27.8101C95.8296 25.1573 94.8893 22.3632 92.6719 20.9887C90.4788 19.63 86.7395 19.6364 84.5342 21.0028ZM132.125 20.8318C129.989 22.3718 129.507 23.3057 129.489 25.9429C129.475 27.9298 129.756 28.7187 130.882 29.8628C132.599 31.6077 134.095 32.0309 137.26 31.6686C140.778 31.2658 142.473 29.384 142.473 25.8814C142.473 22.0547 140.744 20.3692 136.526 20.084C134.193 19.9265 133.132 20.1066 132.125 20.8318Z" fill="white"/>
            </svg>
    </footer>
  
        </div>
      )
      
    }
  }

  export default IndexHTML