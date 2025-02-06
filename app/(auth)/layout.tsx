
//rafce shortcut for creating react template if ES7+ extension is present

//layout basically exports the children which allows to add different UI's to the differnt routes like nav bar,footer etc.

import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth">{children}</main>
  )
}

export default Layout
