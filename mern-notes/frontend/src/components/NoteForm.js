import { useState } from "react"

export default function NoteForm() {

    const [title,setTitle]=useState('')
    const [explain,setExplain]= useState('')
    const [error,setError]= useState(null)


    const handleSubmit =async (e) => {
        e.preventDefault()
        const note={title, explain}
        //console.log(note);

        const response = await fetch('/api/notlar', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(note)
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }

        if(response.ok) {
            setError(null)
            setTitle('')
            setExplain('')
            console.log('yeni not eklendi', json)
        }
    }

  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Yeni Bir Not Ekle</h3>
        <div className="create-group">
            <div>
                <label>Not Başlık:</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
            </div>
            <div>
                <label>Not Açıklama:</label>
                <input type="text" onChange={(e) => setExplain(e.target.value)} value={explain}/>
            </div>
            <button type="submit">EKLE</button>
            {error && <div className='error'>{error}</div>}
        </div>
    </form>
  )
}
