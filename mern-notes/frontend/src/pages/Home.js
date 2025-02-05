import {useEffect, useState} from 'react'
import NoteDetail from '../components/NoteDetail'
import NoteForm from '../components/NoteForm'

export default function Home() {

  const [notes, setNotes] = useState(null)

  useEffect(() => {
    
    const fetchNotes = async () => {
      const response = await fetch('/api/notlar')

      const json = await response.json()

      if (response.ok){
        setNotes(json)
      }
    }
    
    fetchNotes()
  }, [])

  return (
    <div className="Home">
      <div className='note-form'>
        <NoteForm />
      </div>
        <div className='notes'>
          {notes && notes.map((note)=>(
            <NoteDetail key={note._id} note={note} />
          ))}
        </div>
    </div>
  )
}
