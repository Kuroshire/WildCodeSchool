import React from 'react'
import MemberItem from './MemberItem'

//props : member[] members, 
export default function MemberList(props) {
  return (
    <div class="member-list">

			<h2>Membres de l'équipage</h2>

			<section class="member-list">
				{props.members.map( 
					(member) => (
						<MemberItem name={member.name}/>
					))
				}
			</section>

    </div>
  )
}
