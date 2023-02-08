import SaveNote from "./SaveNote"

export default function CreateAndValidateNewNote(name, notepads) {
  const foundNotes = notepads.filter((note) => note[0] === name);
  if (foundNotes.length == 0) {
    if (name === "") {
      alert("Empty name");
    } else {
      console.log("Saving new notepad");
      SaveNote(name, "");
    }
  } else {
    alert("A note already exists with this name");
  }
}