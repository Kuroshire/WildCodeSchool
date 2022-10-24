import React, { useState } from 'react'
import MemberItem from './MemberItem'

//props : member[] members, 
export default function MemberList(props) {

	return (
		<div className="member-list-component">

			<h2>Membres de l'équipage</h2>
			<div className='member-list'>
				{props.members.map( 
					(member) => (
						<MemberItem name={member.name}/>
					))
				}
			</div>

		</div>
	)
}
