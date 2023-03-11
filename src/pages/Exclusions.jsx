import { useState,useEffect } from "react";
import axios from "axios";

function Exclusions(){
  const [newWord, setNewWord] = useState("");
  const [exclusionWords, setExclusionWords] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/exclusions").then(({data})=>{
      setExclusionWords(data)
  })

  }, []);

  const addWordHandler = ()=>{
    if(newWord){
      axios.post("http://localhost:3000/exclusions",{"word":newWord}).then(({data})=>setExclusionWords((prevState)=>[...prevState,data])).catch((err)=>{console.error(err);})
      setNewWord("")
    }
    
  }
  const deleteWordHandler=(e)=>{
    axios.delete(`http://localhost:3000/exclusions/${e.target.id}`).then(({data})=>{
      axios.get("http://localhost:3000/exclusions").then(({data})=>{
        setExclusionWords(data)
      })
    }
    ).catch((err)=>{console.error(err);})
    

  }

  return  (
    <div className="exclusions">
      <input type="text" placeholder="あふぃかすワード" value={newWord} onChange={(e)=>{setNewWord(e.target.value)}} ></input> 
      <button onClick={addWordHandler}>add</button>

      <div className="exclusion-words">
        {
          exclusionWords.map((word,index)=>{
            return(
              <div key={index}>{word.word} <button id={word.id} onClick={deleteWordHandler}>delete</button> </div>
            )
          })
        }
      </div>
    </div>
  )
    
}
export default Exclusions