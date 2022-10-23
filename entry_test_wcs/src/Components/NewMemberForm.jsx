import React from 'react'

export default function NewMemberForm() {
  return (
    <div className='new-member-component'>
        <h2>Ajouter un(e) Argonaute</h2>
        <form class="new-member-form">
          <label for="name">Nom de l&apos;Argonaute</label>
          <input id="name" name="name" type="text" placeholder="Charalampos" />
          <button type="submit">Envoyer</button>
        </form>
      
    </div>
  )
}
