import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  const [currNote, setCurrNote] = useState([]);

  function addNote(notes) {
    setCurrNote((prev) => {
      return [...prev, notes];
    });
  }

  function deleteNote(id) {
    setCurrNote((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {currNote.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDel={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
