console.log ("Hello World from the circle module");

import  {heading00, heading00a, content01, 
    content02t, content02i, content02d1, content02d2,  
    content03t, content03i, content03d1, content03d2, 
    footNotes} from "../dataModules/data01.js";
import  {DisplayStr, DisplayList } from "./classDisplay.js";

console.log(heading00);


const displayBannerList = new DisplayList ('content00', heading00, 'p');
displayBannerList.displayList();

const displayBannerLista = new DisplayList ('content00a', heading00a, 'p');
displayBannerLista.displayList();

const displayContent01 = new DisplayList ('content01', content01, 'p', true);
displayContent01.displayList();

const displayContent02t = new DisplayList ('content02t', content02t, 'p');
displayContent02t.displayList();

const displayContent02i = new DisplayList ('content02i', content02i, 'p');
displayContent02i.displayList();

const displayContent02d1 = new DisplayList ('content02d1', content02d1, 'li');
displayContent02d1.displayList();

const displayContent02d2 = new DisplayList ('content02d2', content02d2, 'li');
displayContent02d2.displayList();



const displayContent03t = new DisplayList ('content03t', content03t, 'p');
displayContent03t.displayList();

const displayContent03i = new DisplayList ('content03i', content03i, 'p');
displayContent03i.displayList();

const displayContent03d1 = new DisplayList ('content03d1', content03d1, 'li');
displayContent03d1.displayList();

const displayContent03d2 = new DisplayList ('content03d2', content03d2, 'li');
displayContent03d2.displayList();




const displayNotes = new DisplayList( 'footNote01', footNotes, 'li');
displayNotes.displayList();