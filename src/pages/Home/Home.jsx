import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner'
import Logement from '../../components/Logement/Logement';
import data from '../../json/logements.json'


function Home() {

  const cardElements = data.map(card => (
    <Logement type="card" data={card} className='logement'/>
));

  return (
    <div className="App">
      <Header />
      <section className='bodyHome'>
        <div className='bannière'>
          <Banner title="Chez vous, " title2=" et partout ailleurs"/>
        </div>
        <div className='cardList'>
          {cardElements}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;

