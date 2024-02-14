import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/SVN-Diamonda.otf"
      as="font"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href="/fonts/SVN-TheSecret.ttf"
      as="font"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href="/fonts/SVN-Authoritative.otf"
      as="font"
      crossOrigin="anonymous"
    />,
  ])
}