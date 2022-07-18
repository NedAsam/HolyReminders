console.log ("Hello World from the main module");

import  {heading00, content00, content01, content02, content03, content04, introduction, introSub,  footNotes} from "../dataModules/data00.js";
import  {DisplayList, DisplayStr} from "./classDisplay.js";



const displayHead00 = new DisplayStr ('head00', heading00, 'p');
displayHead00.displayString();

const displayCont00 = new DisplayStr ('cont00', content00, 'p');
displayCont00.displayString();
/*
const introContent = new DisplayList('intro-list', introduction, 'li');
introContent.displayList();

const introSubContent = new DisplayList('intro-subList', introSub, 'p');
introSubContent.displayList();
*/
const displayContent01 = new DisplayList('cont01', content01, "p");
displayContent01.displayList();

const displayContent02 = new DisplayList('quote02', content02, "p") ;
displayContent02.displayList();

const displayContent03 = new DisplayList('cont03', content03, "p");
displayContent03.displayList();

const displayContent04 = new DisplayList('cont04', content04, "p");
displayContent04.displayList();


const displayNotes = new DisplayList( 'footNote00', footNotes, 'li');
displayNotes.displayList();


