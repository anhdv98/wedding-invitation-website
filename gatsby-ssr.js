import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/SVN-Diamonda.otf"
      as="font"
    //   type="font/otf"
      crossOrigin="anonymous"
    //   key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/SVN-TheSecret.ttf"
      as="font"
    //   type="font/otf"
      crossOrigin="anonymous"
    //   key="interFont"
    />,
  ])
}