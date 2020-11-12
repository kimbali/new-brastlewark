
import React from 'react'
import Header from './Header'


export default function Layout({ children = null, id = '' }) {

    return (
        <>
        <Header/>
        <div className="main-content">
          <article id={id}>
            <main>{children}</main>
          </article>
        </div>
      </>
    )
}
