console.log ("Hello World from the main module");

import  {heading00, content00, introduction, introSub, footNotes} from "../dataModules/data00.js";
import  {DisplayLi, DisplayStr} from "./classDisplay.js";



const displayHead00 = new DisplayStr ('head00', heading00, 'p');
displayHead00.displayString();

const displayCont00 = new DisplayStr ('cont00', content00, 'p');
displayCont00.displayString();

const introContent = new DisplayLi('intro-list', introduction, 'li');
introContent.displayList();

const introSubContent = new DisplayLi('intro-subList', introSub, 'p');
introSubContent.displayList();


const displayNotes = new DisplayLi( 'footNote00', footNotes, 'li');
displayNotes.displayList();
