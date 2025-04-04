import React from 'react'
import { AiFillAudio, AiFillBulb, AiFillFileText } from 'react-icons/ai'
import { BiCrown } from 'react-icons/bi'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { RiLeafLine } from 'react-icons/ri'
import landing from '../assets/landing.png'

const Home = () => {
  return (
 <>
    <section id="landing">
      <div class="container">
        <div class="row">
          <div class="landing__wrapper">
            <div class="landing__content">
              <div class="landing__content__title">
                Gain more knowledge <br class="remove--tablet" />
                in less time
              </div>
              <div class="landing__content__subtitle">
                Great summaries for busy people,
                <br class="remove--tablet" />
                individuals who barely have time to read,
                <br class="remove--tablet" />
                and even people who don’t like to read.
              </div>
              <button class="btn home__cta--btn">Login</button>
            </div>
            <figure class="landing__image--mask">
              <img src={landing} alt="landing" />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section id="features">
      <div class="container">
        <div class="row">
          <div class="section__title">Understand books in few minutes</div>
          <div class="features__wrapper">
            <div class="features">
              <div class="features__icon">
                <AiFillFileText />
              </div>
              <div class="features__title">Read or listen</div>
              <div class="features__sub--title">
                Save time by getting the core ideas from the best books.
              </div>
            </div>
            <div class="features">
              <div class="features__icon">
                <AiFillBulb />
              </div>
              <div class="features__title">Find your next read</div>
              <div class="features__sub--title">
                Explore book lists and personalized recommendations.
              </div>
            </div>
            <div class="features">
              <div class="features__icon">
                <AiFillAudio />
              </div>
              <div class="features__title">Briefcasts</div>
              <div class="features__sub--title">
                Gain valuable insights from briefcasts
              </div>
            </div>
          </div>
          <div class="statistics__wrapper">
            <div class="statistics__content--header">
              <div class="statistics__heading">Enhance your knowledge</div>
              <div class="statistics__heading">Achieve greater success</div>
              <div class="statistics__heading">Improve your health</div>
              <div class="statistics__heading">
                Develop better parenting skills
              </div>
              <div class="statistics__heading">Increase happiness</div>
              <div class="statistics__heading">
                Be the best version of yourself!
              </div>
            </div>
            <div class="statistics__content--details">
              <div class="statistics__data">
                <div class="statistics__data--number">93%</div>
                <div class="statistics__data--title">
                  of Summarist members <b>significantly increase</b> reading
                  frequency.
                </div>
              </div>
              <div class="statistics__data">
                <div class="statistics__data--number">96%</div>
                <div class="statistics__data--title">
                  of Summarist members <b>establish better</b> habits.
                </div>
              </div>
              <div class="statistics__data">
                <div class="statistics__data--number">90%</div>
                <div class="statistics__data--title">
                  have made <b>significant positive</b> change to their lives.
                </div>
              </div>
            </div>
          </div>
          <div class="statistics__wrapper">
            <div
              class="statistics__content--details statistics__content--details-second"
            >
              <div class="statistics__data">
                <div class="statistics__data--number">91%</div>
                <div class="statistics__data--title">
                  of Summarist members <b>report feeling more productive</b>
                  after incorporating the service into their daily routine.
                </div>
              </div>
              <div class="statistics__data">
                <div class="statistics__data--number">94%</div>
                <div class="statistics__data--title">
                  of Summarist members have <b>noticed an improvement</b> in
                  their overall comprehension and retention of information.
                </div>
              </div>
              <div class="statistics__data">
                <div class="statistics__data--number">88%</div>
                <div class="statistics__data--title">
                  of Summarist members <b>feel more informed</b> about current
                  events and industry trends since using the platform.
                </div>
              </div>
            </div>
            <div
              class="statistics__content--header statistics__content--header-second"
            >
              <div class="statistics__heading">Expand your learning</div>
              <div class="statistics__heading">Accomplish your goals</div>
              <div class="statistics__heading">Strengthen your vitality</div>
              <div class="statistics__heading">Become a better caregiver</div>
              <div class="statistics__heading">Improve your mood</div>
              <div class="statistics__heading">Maximize your abilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="reviews">
      <div class="row">
        <div class="container">
          <div class="section__title">What our members say</div>
          <div class="reviews__wrapper">
            <div class="review">
              <div class="review__header">
                <div class="review__name">Hanna M.</div>
                <div class="review__stars">
                  <BsStarFill />
                </div>
              </div>
              <div class="review__body">
                This app has been a <b>game-changer</b> for me! It's saved me so
                much time and effort in reading and comprehending books. Highly
                recommend it to all book lovers.
              </div>
            </div>
            <div class="review">
              <div class="review__header">
                <div class="review__name">David B.</div>
                <div class="review__stars">
                  <BsStarFill />
                </div>
              </div>
              <div class="review__body">
                I love this app! It provides
                <b>concise and accurate summaries</b> of books in a way that is
                easy to understand. It's also very user-friendly and intuitive.
              </div>
            </div>
            <div class="review">
              <div class="review__header">
                <div class="review__name">Nathan S.</div>
                <div class="review__stars">
                  <BsStarFill />
                </div>
              </div>
              <div class="review__body">
                This app is a great way to get the main takeaways from a book
                without having to read the entire thing.
                <b>The summaries are well-written and informative.</b>
                Definitely worth downloading.
              </div>
            </div>
            <div class="review">
              <div class="review__header">
                <div class="review__name">Ryan R.</div>
                <div class="review__stars">
                  <BsStarFill />
                </div>
              </div>
              <div class="review__body">
                If you're a busy person who
                <b>loves reading but doesn't have the time</b> to read every
                book in full, this app is for you! The summaries are thorough
                and provide a great overview of the book's content.
              </div>
            </div>
          </div>
          <div class="reviews__btn--wrapper">
            <button class="btn home__cta--btn">Login</button>
          </div>
        </div>
      </div>
    </section>
    <section id="numbers">
      <div class="container">
        <div class="row">
          <div class="section__title">Start growing with Summarist now</div>
          <div class="numbers__wrapper">
            <div class="numbers">
              <div class="numbers__icon">
                <BiCrown />
              </div>
              <div class="numbers__title">3 Million</div>
              <div class="numbers__sub--title">Downloads on all platforms</div>
            </div>
            <div class="numbers">
              <div class="numbers__icon numbers__star--icon">
                <BsStarFill />
                <BsStarHalf />
              </div>
              <div class="numbers__title">4.5 Stars</div>
              <div class="numbers__sub--title">
                Average ratings on iOS and Google Play
              </div>
            </div>
            <div class="numbers">
              <div class="numbers__icon">
                <RiLeafLine />
              </div>
              <div class="numbers__title">97%</div>
              <div class="numbers__sub--title">
                Of Summarist members create a better reading habit
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="footer">
      <div class="container">
        <div class="row">
          <div class="footer__top--wrapper">
            <div class="footer__block">
              <div class="footer__link--title">Actions</div>
              <div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Summarist Magazine</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Cancel Subscription</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Help</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Contact us</a>
                </div>
              </div>
            </div>
            <div class="footer__block">
              <div class="footer__link--title">Useful Links</div>
              <div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Pricing</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Summarist Business</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Gift Cards</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Authors & Publishers</a>
                </div>
              </div>
            </div>
            <div class="footer__block">
              <div class="footer__link--title">Company</div>
              <div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">About</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Careers</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Partners</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Code of Conduct</a>
                </div>
              </div>
            </div>
            <div class="footer__block">
              <div class="footer__link--title">Other</div>
              <div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Sitemap</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Legal Notice</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Terms of Service</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Privacy Policies</a>
                </div>
              </div>
            </div>
          </div>
          <div class="footer__copyright--wrapper">
            <div class="footer__copyright">
              Copyright &copy; 2023 Summarist.
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home