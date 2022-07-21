import Head from "next/head";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import MainSection from "../components/MainSection";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="font-bebas bg-black">
      <Head>
        <title>Innocre Blockchain Store</title>
        <meta
          property="og:title"
          content="Innocre Blockchain Store using Web 3.0"
          key="title"
        />
      </Head>
      <main>
        <Header />
        <MainSection />
      </main>
      <Footer />
      {/* <div className="grid grid-cols-1 lg:grid-cols-5 max-w-5xl mx-auto">
        <Sidebar />
        <main className="lg:col-span-5  mb-12">
          <MainSection />
          <Main />
        </main>
      </div>*/}
    </div>
  );
}
