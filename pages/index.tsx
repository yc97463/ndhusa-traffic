import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Head from "next/head";

export default function Home() {

  return (
    <div>
      <Head>
        <title>第 13 屆學權議題儀表板 - 東華學生會議題百寶箱</title>
        <link rel="shortcut icon" href="/img/ndhusa-logo-favicon.png" type="image/x-icon" />
        <link rel="icon" href="/img/ndhusa-logo-favicon.png" type="image/x-icon" />
        <link rel="bookmark" href="/img/ndhusa-logo-favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon-precomposed" href="/img/ndhusa-logo-favicon.png"></link>

        {/* meta */}
        <meta property="og:title" content="第 13 屆學權議題儀表板 - 東華學生會議題百寶箱" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dashboard.dhsa.ndhu.me" />
        <meta property="og:image" content="/img/og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/img/og.jpg" />
        <meta property="telegram_channel" content="turbolabit" />
        <meta property="og:description" content="東華學生會第 13 屆學權議題儀表板" />
        <meta property="og:site_name" content="東華學生會議題百寶箱" />
        <meta property="og:locale" content="zh_TW" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <div className="container mx-auto intro">
        <p>東華學生會</p>
        <p>第 13 屆學權議題儀表板</p>
      </div>
      <div className="lg:container bg-white mx-4 my-4 py-4 min-h-fit lg:w-full lg:mx-auto lg:h-64">
        <div className="highlight grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="card">
            <h2>正在進行</h2>
            <div className="grid grid-cols-1">
              <p className="big-number">5</p>
              <p className="text-center font-bold">個議題</p>
            </div>
          </div>
          <div className="card">
            <h2>熱度標籤</h2>
            <p className="hashtag">#宿舍 #選舉 #遠距教學 #地震</p>
          </div>
          <div className="card">
            <h2>已完成</h2>
            <div className="grid grid-cols-1">
              <p className="big-number">10</p>
              <p className="text-center font-bold">項領域</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-8">
        <h1 className="text-3xl text-center my-4">我們的議題</h1>
        <div className="issue grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card">
            <h2>宿舍登記表單</h2>
            <p className="hashtag">#宿舍 #調查</p>
            <div className="grid grid-cols-1">
              <p className="progress">57% 完成</p>
              {/* progress bar */}
            </div>
          </div>
          <div className="card">
            <h2>宿舍登記表單</h2>
            <p className="hashtag">#宿舍 #調查</p>
            <div className="grid grid-cols-1">
              <p className="progress">57% 完成</p>
              {/* progress bar */}
            </div>
          </div>
          <div className="card">
            <h2>宿舍登記表單</h2>
            <p className="hashtag">#宿舍 #調查</p>
            <div className="grid grid-cols-1">
              <p className="progress">57% 完成</p>
              {/* progress bar */}
            </div>
          </div>
          <div className="card">
            <h2>宿舍登記表單</h2>
            <p className="hashtag">#宿舍 #調查</p>
            <div className="grid grid-cols-1">
              <p className="progress">57% 完成</p>
              {/* progress bar */}
            </div>
          </div>
          <div className="card">
            <h2>宿舍登記表單</h2>
            <p className="hashtag">#宿舍 #調查</p>
            <div className="grid grid-cols-1">
              <p className="progress">57% 完成</p>
              {/* progress bar */}
            </div>
          </div>
          <div className="card">
            <h2>宿舍登記表單</h2>
            <p className="hashtag">#宿舍 #調查</p>
            <div className="grid grid-cols-1">
              <p className="progress">57% 完成</p>
              {/* progress bar */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
