import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function Home() {

  return (
    <div className="">
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
