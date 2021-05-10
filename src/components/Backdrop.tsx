import React from 'react'
import '../scss/components/Backdrop.scss'

interface BackdropProp {
  onClick: () => void
}

const Backdrop: React.FC<BackdropProp> = props => (
  <div className="Backdrop" onClick={props.onClick} />
)

export default Backdrop
