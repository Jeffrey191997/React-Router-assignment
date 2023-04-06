import React, { PureComponent } from 'react'
import { useParams } from 'react-router-dom'

export default function Profile(){
  const {id} = useParams();
  return(
    <div>
      <p>This student ID of user is {id}.</p>
    </div>
  )
}