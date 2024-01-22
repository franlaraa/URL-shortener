import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Question from '../components/Question';
import Footer from '../components/Footer';
import Section from '../components/Section';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <Header />
      <main className='px-4'>
        <Section className='my'>
          <Hero />
        </Section>
        <Section className='mb-0'>
          <Question className='w-[770px] flex-row-reverse'>
            <div className='flex w-[770px] flex-row-reverse '>
              <div className='flex w-[360px]  flex-row flex-wrap content-center justify-start'>
                <h3 className=' text-pretty text-3xl font-bold tracking-wide'>
                  Discover the Impact
                </h3>
                <div className='mb-2 flex w-[390px] flex-col flex-wrap items-end justify-end text-pretty'>
                  Unleash the full potential of your online presence through our
                  powerful URL shortener analytics. Streamline lengthy links,
                  gain valuable insights into user behavior, and effortlessly
                  amplify engagement with branded short links. Take charge of
                  your digital strategy and elevate your online experience to
                  new heights today!
                </div>
              </div>
              <div>
                <img src='Line graphic.png'></img>
              </div>
            </div>
            {/* Additional content goes here if needed */}
          </Question>
        </Section>

        <Section className='mb-0'>
          <Question className='w-[770px] flex-row'>
            <div className='flex w-[770px] flex-row '>
              <div className='flex w-[360px]  flex-row flex-wrap content-center justify-start'>
                <h3 className=' text-pretty text-3xl font-bold tracking-wide'>
                  Link Shortening at Your Fingertips!
                </h3>
                <div className='mb-2 flex w-[390px] flex-col flex-wrap items-end justify-end text-pretty'>
                  Experience the power of swift link transformation! With our
                  streamlined process, your links are shortened in a heartbeat.
                  Simplify sharing and make every second count – cut and share
                  seamlessly for an unparalleled online journey. Dive into a
                  world where simplicity meets speed!
                </div>
              </div>
              <div className='scale-x-[-1] transform'>
                <img src='idea-3d.png '></img>
              </div>
            </div>
            {/* Additional content goes here if needed */}
          </Question>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
