console.log ("Hello World from the evening module");

import  {heading03, footNotes} from "../dataModules/data03.js";
import  {DisplayList, DisplayStr } from "./classDisplay.js";

console.log(heading03);


const displayBannerList = new DisplayList ('banner-paraList', heading03, 'h2');
displayBannerList.displayList();

/*
const displayCont00 = new DisplayStr ('cont01', content01);
displayCont00.displayString();

const introContent = new DisplayLi('intro-list', introduction);
introContent.displayList();

const introSubContent = new DisplayLi('intro-subList', introSub);
introSubContent.displayList();
*/

const displayNotes = new DisplayList( 'footNote03', footNotes,'li');
displayNotes.displayList();