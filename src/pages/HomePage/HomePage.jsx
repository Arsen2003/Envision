  import Trigger  from 'react-scroll-trigger'
  import CountUp from 'react-countup'
  import React, { useEffect, useState } from 'react';
  import { Helmet } from 'react-helmet'
  import styles from './HomePage.module.scss'
  import contentIcon1 from '../../assets/icons/content-icon-1.svg'
  import contentIcon2 from '../../assets/icons/content-icon-2.svg'
  import heroAboutImage from '../../assets/images/hero-about-image.png'
  import CMbutton from '../../UI/CMbutton/CMbutton';
  import Cbutton from '../../UI/Cbutton/Cbutton';
  import resultImage1 from '../../assets/images/results-about-1-image.png'
  import resultImage2 from '../../assets/images/results-about-2-image.png'
  import resultImage3 from '../../assets/images/results-about-3-image.png'
  import EventsCard from '../../components/EventsCard/EventsCard';
  import NewsCard from '../../components/NewsCard/NewsCard';
  import FAQaccardion from '../../components/FAQaccardeon/FAQaccardion';
  import AOS from 'aos'
  import 'aos/dist/aos.css'

  import { API } from '../../api/index.js'


  const HomePage = () => {
  const [eventsList, setEventsList] = useState([])
  const [newslist, setNewsList] = useState([])
  const [faqList,setFaqList] = useState([])
  const [isAnimated, setIsAnimated] = useState(false)
    const handleScroll = () => {
      setIsAnimated(true)
    }

  const getEvents= () =>{
    fetch(`${API}/events`)
      .then((response) => response.json())
      .then((data) => {
        const lastTwoNews = data.slice(-2)
        setEventsList(lastTwoNews)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  const getNews = () => {
    fetch(`${API}/programs/`)
      .then((response) => response.json())
      .then((data) => {
        const lastTwoNews = data.slice(-2)
        setNewsList(lastTwoNews)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

    const getFaq = () => {
      fetch(`${API}/faq/`)
        .then((response) => response.json())
        .then((data) => {
          setFaqList(data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }

  useEffect(() => {
  getEvents()
  getNews()
  getFaq()
  AOS.init({
    duration:2500,
  })
  }, [])

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 460) {
          AOS.refresh() // обновляем AOS
        }
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])


    return (
      <main className={styles.main}>
        <Helmet>
          <title>ENVISION</title>
          <meta name="description" content="Описание вашей страницы" />
          <meta
            name="keywords"
            content="ENVISION, благотворительная организация,Кыргызстана,помощь, социального равенство"
          />
        </Helmet>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.hero__content}>
              <div className={styles.hero__content_title}>
                <h1 data-aos="fade-right">
                  У каждого <span>человека</span> есть
                  <br /> право быть окруженным
                  <br /> <span>теплом</span> и <span>добротой!</span>
                </h1>
                <CMbutton data-aos="fade-right">Хочу помочь</CMbutton>
              </div>
              <img
                data-aos="fade-left"
                src={heroAboutImage}
                alt="hero-About-Image"
              />
            </div>
          </div>
        </section>
        <section className={styles.about_us}>
          <div className={styles.patterns}>
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
          </div>
          <div className="container_content">
            <div className={styles.about_us__content}>
              <h2 data-aos="fade-right" className={styles.title}>
                О нас{' '}
              </h2>
              <div className={styles.about_us_cards}>
                <div
                  data-aos="fade-right"
                  className={styles.about_us_cards__title}
                >
                  <h3>Who we are</h3>
                  <p>
                    Мы молодая, некоммерческая, благотворительная организация,
                    основанная в 2023 году. Организация состоит из 10-ти
                    соучредителей единомышленников. В И мы горим желанием помочь
                    нуждающимся слоям населения Кыргызстана. Наиболее
                    эффективный метод помощи, путем использования ресурсов и
                    получения наибольшей пользы обществу одна из наших главных
                    целей. Мы верим, что сможем достичь целей увеличения
                    социального равенства слоев населения и внести вклад в
                    благосостояние нашей страны.
                  </p>
                </div>
                <div
                  data-aos="fade-left"
                  className={styles.about_us_cards__image}
                >
                  <h3>ENVISION</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.patterns}>
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
          </div>
        </section>
        <section className={styles.result}>
          <div className="container">
            <div className={styles.result__content}>
              <div className={styles.result__content_left}>
                <div data-aos="fade-down">
                  <img src={resultImage1} alt="" />
                  <span>
                    <Trigger onEnter={handleScroll}>
                      <CountUp start={0} end={isAnimated ? 20 : 0} duration={5}>
                        {({ countUpRef, start }) => (
                          <div>
                            <span ref={countUpRef}></span>
                            <p className={styles.result__content_title}>
                              Программ
                            </p>
                          </div>
                        )}
                      </CountUp>
                    </Trigger>
                  </span>
                </div>
                <div data-aos="fade-up">
                  <img src={resultImage2} alt="" />
                  <span>
                    <Trigger onEnter={handleScroll}>
                      <CountUp start={0} end={isAnimated ? 50 : 0} duration={5}>
                        {({ countUpRef, start }) => (
                          <span>
                            <span ref={countUpRef} />
                            <p className={styles.result__content_title}>
                              Волонтеров
                            </p>
                          </span>
                        )}
                      </CountUp>
                    </Trigger>
                  </span>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className={styles.result__content_right}
              >
                <img src={resultImage3} alt="" />
                <span>
                  <Trigger onEnter={handleScroll}>
                    <CountUp
                      start={200}
                      end={isAnimated ? 265 : 0}
                      duration={5}
                      separator=" "
                    >
                      {({ countUpRef, start }) => (
                        <div className="counter">
                          <span ref={countUpRef} />
                          <p className={styles.result__content_title}>
                            Дни игр на <br />
                            свежем воздухе
                          </p>
                        </div>
                      )}
                    </CountUp>
                  </Trigger>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.events}>
          <div className={styles.patterns}>
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
          </div>
          <div className="container_content">
            <div className={styles.events__content}>
              <h2 className={styles.title}>Мероприятии</h2>
              <div data-aos="fade-up" className={styles.events_cards}>
                {eventsList.map((item) => (
                  <EventsCard
                    key={item.id}
                    title={item.title}
                    text={item.text}
                    link={item.link}
                    image={item.image}
                    location={item.location}
                    date={item.date_time}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.patterns}>
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
          </div>
        </section>

        <section className={styles.news}>
          <div className={styles.patterns}>
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
          </div>
          <div className="container_content">
            <div className={styles.news__content}>
              <h2 className={`${(styles.title, styles.dark)}`}>События</h2>
              <div data-aos="fade-left" className={styles.news__cards}>
                {newslist.map((item) => (
                  <NewsCard
                    key={item.id}
                    title={item.title}
                    text={item.text}
                    image={item.image}
                    location={item.location}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.patterns}>
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
          </div>
        </section>
        <section className={styles.FAQ}>
          <div className={styles.patterns}>
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
          </div>
          <div className="container_content">
            <div className={styles.FAQ__content}>
              <h2 className={styles.title}>FAQ</h2>
              <div className={styles.FAQ__accardions}>
                {faqList.map((item) => (
                  <FAQaccardion
                    key={item.id}
                    answer={item.answer}
                    question={item.question}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.patterns}>
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
            <img src={contentIcon1} alt="content-icon" />
            <img src={contentIcon2} alt="content-icon" />
          </div>
        </section>
      </main>
    )
  };

  export default HomePage;