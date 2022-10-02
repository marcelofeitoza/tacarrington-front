import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import wave from "../public/wave.svg";
import logo from "../public/logo.svg";
import { FiDownload, FiActivity, FiArrowUp, FiRadio } from "react-icons/fi";

const Home: NextPage = () => {
  const todayData = {
    
  }

  return (
    <main className={styles.main}>
      <div>
        <header>
          <Image src={logo} width="40px" alt="solar waves" />
          <h1>taCarrington</h1>
        </header>
        <div className={styles.data}>
          <FiActivity size={30} />
          <h2>1.350</h2>

          <span>
            <FiArrowUp color="#00FF47"/>
            <h5>1%</h5>
          </span>
          <div>
            <span>12/05/2023</span>
            <span>5-10 PM</span>
          </div>
        </div>
        <Image src={wave} className={styles.image} alt="solar waves" />
        
        <footer>
          <span>Atualizado há 15 minutos</span>
        </footer>
      </div>
      <div>
        <header>
          <button>
            <FiDownload />
          </button>
        </header>
        <div className={styles.cards}>
          <div>
            <span>Magnetude</span>
            <h1>5 <span>keV</span></h1>
          </div>
          <div>
            <span>Wind speed</span>
            <h1>200 <span>km / s<sup>-1</sup></span></h1>
          </div>
        </div>
        <div className={styles.events}>
          <header>
            <FiRadio size={22} />
            <h2>Next events</h2>
          </header>
          <div>
            {[
              {
                title: "Solar elavation event",
                time: "10:33 PM",
                magnetude: 1350,
              },
              {
                title: "Solar elavation event",
                time: "11:23 PM",
                magnetude: 1350,
              },
              {
                title: "Solar elavation event",
                time: "11:39 PM",
                magnetude: 1350,
              },
              {
                title: "Solar elavation event",
                time: "11:45 PM",
                magnetude: 1350,
              },
              {
                title: "Solar elavation event",
                time: "12:01 PM",
                magnetude: 1350,
              },
            ].map((e) => (
              <div key={e.time}>
                <div>
                  <h2>{e.title}</h2>
                  <span>{e.time}</span>
                </div>
                <h1>{e.magnetude}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
