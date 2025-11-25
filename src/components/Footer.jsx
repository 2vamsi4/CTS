import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="muted">© {new Date().getFullYear()} CTS Gift Store. All rights reserved.</p>
        <p className="muted">Made with ❤️</p>
      </div>
    </footer>
  )
}