import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p>
      <a
        href={ process.env.PHENOMIC_HOMEPAGE }
        className={ styles.phenomicReference }
      >
        { "Website generated with " }
        <span className={ styles.phenomicReferenceName }>
          {  `<${ process.env.PHENOMIC_NAME} />` }
        </span>
	</a>
        <span className={ styles.phenomicReferenceName }>
	<a
         href={ `/admin` }
            className={ styles.phenomicReference }
	>
         Login to CMS
    </a></span>
    <span className={ styles.phenomicReferenceName }>
	
          <a
    href={ `https://www.mdwp.de` }
            className={ styles.phenomicReference }
	>   Netlify-CMS integration by mdwp
    </a></span>
    </p>
  </footer>
)

export default Footer
