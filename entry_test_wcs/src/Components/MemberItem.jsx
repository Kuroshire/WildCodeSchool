import React from 'react'


//props : name, age?, color?,
//use bootstrap cards for this thingy.
export default function MemberItem(props) {

  return (
    <div className='member-item'>
      {props.name}
    </div>
  )
}
