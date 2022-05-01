import React, { useContext } from 'react'
import { AppContext } from '../context/context'

export default function Output() {
  const {output,s1Ref,s2Ref,inputRef} = useContext(AppContext);
  return (
    <h2> {output.toLocaleString()}</h2>
  )
}
