//import { response } from 'express'
import { useEffect, useState } from 'react'
import './App.css'
import {NewMemberForm, MemberList} from './Components'
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:8000/api/auth`
})

//didn't installed bootstrap yet, but i probably will

function App() {

  const [members, setMembers] = useState([]);

  useEffect(() => {
    console.log("use effect called");
    //data = list of twats from current user
    axios.get("http://localhost:8000/api/auth/members")
      .then((response) => {
        //console.log("Data : " + response.data);
        setMembers(response.data);
      });
    }, []);

  //console.log(`Members : ${members}`);

  return (
    <div className="App">
      <header>
        <h1>
          <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
          Les Argonautes
        </h1>
      </header>

      <main>
        
        <NewMemberForm></NewMemberForm>
        
        <MemberList members={members}></MemberList>
      </main>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
        <h6>mais bon il a rien fait en vrai il a juste gratter pour la note...</h6>
      </footer>
    </div>
  )
}

export default App
