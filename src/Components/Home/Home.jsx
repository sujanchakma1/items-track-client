import React, { Suspense } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import LostFound from "../LostFound/LostFound";
import Loading from "../Loading/Loading";
import { Helmet } from "react-helmet-async";
import Faq from "../FAQ/Faq";
import Statistic from "../Statistic/Statistic";

const lostFoundPromise = fetch('https://where-is-it-server-ten.vercel.app/Items').then(res=>res.json())
const allLostFoundPromise = fetch('https://where-is-it-server-ten.vercel.app/allItems').then(res=>res.json())
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | ItemTrack</title>
      </Helmet>
      <section className="banner">
        <Banner></Banner>
      </section>
      <section className="lostFoundItem">
        <Suspense fallback={<Loading></Loading>}>
          <LostFound lostFoundPromise={lostFoundPromise}></LostFound>
        </Suspense>
      </section>
      <section className="faq">
        <Faq></Faq>
      </section>
      <section className="statistic">
        <Suspense fallback={<Loading></Loading>}>
          <Statistic allLostFoundPromise={allLostFoundPromise}></Statistic>
        </Suspense>
      </section>
    </div>
  );
};

export default Home;
