//import { response } from 'express'
import { useEffect, useState } from 'react'
import './App.css'
import {NewMemberForm, MemberList} from './Components'
import axios from 'axios';

//didn't installed bootstrap yet, but i probably will -> guess i didnt lol

function App() {

  const [members, setMembers] = useState([]);
  const addedMember = () => {console.log("update")};

  useEffect(() => {
    axios.get("http://localhost:8000/api/auth/members")
      .then((response) => {
        setMembers(response.data);
      });
    }, [addedMember]);

  return (
    <div className="App">
      <header>
        <h1>
          <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
          Les Argonautes
        </h1>
      </header>

      <main>
        
        <NewMemberForm addedMember={addedMember}></NewMemberForm>
        
        <MemberList members={members}></MemberList>
      </main>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  )
}

export default App
