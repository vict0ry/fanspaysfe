import { t } from 'i18next'
import './home-not-logged.css'

export const HomeNotLogged = () => {
  return (
    <div id={'home-not-logged'}>
      <header className="header">
        <div className="container">
          <div className="header-wrap">
            <div className="header-wrap__left">
              <a href="#" className="logo">
                <picture>
                  <source srcSet="http://localhost:3000/images/home-page-not-logged/main/logo.svg" type="image/webp" />
                  <img src="http://localhost:3000/images/home-page-not-logged/main/logo.svg" alt="logo" /></picture>
              </a>
              <a href="#" className="logo-mobile">
                <picture>
                  <source srcSet="http://localhost:3000/images/home-page-not-logged/main/logo-mobile.svg"
                          type="image/webp" />
                  <img src="http://localhost:3000/images/home-page-not-logged/main/logo-mobile.svg" alt="logo" />
                </picture>
              </a>
              <nav className="menu">
                <ul>
                  <li><a href="#">{t('О нас')}</a></li>
                  <li><a href="#">{t('Тарифы')}</a></li>
                  <li><a href="#">{t('Блогеры')}</a></li>
                  <li><a href="#">{t('Продукты')}</a></li>
                  <li className="has-child"><a href="#">{t('Больше')}</a></li>
                </ul>
              </nav>
            </div>
            <div className="header-wrap__right">
              <nav className="menu">
                <ul>
                  <li><a href="#">{t('О нас')}</a></li>
                  <li><a href="#">{t('Тарифы')}</a></li>
                  <li><a href="#">{t('Блогеры')}</a></li>
                  <li><a href="#">{t('Продукты')}</a></li>
                  <li className="has-child"><a href="#">{t('Больше')}</a></li>
                </ul>
              </nav>
              <div className="languages">
                <div className="current">
                  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                      stroke="#5D5E65" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M16 28C18.9455 28 21.3333 22.6274 21.3333 16C21.3333 9.37258 18.9455 4 16 4C13.0545 4 10.6667 9.37258 10.6667 16C10.6667 22.6274 13.0545 28 16 28Z"
                      stroke="#5D5E65" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M4 16.0001C4 18.9456 9.37258 21.3334 16 21.3334C22.6274 21.3334 28 18.9456 28 16.0001C28 13.0546 22.6274 10.6667 16 10.6667C9.37258 10.6667 4 13.0546 4 16.0001Z"
                      stroke="#5D5E65" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>RU</span>
                  <svg width={12} height={6} viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M0.9697 0.21967C1.26259 -0.0732233 1.73747 -0.0732233 2.03036 0.21967L6.00003 4.18934L9.9697 0.21967C10.2626 -0.0732233 10.7375 -0.0732233 11.0304 0.21967C11.3233 0.512563 11.3233 0.987437 11.0304 1.28033L6.53036 5.78033C6.23747 6.07322 5.76259 6.07322 5.4697 5.78033L0.9697 1.28033C0.676807 0.987437 0.676807 0.512563 0.9697 0.21967Z"
                          fill="#5D5E65" />
                  </svg>
                </div>
              </div>
              <a href={'/login'} className="btn btn-primary">{t('login')}</a>
              <a href={'/register'} className="btn">{t('register')}</a>
            </div>
            <div className="header-wrap__menu">
              <span /><span /><span />
            </div>
          </div>
        </div>
      </header>
      <div className="main">
        <div className="container">
          <div className="main-wrap">
            <div className="main-wrap__content">
              <div className="main-wrap__content--title">
                {t('MAIN.MAIN_TITLE1')}<span>{t('MAIN.MAIN_TITLE_WORD')}</span>{t('MAIN.MAIN_TITLE2')}
              </div>
              <div className="main-wrap__content--text">
                {t('MAIN.MAIN_TITLE_DESCRIPTION')}
              </div>
              <button className="btn btn-bg">{t('MAIN.BECOME_AN_AUTHOR')}</button>
            </div>
            <div className="main-wrap__images">
              <div className="main-wrap__images--faces">
                <div className="item">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/1.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/1.png" alt="img" /></picture>
                </div>
                <div className="item">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/2.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/2.png" alt="img" /></picture>
                </div>
              </div>
              <div className="main-wrap__images--content">
                <div className="wrapper">
                  <div className="image">
                    <div className="title">
                      1000$ <span>{t('MAIN.PER_MONTH')}</span>
                    </div>
                    <picture>
                      <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/3.webp"
                              type="image/webp" />
                      <img src="http://localhost:3000/images/home-page-not-logged/uploads/3.png" alt="img" /></picture>
                  </div>
                </div>
                <div className="wrapp">
                  <div className="alert">
                    <div className="text">
                      {t('MAIN.INCOME_INCREASE')}
                      <span>{t('MAIN.INCOME_INCREASE_DESCRIPTION')}</span>
                    </div>
                    <div className="graph">
                      <div className="graph-eclipse">
                        <svg width={222} height={131} viewBox="0 0 222 131" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_164_4849)">
                            <path
                              d="M6.84042 128.38C4.48635 128.782 2.24315 127.2 1.93339 124.832C0.0383925 110.345 1.03337 95.6116 4.877 81.4864C9.09949 65.9691 16.6581 51.5604 27.0251 39.2663C37.3921 26.9723 50.3175 17.0892 64.8991 10.3072C79.4806 3.5251 95.3668 0.00752104 111.448 1.20458e-05C127.53 -0.00749695 143.419 3.49525 158.007 10.2637C172.595 17.0321 185.53 26.9031 195.908 39.1875C206.287 51.4718 213.859 65.8735 218.096 81.3869C221.953 95.5084 222.961 110.241 221.08 124.73C220.772 127.098 218.531 128.682 216.176 128.282C213.822 127.882 212.247 125.65 212.547 123.28C214.222 110.034 213.278 96.5727 209.753 83.6654C205.848 69.3662 198.868 56.0917 189.302 44.7688C179.736 33.4459 167.814 24.3474 154.367 18.1087C140.921 11.87 126.275 8.64142 111.452 8.64834C96.6295 8.65526 81.9867 11.8975 68.5463 18.1488C55.106 24.4 43.1921 33.5096 33.6365 44.8415C24.0809 56.1733 17.1139 69.4543 13.2219 83.7572C9.70877 96.6677 8.77753 110.13 10.4653 123.375C10.7672 125.744 9.19448 127.977 6.84042 128.38Z"
                              fill="#ECE9F1" />
                            <path
                              d="M6.84042 128.38C4.48635 128.782 2.24313 127.2 1.93335 124.832C-0.966229 102.668 2.92215 80.1058 13.1389 60.1478C24.0135 38.9046 41.4733 21.753 62.9066 11.2582C84.34 0.76345 108.595 -2.51035 132.044 1.92649C154.074 6.09492 174.28 16.8588 190.01 32.741C191.69 34.4378 191.564 37.1797 189.803 38.7926C188.042 40.4055 185.313 40.278 183.627 38.5868C169.162 24.0792 150.631 14.2452 130.436 10.424C108.822 6.33446 86.4657 9.35203 66.7098 19.0254C46.9539 28.6988 30.8607 44.5081 20.8372 64.0886C11.4716 82.3839 7.87542 103.053 10.4653 123.375C10.7672 125.744 9.19448 127.977 6.84042 128.38Z"
                              fill="url(#paint0_linear_164_4849)" />
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_164_4849" x1="19.0993" y1="92.441" x2="177.01"
                                            y2="103.599" gradientUnits="userSpaceOnUse">
                              <stop offset={1} stopColor="#4776E6" />
                              <stop offset={1} stopColor="#8E54E9" />
                            </linearGradient>
                            <clipPath id="clip0_164_4849">
                              <rect width={222} height={131} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="graph-text">
                        <div className="icon">
                          <svg width={48} height={48} viewBox="0 0 48 48" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <circle cx={24} cy={24} r={24} fill="#D0DEFF" fillOpacity="0.5" />
                            <path
                              d="M25.35 32.1299C24.59 32.8199 23.42 32.8199 22.66 32.1199L22.55 32.0199C17.3 27.2699 13.87 24.1599 14 20.2799C14.06 18.5799 14.93 16.9499 16.34 15.9899C18.98 14.1899 22.24 15.0299 24 17.0899C25.76 15.0299 29.02 14.1799 31.66 15.9899C33.07 16.9499 33.94 18.5799 34 20.2799C34.14 24.1599 30.7 27.2699 25.45 32.0399L25.35 32.1299Z"
                              fill="#4776E6" />
                          </svg>
                          <div className="proc">68.5%</div>
                          <div className="title">Доходы</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search">
        <div className="container">
          <div className="search-wrap">
            <div className="search-wrap__title ttl">
              {t('MAIN.SEARCH1')}<span>20 000+</span>{t('MAIN.SEARCH2')}
            </div>
            <form className="search-wrap__form">
              <div className="input">
                <div className="icon">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 11C19 13.2091 18.1046 15.2091 16.6569 16.6569C15.2091 18.1046 13.2091 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                      stroke="#5D5E65" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 20.9999L16.6569 16.6567" stroke="#5D5E65" strokeWidth={2} strokeLinecap="round"
                          strokeLinejoin="round" />
                  </svg>
                </div>
                <input type="text" placeholder="Найдите автора контента..." />
              </div>
              <button type="submit" className="btn">{t('MAIN.SEARCH')}</button>
            </form>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="about-wrap">
            <div className="about-wrap__title ttl">{t('MAIN.WHAT_IS')}<span>Pays</span>?</div>
            <div className="about-wrap__text">
              {t('MAIN.WHAT_IS_ANSWER')}
            </div>
            <div className="about-wrap__text--more">{t('MAIN.READ_MORE')}</div>
          </div>
        </div>
      </div>
      <div className="benefits">
        <div className="container">
          <div className="benefits-wrap">
            <div className="benefits-wrap__image">
              <picture>
                <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/4.webp" type="image/webp" />
                <img src="http://localhost:3000/images/home-page-not-logged/uploads/4.png" alt="img" /></picture>
            </div>
            <div className="benefits-wrap__content">
              <div
                className="title ttl">{t('MAIN.CARD1_TITLE1')}<span>{t('MAIN.CARD1_TITLE_WORD')}</span>{t('MAIN.CARD1_TITLE2')}
              </div>
              <div className="text">{t('MAIN.CARD1_DESCRIPTION')}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="benefits">
        <div className="container">
          <div className="benefits-wrap">
            <div className="benefits-wrap__image">
              <picture>
                <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/5.webp" type="image/webp" />
                <img src="http://localhost:3000/images/home-page-not-logged/uploads/5.png" alt="img" /></picture>
            </div>
            <div className="benefits-wrap__content">
              <div
                className="title ttl">{t('MAIN.CARD2_TITLE1')}<span>{t('MAIN.CONTENT')}</span>{t('MAIN.CARD2_TITLE2')}
              </div>
              <div className="text">{t('MAIN.CARD2_DESCRIPTION')}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="benefits">
        <div className="container">
          <div className="benefits-wrap">
            <div className="benefits-wrap__image">
              <picture>
                <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/6.webp" type="image/webp" />
                <img src="http://localhost:3000/images/home-page-not-logged/uploads/6.png" alt="img" /></picture>
            </div>
            <div className="benefits-wrap__content">
              <div
                className="title ttl">{t('MAIN.CARD3_TITLE1')}<span>{t('MAIN.CARD3_TITLE_WORD')}</span>{t('MAIN.CARD3_TITLE2')}
              </div>
              <div className="text">{t('MAIN.CARD3_DESCRIPTION')}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="why">
        <div className="container">
          <div className="why-wrap">
            <div className="why-wrap__title ttl">{t('MAIN.WHY_FANS')}<span>Pays</span>?</div>
            <div className="why-wrap__list">
              <div className="item">
                <div className="icon">
                  <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 46.4C20.8 56 8 56 8 56C8 56 8 43.2 17.6 40" stroke="url(#paint0_linear_164_3828)"
                          strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M56 8C56 8 47.6034 8.71061 42.6667 10.6667C38.8085 12.1954 35.0216 15.2939 31.7343 18.6667C25.6888 24.8695 21.3333 32 21.3333 32L32 42.6667C32 42.6667 39.1305 38.3112 45.3333 32.2657C48.7061 28.9784 51.8046 25.1915 53.3333 21.3333C55.2894 16.3966 56 8 56 8Z"
                      stroke="#1A051D" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32 42.6666L34.6667 55.9999H37.3333L45.3333 47.9999V32.2656" stroke="#1A051D"
                          strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.3333 32L8 29.3333L8 26.6667L16 18.6667H31.7343" stroke="#1A051D" strokeWidth={5}
                          strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_164_3828" x1="9.31035" y1="46.6926" x2="20.7428" y2="47.5003"
                                      gradientUnits="userSpaceOnUse">
                        <stop offset={1} stopColor="#4776E6" />
                        <stop offset={1} stopColor="#8E54E9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text">{t('MAIN.WHY_ANSWER1')}</div>
              </div>
              <div className="item">
                <div className="icon">
                  <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.2381 13.9017L14.002 19.1891C13.8026 19.6606 13.7916 20.1905 13.9712 20.6699L16.8439 28.3369C16.9616 28.6509 17.1563 28.9302 17.4101 29.1493C17.6639 29.3683 17.9687 29.5201 18.2965 29.5905L23.654 30.742C23.9513 30.8059 24.2301 30.9367 24.4692 31.1246C24.7083 31.3124 24.9015 31.5523 25.0339 31.8259L25.9853 33.7914C26.1491 34.1297 26.4048 34.415 26.7232 34.6146C27.0416 34.8142 27.4097 34.9201 27.7855 34.9201H31.1437"
                      stroke="#1A051D" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M53.5412 42.593L39.9696 34.2458C39.7317 34.0995 39.4658 34.0047 39.189 33.9673L33.4844 33.1983C33.056 33.1406 32.6204 33.2232 32.2429 33.4337C31.8655 33.6443 31.5663 33.9715 31.3904 34.3663L27.9657 42.0509C27.8064 42.4082 27.7555 42.8045 27.8191 43.1905C27.8828 43.5765 28.0583 43.9354 28.3239 44.2227L33.0239 49.3064C33.237 49.5368 33.3928 49.8142 33.4788 50.1161C33.5648 50.4179 33.5786 50.7358 33.519 51.0439L32.5616 55.993"
                      stroke="url(#paint0_linear_164_3835)" strokeWidth={5} strokeLinecap="round"
                      strokeLinejoin="round" />
                    <path
                      d="M38.1145 8.78711L40.4479 12.9667C40.6685 13.3618 40.7486 13.8201 40.6751 14.2666C40.6015 14.7131 40.3788 15.1215 40.0431 15.425L33.3154 21.5094C33.2012 21.6126 33.0755 21.7024 32.9408 21.7768L29.8803 23.4669C29.5843 23.6304 29.2516 23.7161 28.9135 23.7161H23.5771C23.1836 23.7161 22.7988 23.8322 22.471 24.0499C22.1431 24.2675 21.8868 24.577 21.734 24.9397L19.6522 29.8818"
                      stroke="#1A051D" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z"
                      stroke="#1A051D" strokeWidth={5} strokeMiterlimit={10} />
                    <defs>
                      <linearGradient id="paint0_linear_164_3835" x1="29.9012" y1="42.7226" x2="48.2743" y2="44.1879"
                                      gradientUnits="userSpaceOnUse">
                        <stop offset={1} stopColor="#4776E6" />
                        <stop offset={1} stopColor="#8E54E9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text">{t('MAIN.WHY_ANSWER2')}</div>
              </div>
              <div className="item">
                <div className="icon">
                  <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z"
                      stroke="#1A051D" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 26.6667H24.0267" stroke="#1A051D" strokeWidth={5} strokeLinecap="round"
                          strokeLinejoin="round" />
                    <path d="M40 26.6667H40.0267" stroke="#1A051D" strokeWidth={5} strokeLinecap="round"
                          strokeLinejoin="round" />
                    <path
                      d="M25.3333 40C26.2023 40.8869 27.2396 41.5915 28.3843 42.0726C29.5291 42.5536 30.7583 42.8014 32 42.8014C33.2417 42.8014 34.4709 42.5536 35.6157 42.0726C36.7604 41.5915 37.7977 40.8869 38.6667 40"
                      stroke="url(#paint0_linear_164_3842)" strokeWidth={5} strokeLinecap="round"
                      strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_164_3842" x1="26.4253" y1="41.1718" x2="35.027" y2="44.0645"
                                      gradientUnits="userSpaceOnUse">
                        <stop offset={1} stopColor="#4776E6" />
                        <stop offset={1} stopColor="#8E54E9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text">{t('MAIN.WHY_ANSWER3')}</div>
              </div>
              <div className="item">
                <div className="icon">
                  <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.3333" cy={24} r="2.66667" stroke="#1A051D" strokeWidth={5} strokeLinecap="round"
                            strokeLinejoin="round" />
                    <path d="M12 53.3333L37.3333 28L56 46.6667" stroke="url(#paint0_linear_164_3849)" strokeWidth={5}
                          strokeLinecap="round" strokeLinejoin="round" />
                    <rect x={8} y="10.6667" width={48} height="42.6667" stroke="#1A051D" strokeWidth={5}
                          strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_164_3849" x1="15.6035" y1="38.5966" x2="46.7308" y2="42.4165"
                                      gradientUnits="userSpaceOnUse">
                        <stop offset={1} stopColor="#4776E6" />
                        <stop offset={1} stopColor="#8E54E9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text">{t('MAIN.WHY_ANSWER4')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider slider-pc">
        <div className="container">
          <div className="slider-wrap">
            <div
              className="slider-wrap__title ttl">{t('MAIN.SLIDER_TITLE1')}<span>{t('MAIN.SLIDER_TITLE_WORD')}</span>{t('MAIN.SLIDER_TITLE2')}
            </div>
            <div className="slider-wrap__list">
              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <picture>
                      <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/7.webp"
                              type="image/webp" />
                      <img src="http://localhost:3000/images/home-page-not-logged/uploads/7.png" alt="img" /></picture>
                  </div>
                  <div className="content">
                    <div className="name">{t('MAIN.SLIDER_CARD1_NAME')}</div>
                    <div className="position">{t('MAIN.SLIDER_CARD1_TAGS')}</div>
                    <a href="#" className="btn">{t('MAIN.SLIDER_CARD_BTN')}</a>
                  </div>
                </div>
              </div>
              <div className="item ">
                <div className="wrapper zoom">
                  <div className="image">
                    <picture>
                      <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/8.webp"
                              type="image/webp" />
                      <img src="http://localhost:3000/images/home-page-not-logged/uploads/8.png" alt="img" /></picture>
                  </div>
                  <div className="content">
                    <div className="name">{t('MAIN.SLIDER_CARD2_NAME')}</div>
                    <div className="position">{t('MAIN.SLIDER_CARD2_TAGS')}</div>
                    <a href="#" className="btn">{t('MAIN.SLIDER_CARD_BTN')}</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <picture>
                      <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/9.webp"
                              type="image/webp" />
                      <img src="http://localhost:3000/images/home-page-not-logged/uploads/9.png" alt="img" /></picture>
                  </div>
                  <div className="content">
                    <div className="name">{t('MAIN.SLIDER_CARD3_NAME')}</div>
                    <div className="position">{t('MAIN.SLIDER_CARD3_TAGS')}</div>
                    <a href="#" className="btn">{t('MAIN.SLIDER_CARD_BTN')}</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <picture>
                      <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/7.webp"
                              type="image/webp" />
                      <img src="http://localhost:3000/images/home-page-not-logged/uploads/7.png" alt="img" /></picture>
                  </div>
                  <div className="content">
                    <div className="name">{t('MAIN.SLIDER_CARD4_NAME')}</div>
                    <div className="position">{t('MAIN.SLIDER_CARD4_TAGS')}</div>
                    <a href="#" className="btn">{t('MAIN.SLIDER_CARD_BTN')}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider slider-mobile">
        <div className="container">
          <div className="slider-wrap">
            <div className="slider-wrap__title ttl">Авторы уже <span>зарабатывают</span> с нами</div>
            <div className="slider-wrap__list">
              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <picture>
                      <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/7.webp"
                              type="image/webp" />
                      <img src="http://localhost:3000/images/home-page-not-logged/uploads/7.png" alt="img" /></picture>
                  </div>
                  <div className="content">
                    <div className="name">Василий Дрозд</div>
                    <div className="position">Видеоигры</div>
                    <a href="#" className="btn">Перейти в блог</a>
                  </div>
                </div>
              </div>
              <div className="item ">
                <div className="wrapper">
                  <div className="image">
                    <picture>
                      <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/8.webp"
                              type="image/webp" />
                      <img src="http://localhost:3000/images/home-page-not-logged/uploads/8.png" alt="img" /></picture>
                  </div>
                  <div className="content">
                    <div className="name">Аня Кошкина</div>
                    <div className="position">Медитация · Йога · Пилатес</div>
                    <a href="#" className="btn">Перейти в блог</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <picture>
                      <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/9.webp"
                              type="image/webp" />
                      <img src="http://localhost:3000/images/home-page-not-logged/uploads/9.png" alt="img" /></picture>
                  </div>
                  <div className="content">
                    <div className="name">Соломия Кравченко</div>
                    <div className="position">Макияж • Личный бренд</div>
                    <a href="#" className="btn">Перейти в блог</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <picture>
                      <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/7.webp"
                              type="image/webp" />
                      <img src="http://localhost:3000/images/home-page-not-logged/uploads/7.png" alt="img" /></picture>
                  </div>
                  <div className="content">
                    <div className="name">Василий Дрозд 2</div>
                    <div className="position">Видеоигры</div>
                    <a href="#" className="btn">Перейти в блог</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-wrap__more">Показать всех</div>
          </div>
        </div>
      </div>
      <div className="create">
        <div className="container">
          <div className="create-wrap">
            <div
              className="create-wrap__title ttl">{t('MAIN.CREATE.TITLE1')}<span>{t('MAIN.CONTENT')}</span>{t('MAIN.CREATE.TITLE2')}
            </div>
            <div className="create-wrap__text">{t('MAIN.CREATE.TITLE_DESCRIPTION')}</div>
            <div className="create-wrap__tabs">
              <div data-id={0} className="item">{t('MAIN.CREATE.ROLE1')}</div>
              <div data-id={1} className="item">{t('MAIN.CREATE.ROLE2')}</div>
              <div data-id={2} className="item">{t('MAIN.CREATE.ROLE3')}</div>
              <div data-id={3} className="item">{t('MAIN.CREATE.ROLE4')}</div>
            </div>
            <div className="create-wrap__list">
              <div className="item">
                <div className="left">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/10.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/10.png" alt="img" /></picture>
                </div>
                <div className="right">
                  <div className="title">Предложите подписчикам:</div>
                  <ul>
                    <li>
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15 16C18.866 16 22 12.866 22 9C22 5.13401 18.866 2 15 2C11.134 2 8 5.13401 8 9C8 9.89183 8.16678 10.7447 8.47085 11.5291L3 17V21H7V19H9V17H11L12.4709 15.5291C13.2553 15.8332 14.1082 16 15 16Z"
                          stroke="#4776E6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 7H17.01" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                      </svg>
                      Ранний доступ к видео
                    </li>
                    <li>
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 4H21" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M3 20H21" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M3.5 9L5.5 15H6.5L8.5 9" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M12 9V15" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M16 15V13M16 13V9H19C20.1046 9 21 9.89543 21 11C21 12.1046 20.1046 13 19 13H16Z"
                              stroke="#4776E6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Эксклюзивный видео-контент
                    </li>
                    <li>
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x={3} y={4} width={18} height={16} stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M7 4V20" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M3 16H7" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M3 12H7" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M3 8H7" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M17 4V20" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M21 16H17" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M21 12H17" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M21 8H17" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                      </svg>
                      Нарезки невошедших моментов
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <div className="left">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/11.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/11.png" alt="img" /></picture>
                </div>
                <div className="right">
                  <div className="title">Предложите подписчикам:</div>
                  <ul>
                    <li>
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x={3} y={4} width={18} height={16} stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M7 4V20" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M3 16H7" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M3 12H7" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M3 8H7" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M17 4V20" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M21 16H17" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M21 12H17" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M21 8H17" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                      </svg>
                      Видео поэтапного создания работы
                    </li>
                    <li>
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5L22 9L12 13L2 9L12 5Z" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M22 9V15" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path
                          d="M6 10.6001V16.0001C6 16.7957 6.63214 17.5588 7.75736 18.1214C8.88258 18.684 10.4087 19.0001 12 19.0001C13.5913 19.0001 15.1174 18.684 16.2426 18.1214C17.3679 17.5588 18 16.7957 18 16.0001V10.6001"
                          stroke="#4776E6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Уроки рисования
                    </li>
                    <li>
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12H3V7H9V3H15V7H21V12Z" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M4 12V21H20V12" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M9 16V21" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                      </svg>
                      Персональные арты или скетчи
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <div className="left">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/12.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/12.png" alt="img" /></picture>
                </div>
                <div className="right">
                  <div className="title">Предложите подписчикам:</div>
                  <ul>
                    <li>
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15 16C18.866 16 22 12.866 22 9C22 5.13401 18.866 2 15 2C11.134 2 8 5.13401 8 9C8 9.89183 8.16678 10.7447 8.47085 11.5291L3 17V21H7V19H9V17H11L12.4709 15.5291C13.2553 15.8332 14.1082 16 15 16Z"
                          stroke="#4776E6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 7H17.01" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                      </svg>
                      Ранний доступ к новым релизам
                    </li>
                    <li>
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 4H21" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M3 20H21" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M3.5 9L5.5 15H6.5L8.5 9" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M12 9V15" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M16 15V13M16 13V9H19C20.1046 9 21 9.89543 21 11C21 12.1046 20.1046 13 19 13H16Z"
                              stroke="#4776E6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Персональная видео-благодарность
                    </li>
                    <li>
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx={5} cy={17} r={3} stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                                strokeLinejoin="round" />
                        <circle cx={16} cy={17} r={3} stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                                strokeLinejoin="round" />
                        <path d="M8 17V4H19V17" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                      </svg>
                      Приватные онлайн-концерты
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <div className="left">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/13.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/13.png" alt="img" /></picture>
                </div>
                <div className="right">
                  <div className="title">Предложите подписчикам:</div>
                  <ul>
                    <li>
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15 16C18.866 16 22 12.866 22 9C22 5.13401 18.866 2 15 2C11.134 2 8 5.13401 8 9C8 9.89183 8.16678 10.7447 8.47085 11.5291L3 17V21H7V19H9V17H11L12.4709 15.5291C13.2553 15.8332 14.1082 16 15 16Z"
                          stroke="#4776E6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 7H17.01" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                      </svg>
                      Ранний доступ к новым релизам
                    </li>
                    <li>
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 4H21" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M3 20H21" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M3.5 9L5.5 15H6.5L8.5 9" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M12 9V15" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M16 15V13M16 13V9H19C20.1046 9 21 9.89543 21 11C21 12.1046 20.1046 13 19 13H16Z"
                              stroke="#4776E6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Персональная видео-благодарность
                    </li>
                    <li>
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 3H2V17L5 14H17V3Z" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                        <path d="M17 7H21V21L18 18H6V14" stroke="#4776E6" strokeWidth={2} strokeLinecap="round"
                              strokeLinejoin="round" />
                      </svg>
                      Личное общение и ответы на вопросы
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="author">
        <div className="container">
          <div className="author-wrap">
            <div
              className="author-wrap__title ttl">{t('MAIN.SLIDER2.TITLE1')}<span>{t('MAIN.SLIDER2.TITLE_WORD')}</span>{t('MAIN.SLIDER2.TITLE2')}
            </div>
            <div className="author-wrap__list">
              <div className="item">
                <div className="wrapper opacity">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/21.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/21.png" alt="img" /></picture>
                </div>
              </div>
              <div className="item">
                <div className="wrapper">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/22.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/22.png" alt="img" /></picture>
                </div>
              </div>
              <div className="item">
                <div className="wrapper">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/23.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/23.png" alt="img" /></picture>
                </div>
              </div>
              <div className="item">
                <div className="wrapper">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/24.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/24.png" alt="img" /></picture>
                </div>
              </div>
              <div className="item">
                <div className="wrapper">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/25.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/25.png" alt="img" /></picture>
                </div>
              </div>
              <div className="item">
                <div className="wrapper">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/26.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/26.png" alt="img" /></picture>
                </div>
              </div>
              <div className="item">
                <div className="wrapper">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/27.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/27.png" alt="img" /></picture>
                </div>
              </div>
              <div className="item">
                <div className="wrapper">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/28.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/28.png" alt="img" /></picture>
                </div>
              </div>
              <div className="item">
                <div className="wrapper">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/29.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/29.png" alt="img" /></picture>
                </div>
              </div>
              <div className="item">
                <div className="wrapper opacity">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/30.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/30.png" alt="img" /></picture>
                </div>
              </div>
              <div className="item">
                <div className="wrapper">
                  <picture>
                    <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/1.webp"
                            type="image/webp" />
                    <img src="http://localhost:3000/images/home-page-not-logged/uploads/1.png" alt="img" /></picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="callback">
        <div className="container">
          <div className="callback-wrap">
            <div className="callback-wrap__image">
              <picture>
                <source srcSet="http://localhost:3000/images/home-page-not-logged/uploads/31.webp" type="image/webp" />
                <img src="http://localhost:3000/images/home-page-not-logged/uploads/31.png" alt="img" /></picture>
            </div>
            <div className="callback-wrap__content">
              <div className="title">{t('MAIN.BOTTOM_MAILER.TITLE')}</div>
              <form className="form">
                <input required type="email" placeholder={t('MAIN.BOTTOM_MAILER.PLACEHOLDER')} />
                <button type="submit" className="btn btn-black">{t('MAIN.BOTTOM_MAILER.BUTTON')}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrap">
            <div className="footer-wrap__content">
              <div className="logo">
                <picture>
                  <source srcSet="http://localhost:3000/images/home-page-not-logged/main/logo-footer.svg"
                          type="image/webp" />
                  <img src="http://localhost:3000/images/home-page-not-logged/main/logo-footer.svg" alt="logo" />
                </picture>
              </div>
              <nav className="nav">
                <ul>
                  <li><a href="#">{t('О нас')}</a></li>
                  <li><a href="#">{t('Тарифы')}</a></li>
                  <li><a href="#">{t('Блогеры')}</a></li>
                  <li><a href="#">{t('Продукты')}</a></li>
                </ul>
              </nav>
            </div>
            <div className="footer-wrap__sidebar">
              <div className="languages">
                <div className="current">
                  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                      stroke="#5D5E65" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M16 28C18.9455 28 21.3333 22.6274 21.3333 16C21.3333 9.37258 18.9455 4 16 4C13.0545 4 10.6667 9.37258 10.6667 16C10.6667 22.6274 13.0545 28 16 28Z"
                      stroke="#5D5E65" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M4 16.0001C4 18.9456 9.37258 21.3334 16 21.3334C22.6274 21.3334 28 18.9456 28 16.0001C28 13.0546 22.6274 10.6667 16 10.6667C9.37258 10.6667 4 13.0546 4 16.0001Z"
                      stroke="#5D5E65" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>RU</span>
                  <svg width={12} height={6} viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M0.9697 0.21967C1.26259 -0.0732233 1.73747 -0.0732233 2.03036 0.21967L6.00003 4.18934L9.9697 0.21967C10.2626 -0.0732233 10.7375 -0.0732233 11.0304 0.21967C11.3233 0.512563 11.3233 0.987437 11.0304 1.28033L6.53036 5.78033C6.23747 6.07322 5.76259 6.07322 5.4697 5.78033L0.9697 1.28033C0.676807 0.987437 0.676807 0.512563 0.9697 0.21967Z"
                          fill="#5D5E65" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}