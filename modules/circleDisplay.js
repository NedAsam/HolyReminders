console.log ("Hello World from the circle module");

import  {heading01, footNotes} from "../dataModules/data01.js";
import  {DisplayLi, DisplayParaList } from "./classDisplay.js";

console.log(heading01)




const displayBannerList = new DisplayParaList ('banner-paraList', heading01, 'h2');
displayBannerList.displayList();

/*
const displayCont00 = new DisplayStr ('cont01', content01);
displayCont00.displayString();

const introContent = new DisplayLi('intro-list', introduction);
introContent.displayList();

const introSubContent = new DisplayLi('intro-subList', introSub);
introSubContent.displayList();
*/

const displayNotes = new DisplayLi( 'footNote01', footNotes, 'li');
displayNotes.displayList();