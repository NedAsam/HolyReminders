console.log ("Hello World from the event module");

import  {heading03, content03a, content03b, footNotes} from "../dataModules/data03.js";
import  {DisplayList, DisplayStr} from "./classDisplay.js";

console.log(heading03);


const displayBannerList = new DisplayList ('banner-paraList', heading03, 'h2');
displayBannerList.displayList();

const displayParaList03a = new DisplayList ('cont03a', content03a, 'p');
displayParaList03a.displayList();

const displayRetreatList = new DisplayList ('cont03b', content03b, 'li');
displayRetreatList.displayList();


const displayNotes = new DisplayList( 'footNote03', footNotes,'li');
displayNotes.displayList();