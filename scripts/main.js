import { getCriminals } from './criminals/CriminalProvider.js'
import CriminalList from "./criminals/CriminalList.js"
import ConvictionSelect from './convictions/ConvictionSelect.js'
import { getConvictions, useConvictions } from './convictions/ConvictionProvider.js'
import NoteFormComponent from './notes/noteForm.js'
import { getNotes } from './notes/noteDataProvider.js'
import noteList from './notes/noteList.js'
import DialogComponent, { closeDialogButtonEvents } from './dialog/dialog.js'



getNotes().then(NoteFormComponent).then(noteList)
DialogComponent()
closeDialogButtonEvents()
getCriminals().then(() => CriminalList())
ConvictionSelect()
useConvictions()
getConvictions().then(() => ConvictionSelect ())

