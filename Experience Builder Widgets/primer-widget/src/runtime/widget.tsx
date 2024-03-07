import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  return (
    <div className="primerwidget">
      <h2>Primer Widget</h2>
      <p>ArcGIS Experience Builder</p>
      <p>Prueba de que el Widget funciona correctamente</p>
    </div>
  )
}

export default Widget
