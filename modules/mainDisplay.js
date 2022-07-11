console.log ("Hello World from the main module");

import  {heading00, content00, introduction, introSub, footNotes} from "../dataModules/data00.js";
import  {DisplayLi, DisplayStr} from "./classDisplay.js";



const displayHead00 = new DisplayStr ('head00', heading00);
displayHead00.displayString();

const displayCont00 = new DisplayStr ('cont00', content00);
displayCont00.displayString();

const introContent = new DisplayLi('intro-list', introduction);
introContent.displayList();

const introSubContent = new DisplayLi('intro-subList', introSub);
introSubContent.displayList();


const displayNotes = new DisplayLi( 'footNote00', footNotes);
displayNotes.displayList();
