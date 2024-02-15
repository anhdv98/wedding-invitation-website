import * as React from "react"
import { useEffect, useState } from "react"
import { Parallax } from "../components/parallax"
import { BackgroundBeams } from "../components/beams"
import { Meteors } from "../components/meteor"

const headStyles = {
  color: "#232129",
  fontSize: "7rem",
  fontFamily: "TheSecret, -apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  const [isDark, setIsDark] = useState(true)
  const [isAnchorDate, setIsAnchorDate] = useState(false)
  const [countInterval, setCountInterval] = useState(0)
  const [count, setCount] = useState({
    seconds: null,
    minutes: null,
    hours: null,
    days: null
  })
  const [pageStyles, setPageStyles] = useState({
    color: "#232129",
    backgroundColor: "#000",
    // padding: 96,
    transition: "background-color 1s ease",
    fontFamily: "Comfortaa, -apple-system, Roboto, sans-serif, serif",
    // fontFamily: "Diamonda",
  })

  const handleScrollDark = () => {
    let beamEl = document.getElementById("hero")
    if (window.scrollY > beamEl.offsetTop + beamEl.offsetHeight) {
      setPageStyles({ ...pageStyles, backgroundColor: "#fffef3" })
      setIsDark(false)
    } else {
      setPageStyles({ ...pageStyles, backgroundColor: "#000" })
      setIsDark(true)
    }
  }

  const handleScrollDate = () => {
    let dateEl = document.getElementById("date")
    console.log(window.scrollY, window.screen.availHeight, dateEl.offsetTop)
    if (window.scrollY + window.screen.availHeight >= dateEl.offsetTop) {
      console.log("anchor")
      setIsAnchorDate(true)
    } else {
      setIsAnchorDate(false)
    }
  }

  const updateCount = () => {
    const date_now = Date.now()
    const date_future = Date.parse("2024-02-25T08:00:00.000+07:00");

    if (date_future <= date_now) {
      setCount({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0
      })
    } else {

      // get total seconds between the times
      var delta = Math.abs(date_future - date_now) / 1000;

      // calculate (and subtract) whole days
      var days = Math.floor(delta / 86400);
      delta -= days * 86400;

      // calculate (and subtract) whole hours
      var hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;

      // calculate (and subtract) whole minutes
      var minutes = Math.floor(delta / 60) % 60;
      delta -= minutes * 60;

      // what's left is seconds
      var seconds = Math.round(delta % 60);  // in theory the modulus is not required

      setCount({
        seconds: ('0' + seconds || 0).slice(-2),
        minutes: ('0' + minutes || 0).slice(-2),
        hours: ('0' + hours || 0).slice(-2),
        days: ('0' + days || 0).slice(-2),
      })
    }

  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDark);
    window.addEventListener("scroll", handleScrollDate);
    let interval = setInterval(() => {
      updateCount()
    }, 1000);
    setCountInterval(interval)
    return () => {
      window.removeEventListener("scroll", handleScrollDark);
      window.removeEventListener("scroll", handleScrollDate);
      clearInterval(countInterval)
    }
  }, [])


  return (
    <main id="main" style={pageStyles}>
      {/* <div className="relative">
        <div className={`transitio duration-1000 fixed font-sec z-50 text-center md:text-right inset-x-0 bottom-2 md:right-5 md:top-5 text-4xl md:text-5xl ${isDark ? 'text-white' : ''}`}>
          25/02/2024
        </div>
      </div> */}
      <div className="fixed bottom-5 right-5 " style={{ zIndex: 1000 }} >
        <div className="cursor-pointer bg-pink-50 p-2 rounded-xl drop-shadow-lg tooltip" onClick={() => {
          var calendarView = document.getElementById("calendar");
          calendarView.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }}>
          <img src="images/calendar.png" className="w-10 h-10 opacity-70" />
          <span class="tooltiptext">Thời gian & Địa điểm</span>

        </div>
        <div className="cursor-pointer bg-pink-50 p-2 rounded-xl drop-shadow-lg mt-3 tooltip" onClick={() => {
          var calendarView = document.getElementById("qr");
          calendarView.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }}>
          <img src="images/money.png" className="w-10 h-10 opacity-70" />
          <span class="tooltiptext">Mừng cưới</span>
        </div>
      </div>



      <div
      //  className="px-0 lg:px-20"
      >

        {/* <p style={headStyles}>Nhật Thành - Hoàng Hiên 3</p> */}

        <Parallax isAnchorDate={isAnchorDate} isDark={isDark} products={[
          { thumbnail: 'images/1.jpg' },
          { thumbnail: 'images/2.jpg' },
          { thumbnail: 'images/3.jpg' },
          { thumbnail: 'images/4.jpg' },
          { thumbnail: 'images/5.jpg' },
          { thumbnail: 'images/6.jpg' },
          { thumbnail: 'images/7.jpg' },
          { thumbnail: 'images/5.jpg' },
          { thumbnail: 'images/9.jpg' },
          { thumbnail: 'images/10.jpg' },
          { thumbnail: 'images/4.jpg' },
          { thumbnail: 'images/8.jpg' },
          { thumbnail: 'images/11.jpg' },
          { thumbnail: 'images/1.jpg' },
          { thumbnail: 'images/3.jpg' },
        ]} />
        <div id="date" className="static">
          {/* <p>Static parent</p> */}
          <div className={`pointer-events-none transition-all duration-300 font-hand fixed z-50 text-center inset-x-0 bottom-2 md:top-10 md:right-10 md:text-right text-4xl md:text-5xl${isDark ? ' text-white' : ''}${isAnchorDate ? ' opacity-0' : ' opacity-90'}`}>
            25/02/2024 (16/01 Âm lịch)
          </div>
          <div id="calendar" >
            <section className="invitation-section section-padding section-bg-img">
              <div className="mx-auto md:w-full lg:w-5/6 2xl:w-2/3">
                <div className="w-full overflow-hidden 2xl:overflow-visible grid grid-cols-1 gap-0 place-items-center md:grid-cols-2 md:gap-4">
                  <div className="mx-2 md:mx-0 w-full">
                    <div className="invitation-box left md:h-[615px]">
                      <div className="left-vec"></div>
                      {/* <div className="right-vec"></div> */}
                      <div className="inner">
                        <p className="text-5xl 2xl:text-6xl mb-0 font-hand header">Save the Date</p>
                        <spam className="block">For the wedding of</spam>
                        <div className="flex flex-col justify-center items-center mt-8 mb-8">
                          <span className="font-sec text-3xl md:text-4xl">Phạm Nhật Thành</span>
                          <img src="images/heart.gif" className="w-7 h-7 inline mx-1 opacity-60" />
                          <span className="font-sec text-3xl md:text-4xl">Hoàng Thị Hiên</span>
                        </div>
                        <p>Hôn lễ được tổ chức vào hồi <span className="font-bold text-xl">08</span> giờ <span className="font-bold text-xl">00</span> </p>
                        <div className="flex justify-evenly items-center grid-cols-3" style={{ color: "rgb(200, 157, 156)" }}>
                          <div>CHỦ NHẬT</div>
                          <div className="flex flex-col border-l-2 border-r-2 py-2 px-5 2xl:px-10">
                            <div className="text-3xl">25</div>
                            <div className="text-xs">THÁNG 02</div>
                          </div>
                          <div>NĂM 2024</div>
                        </div>
                        <i className="text-xs 2xl:text-sm mt-3">(TỨC NGÀY 16 THÁNG 01 NĂM GIÁP THÌN)</i>
                        <a id="location" href="https://maps.app.goo.gl/MxHNnT7JsGBeEaTS6" target="_blank" className="font-bold mt-5 block underline transition" style={{}}>
                          <img src="images/location.gif" className="w-7 h-7 inline mb-2 mr-2 mix-blend-darken	" />
                          NHÀ VĂN HÓA THÔN HẬU BỔNG
                        </a>

                        {/* <a href="#wishes" className="theme-btn">Gửi lời chúc</a> */}
                      </div>
                    </div>
                  </div>
                  <div className="mx-2 md:mx-0 w-full">
                    <div className="invitation-box calendar-box md:h-[615px]">
                      {/* <div className="left-vec"></div> */}
                      <div className="right-vec"></div>
                      <div className="inner">
                        <div className="mini_calendar">
                          <table className="w-full">
                            <caption className="calendar-month text-bold py-5"> Tháng hai -  2024</caption>
                            <tbody><tr><th abbr="Sunday">Thứ 2</th><th abbr="Monday">Thứ 3</th><th abbr="Tuesday">Thứ 4</th><th abbr="Wednesday">Thứ 5</th><th abbr="Thursday">Thứ 6</th><th abbr="Friday">Thứ 7</th><th abbr="Saturday">CN</th></tr>
                              <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>1</td><td>2</td><td>3</td><td>4</td></tr>
                              <tr><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td></tr>
                              <tr><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td></tr>
                              <tr><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td><div id="today">25</div></td></tr>
                              <tr><td>26</td><td>27</td><td>28</td><td>29</td></tr>
                            </tbody></table>
                        </div>

                      </div>
                      <div className="count-down-clock">
                        {
                          (Number.parseInt(count.seconds) + Number.parseInt(count.minutes) + Number.parseInt(count.hours) + Number.parseInt(count.days) > 0) ? (
                            <div id="clock" data-date="2024-02-25" data-text-day="Ngày" data-text-hour="Giờ" data-text-minute="Phút" data-text-second="Giây"><div class="box"><div className="font-sec font-bold text-6xl">{count.days}</div> <span className="text-sm">Ngày</span> </div><div class="box"><div className="font-sec  font-bold text-6xl">{count.hours}</div> <span className="text-sm">Giờ</span> </div><div class="box"><div className="font-sec  font-bold text-6xl">{count.minutes}</div> <span className="text-sm">Phút</span> </div><div class="box"><div className="font-sec  font-bold text-6xl">{count.seconds}</div> <span className="text-sm">Giây</span> </div></div>
                          ) : (
                            <div id="clock" style={{ color: "rgb(200, 157, 156)" }} className="text-5xl 2xl:text-6xl font-sec mt-9">Lễ cưới đã diễn ra</div>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* <BackgroundBeams id={"beam"} /> */}
        <div style={{ position: "relative" }}>
          <p style={headStyles}>Nhật Thành - Hoàng Hiên 3</p>

          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
        </div>
      </div>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Nhật Thành - Hoàng Hiên</title>
