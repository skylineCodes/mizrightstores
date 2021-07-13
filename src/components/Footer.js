import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/footer.css';
import { Link } from 'react-router-dom';

import logo from '../mizright.png';

const Footer = () => {
    const accordionItemHeader = useRef('');
    const accordionItemHeaderTwo = useRef('');
    const accordionItemHeaderThree = useRef('');

    const toggleAccordion = (n) => {
      if (n === 1) {
        accordionItemHeader.current.classList.toggle('active');

        const accordionItemBody = accordionItemHeader.current.nextElementSibling;

        if (accordionItemHeader.current.classList.contains('active')) {
          accordionItemHeader.current.children[1].style.transform = 'rotateX(-180deg)';
          accordionItemHeader.current.children[1].style.transition = '0.5s';
          accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
          accordionItemHeader.current.children[1].style.transform =
            'rotateX(0deg)';
          accordionItemHeader.current.children[1].style.transition = '0.5s';
          accordionItemBody.style.maxHeight = 0;
        }
      } else if (n === 2) {
         accordionItemHeaderTwo.current.classList.toggle('active');

         const accordionItemBody =
           accordionItemHeaderTwo.current.nextElementSibling;

         if (accordionItemHeaderTwo.current.classList.contains('active')) {
           accordionItemHeaderTwo.current.children[1].style.transform =
             'rotateX(-180deg)';
           accordionItemHeaderTwo.current.children[1].style.transition = '0.5s';
           accordionItemBody.style.maxHeight =
             accordionItemBody.scrollHeight + 'px';
         } else {
           accordionItemHeaderTwo.current.children[1].style.transform =
             'rotateX(0deg)';
           accordionItemHeaderTwo.current.children[1].style.transition = '0.5s';
           accordionItemBody.style.maxHeight = 0;
         }
      } else {
         accordionItemHeaderThree.current.classList.toggle('active');

         const accordionItemBody =
           accordionItemHeaderThree.current.nextElementSibling;

         if (accordionItemHeaderThree.current.classList.contains('active')) {
           accordionItemHeaderThree.current.children[1].style.transform =
             'rotateX(-180deg)';
           accordionItemHeaderThree.current.children[1].style.transition = '0.5s';
           accordionItemBody.style.maxHeight =
             accordionItemBody.scrollHeight + 'px';
         } else {
           accordionItemHeaderThree.current.children[1].style.transform =
             'rotateX(0deg)';
           accordionItemHeaderThree.current.children[1].style.transition = '0.5s';
           accordionItemBody.style.maxHeight = 0;
         }
      }
    }

  return (
    <>
      <section className='footer_section_mobile'>
        <footer className='footer'>
          <div className='footer_top'>
            <div className='accordion'>
              <div className='accordionItem'>
                <div
                  className='accordionItemHeader'
                  ref={accordionItemHeader}
                  onClick={() => {
                    toggleAccordion(1);
                  }}
                >
                  <h6 className='header'>Mizright</h6>
                  <span className='icon'>
                    <FontAwesomeIcon icon={faAngleDown} />{' '}
                  </span>
                </div>
                <div className='accordionItemBody'>
                  <div className='accordionItemBodyContent'>
                    <ul className='subtext_wrapper'>
                      <li className='subtext'>Customer Stories</li>
                      <li className='subtext'>Pricing</li>
                      <li className='subtext'>About Us</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='accordionItem'>
                <div
                  className='accordionItemHeader'
                  ref={accordionItemHeaderTwo}
                  onClick={() => {
                    toggleAccordion(2);
                  }}
                >
                  <h6 className='header'>Resources</h6>
                  <span className='icon'>
                    <FontAwesomeIcon icon={faAngleDown} />{' '}
                  </span>
                </div>
                <div className='accordionItemBody'>
                  <div className='accordionItemBodyContent'>
                    <ul className='subtext_wrapper'>
                      <li className='subtext'>Blog</li>
                      <li className='subtext'>Customer Support</li>
                      <li className='subtext'>How It Works</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='accordionItem'>
                <div
                  className='accordionItemHeader'
                  ref={accordionItemHeaderThree}
                  onClick={() => {
                    toggleAccordion(3);
                  }}
                >
                  <h6 className='header'>Compliance</h6>
                  <span className='icon'>
                    <FontAwesomeIcon icon={faAngleDown} />{' '}
                  </span>
                </div>
                <div className='accordionItemBody'>
                  <div className='accordionItemBodyContent'>
                    <ul className='subtext_wrapper'>
                      <li className='subtext'>Terms of service</li>
                      <li className='subtext'>Privacy policy</li>
                      <li className='subtext'>
                        Compliance, legal and security
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer_bottom'>
            <div className='logo_div'>
              <span className='logo'>
                <Link href='/'>
                  <img src={logo} alt='logo' className='logo__image' />
                </Link>
              </span>
              <p className='copywrite'>&copy; Mizright Ltd. 2021</p>
            </div>
            <div className='links_div'>
              <ul className='links_wrapper'>
                <li className='links'>
                  <span>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </li>
                <li className='links'>
                  <span>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </span>
                </li>
                <li className='links'>
                  <span>
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </section>
      {/* <section className="footer_section}>
        <footer className="footer}>
          <div className="container}>
            <div className="footer_top}>
              <div className="headerone}>
                <div className="mainText_div}>
                  <h6 className="mainText}>Mizright</h6>
                </div>
                <div className="subtext_div}>
                  <ul className="subtext_wrapper}>
                    <li className="subtext}>Customer Stories</li>
                    <li className="subtext}>Pricing</li>
                    <li className="subtext}>About Us</li>
                  </ul>
                </div>
              </div>
              <div className="headertwo}>
                <div className="mainText_div}>
                  <h6 className="mainText}>Resources</h6>
                </div>
                <div className="subtext_div}>
                  <ul className="subtext_wrapper}>
                    <li className="subtext}>Blog</li>
                    <li className="subtext}>Customer Support</li>
                    <li className="subtext}>How It Works</li>
                  </ul>
                </div>
              </div>
              <div className="headerthree}>
                <div className="mainText_div}>
                  <h6 className="mainText}>Compliance</h6>
                </div>
                <div className="subtext_div}>
                  <ul className="subtext_wrapper}>
                    <li className="subtext}>Terms of service</li>
                    <li className="subtext}>Privacy policy</li>
                    <li className="subtext}>
                      Compliance, legal and security
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer_bottom}>
              <div className="logo_div}>
                <span className="logo}>
                  <Link href='/'>
                    <img
                      src='../images/logos.jpg'
                      alt='logo'
                      className="logo__image}
                    />
                  </Link>
                </span>
                <p className="copywrite}>
                  &copy; Mizright Ltd. 2021
                </p>
              </div>
              <div className="links_div}>
                <ul className="links_wrapper}>
                  <li className="links}>
                    <span>
                      <FontAwesomeIcon icon={faInstagram} />
                    </span>
                  </li>
                  <li className="links}>
                    <span>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </span>
                  </li>
                  <li className="links}>
                    <span>
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </section> */}
    </>
  );
};

export default Footer;
