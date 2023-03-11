import { useState } from 'react'
import axios from 'axios'

function Search(){
    const [searchWord, setSearchWord] = useState("")
    const doSearch=()=>{
        const baseUrl="https://www.google.com/search?"
        let targetWords=searchWord.split(' ')
        let searchParam = ""
        targetWords.map((word,index)=>{
            index==0? searchParam=`q=${word}` : searchParam=`${searchParam}+${word}`
        })
        console.log(searchParam)
        axios.get("http://localhost:3000/exclusions").then(({data})=>{
            data.map((item)=>searchParam=`${searchParam}+-${item.word}`)
            open(baseUrl+searchParam, '_blank')
        })
        
    }

    return(
        <div className="search">
            <div>
                <input type="text" value={searchWord} onChange={(e)=>setSearchWord(e.target.value)}/>
                <button onClick={doSearch}>あふぃかす除外検索！！</button>
            </div>
        </div>
    )
}
export default Search