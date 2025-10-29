"use client"

import React from 'react'

const FooterBottom = () => {
  return (
    <div className="bg-blue-950 text-white">
      <p className="text-center py-5 ">© Droits d'auteur {new Date().getFullYear()}. Tous droits réservés à <span className="font-semibold">GAMMA INFORMARTIQUE</span></p>
    </div>
  )
}

export default FooterBottom