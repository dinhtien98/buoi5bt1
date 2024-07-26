import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'

export default function Header() {
  const {count}=useContext(AppContext)
  return (
    <div>count: {count}</div>
  )
}
