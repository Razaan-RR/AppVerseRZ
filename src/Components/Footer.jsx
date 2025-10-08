import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center text-base-content p-4 bg-[#001931]">
        <aside>
          <p className='text-white'>
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer
