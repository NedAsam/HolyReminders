console.log ("Hello World from the event module");

import  {heading03, content03a, quote02, content03b,  content03c, footNotes} from "../dataModules/data03.js";
import  {DisplayList, DisplayStr} from "./classDisplay.js";

console.log(heading03);


const displayBannerList = new DisplayList ('banner-paraList', heading03, 'p');
displayBannerList.displayList();

const displayParaList03a = new DisplayList ('cont03a', content03a, 'p');
displayParaList03a.displayList();

const displayParaList03q = new DisplayList ('quote02', quote02, 'p');
displayParaList03q.displayList();

const displayParaList03b = new DisplayList ('cont03b', content03b, 'p');
displayParaList03b.displayList(); 

const displayRetreatList = new DisplayList ('cont03c', content03c, 'li');
displayRetreatList.displayList();


const displayNotes = new DisplayList( 'footNote03', footNotes,'li');
displayNotes.displayList();