console.log ("Hello World from the main module");

import  {content00, content00a,  content01, content02,content02q, content03, content04, footNotes} from "../dataModules/data00.js";
import  {DisplayList, DisplayStr} from "./classDisplay.js";


/*
const displayHead00 = new DisplayStr ('head00', heading00, 'p');
displayHead00.displayString(); */

const displayCont00 = new DisplayList ('cont00', content00, "p");
displayCont00.displayList();

const displayCont00a = new DisplayList ('cont00a', content00a, "p");
displayCont00a.displayList();

const displayContent01 = new DisplayList('cont01', content01, "p", true);
displayContent01.displayList();

const displayContent02 = new DisplayList('cont02', content02, "p");
displayContent02.displayList();

const displayContent02q = new DisplayList('quote02', content02q, "p") ;
displayContent02q.displayList();


const displayContent03 = new DisplayList('cont03', content03, "p");
displayContent03.displayList();

const displayContent04 = new DisplayList('cont04', content04, "li");
displayContent04.displayList();


const displayNotes = new DisplayList( 'footNote00', footNotes, 'li');
displayNotes.displayList();



