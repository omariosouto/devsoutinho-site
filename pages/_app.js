import App from 'next/app'

import './styles.css'
export default class MyApp extends App {

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "//gc.zgo.at/count.js";
    script.async = true;
    script.dataset.goatcounter = "https://gnunes.goatcounter.com/count"

    document.body.appendChild(script);
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }
}
