function Layout({ children }) {
    return (
      <>
        <header>
            <h1>Hangman</h1>
            <p>Find the word, but DON'T hang the man</p>
        </header>
        <main>{children}</main>

      </>
    )
  }

  export default Layout
