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
  const [pageStyles, setPageStyles] = useState({
    color: "#232129",
    backgroundColor: "#000",
    // padding: 96,
    transition: "background-color 1s ease",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    // fontFamily: "Diamonda",
  })

  const handleScrollDark = () => {
    let beamEl = document.getElementById("hero")
    if (window.scrollY > beamEl.offsetTop + beamEl.offsetHeight) {
      setPageStyles({ ...pageStyles, backgroundColor: "#EEEDDE" })
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

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDark);
    window.addEventListener("scroll", handleScrollDate);
    return () => {
      window.removeEventListener("scroll", handleScrollDark);
      window.removeEventListener("scroll", handleScrollDate);
    }
  }, [])


  return (
    <main id="main" style={pageStyles}>
      {/* <div className="relative">
        <div className={`transitio duration-1000 fixed font-sec z-50 text-center md:text-right inset-x-0 bottom-2 md:right-5 md:top-5 text-4xl md:text-5xl ${isDark ? 'text-white' : ''}`}>
          25/02/2024
        </div>
      </div> */}
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
          <p>Static parent</p>
          <div className={`pointer-events-none transition-all duration-300 font-hand fixed z-50 text-center inset-x-0 bottom-2 md:top-10 md:right-10 md:text-right text-4xl md:text-5xl${isDark ? ' text-white' : ''}${isAnchorDate ? ' opacity-0' : ' opacity-90'}`}>
            25/02/2024 (16/01 Âm lịch)
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
