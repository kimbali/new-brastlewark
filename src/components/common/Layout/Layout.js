
import React from 'react'
import DialogHelper from '../DialogHelper'
import Header from './Header'


export default function Layout({ children = null, id = '', dialogHelperText = '' }) {

    return (
        <>
        <Header/>
        <article className="main-content" id={id}>
          <main>{children}</main>
          {
            dialogHelperText ? <DialogHelper text={dialogHelperText}/> : null
          }
        </article>
      </>
    )
}
