import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  return (
    <div className="infor">
      <img src="https://www.chiclana.es/fileadmin/user_upload/global/images/logo-desktop.svg" alt="" />
      <h3>Ayuntamiento de Chiclana</h3>
      <p>Telf: 956 100 800</p>
      <p>Calle: Constitución 1</p>
      <a href="https://www.chiclana.es/">Página Web</a>
    </div>
  )
}

export default Widget
