console.log ("Hello World from the circle module");

import  {heading02, footNotes} from "../dataModules/data02.js";
import  {DisplayLi, DisplayParaList, DisplayStr } from "./classDisplay.js";

console.log(heading02)




const displayBannerList = new DisplayParaList ('banner-paraList', heading02, 'h2');
displayBannerList.displayList();

/*
const displayCont00 = new DisplayStr ('cont01', content01);
displayCont00.displayString();

const introContent = new DisplayLi('intro-list', introduction);
introContent.displayList();

const introSubContent = new DisplayLi('intro-subList', introSub);
introSubContent.displayList();
*/

const displayNotes = new DisplayLi( 'footNote02', footNotes,'li');
displayNotes.displayList();