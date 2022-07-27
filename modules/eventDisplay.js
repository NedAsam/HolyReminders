console.log ("Hello World from the event module");

import  {heading00, heading00a, quote01, content02,  content03, content04, footNotes} from "../dataModules/data03.js";
import  {DisplayList, DisplayStr} from "./classDisplay.js";

console.log(heading00);


const displayBannerList = new DisplayList ('cont00', heading00, 'p');
displayBannerList.displayList();


const displayParaList03a = new DisplayList ('cont02', content02, 'p', 1);
displayParaList03a.displayList();

const displayParaList03q = new DisplayList ('quote01', quote01, 'p');
displayParaList03q.displayList();


const displayParaList03b = new DisplayList ('cont03', content03, 'p');
displayParaList03b.displayList(); 

const displayRetreatList = new DisplayList ('cont04', content04, 'li');
displayRetreatList.displayList();


const displayNotes = new DisplayList( 'footNote05', footNotes,'li');
displayNotes.displayList();