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

  const [pageStyles, setPageStyles] = useState({
    color: "#232129",
    backgroundColor: "#141E27",
    // padding: 96,
    transition: "background-color 1s ease",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    // fontFamily: "Diamonda",
  })

  const handleScroll = () => {
    let beamEl = document.getElementById("beam")
    if (window.scrollY > beamEl.offsetTop + beamEl.offsetHeight) {
      setPageStyles({ ...pageStyles, backgroundColor: "#EEEDDE" })
    } else {
      setPageStyles({ ...pageStyles, backgroundColor: "#141E27" })
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])


  return (
    <main id="main" style={pageStyles}>
      <p style={headStyles}>Nhật Thành - Hoàng Hiên 3</p>

      <Parallax products={[
        { thumbnail: 'images/1.jpg' },
        { thumbnail: 'images/2.jpg' },
        { thumbnail: 'images/3.jpg' },
        { title: "Test 4", link: "test 4", thumbnail: 'images/4.jpg' },
        { title: "Test 5", link: "test 1", thumbnail: 'images/5.jpg' },
        { title: "Test 6", link: "test 1", thumbnail: 'images/6.jpg' },
        { thumbnail: 'images/7.jpg' },
        { thumbnail: 'images/8.jpg' },
        { title: "Test 9", link: "test 1", thumbnail: 'images/9.jpg' },
        { title: "Test 10", link: "test 1", thumbnail: 'images/10.jpg' },
        { title: "Test 11", link: "test 1", thumbnail: 'images/11.jpg' },
      ]} />

      <BackgroundBeams id={"beam"} />
      <div style={{ position: "relative" }}>
        <p style={headStyles}>Nhật Thành - Hoàng Hiên 3</p>

        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
      </div>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Nhật Thành - Hoàng Hiên</title>
