

export default function NoteDetail({note}) {
  return (
    <div className="note-detail">
        <h4>{note.title}</h4>
        <p>{note.explain}</p>
        <p>{note.createdAt}</p>
    </div>
  )
}
