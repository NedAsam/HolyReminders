console.log ("Hello World from the evening module");

import  {heading00, heading00a, footNotes} from "../dataModules/data02.js";
import  {DisplayList, DisplayStr } from "./classDisplay.js";

console.log(heading00);
console.log(heading00a);

const displayBannerList = new DisplayList ('content00', heading00, 'p');
displayBannerList.displayList();

const displayBannerLista = new DisplayList ('content00a', heading00a, 'p');
displayBannerLista.displayList();


/*
const displayCont00 = new DisplayStr ('cont01', content01);
displayCont00.displayString();

const introContent = new DisplayLi('intro-list', introduction);
introContent.displayList();

const introSubContent = new DisplayLi('intro-subList', introSub);
introSubContent.displayList();
*/

const displayNotes = new DisplayList( 'footNote02', footNotes,'li');
displayNotes.displayList();