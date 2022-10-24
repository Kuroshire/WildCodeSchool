import axios from 'axios'
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'

export default function NewMemberForm(props) {

  const { register, handleSubmit, formState:{errors}} = useForm();

  const [nameTaken, setNameTaken] = useState("");

  const onSubmit = (data) => {
    //on peut ajouter une RegExp ici pour modif le data en forcant une majuscule sur le premier caractere
    axios.post("http://localhost:8000/api/auth/addmember", data)
      .then(() => {
        props.addedMember;
        setNameTaken(`${data.name} a rejoint l'équipage!`);
      }).catch((err) => {
        setNameTaken("Name already taken")
        //show the error on screen.
        //type of errors : couldn't connect to api, couldn't register.
      })
  }

  return (
    <div className='new-member-component'>
        <section>
          <h2>Ajouter un(e) Argonaute</h2>
          <form id='add-member' className='new-member-form' onSubmit={handleSubmit(onSubmit)}>
            <label>Nom de l&apos;Argonaute</label>
            <input id="name" { ...register("name", {required : true, maxLength : 20}) } type="text" placeholder="Charalampos" />
            
            <button className="submit">Envoyer</button>

            <div className='member-form-error'>
              {errors.name?.type === "required" && "Veuillez saisir un nom"}
              {errors.name?.type === "maxLength" && "Nom ne peut dépasser 20 caractères"}
              <div>{nameTaken}</div>
            </div>

          </form>
        </section>
      
    </div>
  )
}

/**
 *<h2>Ajouter un(e) Argonaute</h2>
        <form className="new-member-form">
          <label for="name">Nom de l&apos;Argonaute</label>
          <input id="name" name="name" type="text" placeholder="Charalampos" />
          <button type="submit">Envoyer</button>
        </form> 
*/
