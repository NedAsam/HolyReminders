
class DisplayList{
    constructor(target, content, nodeType, ysnHr){
        this._target = target;
        this._content = content;
        this._nodeType = nodeType;
        this._ysnHr = ysnHr;
    }

    displayList(){
        console.log(this._target);
        console.log(this._content);
        console.log(this._ysnHr);
        const nodeEl = this._target;
        const nodeType= this._nodeType;
        const doHr = this._ysnHr;
        this._content.forEach(outPutToList);
        function outPutToList(item){
            console.log(nodeEl);
            const listItem = document.createElement(nodeType);
            listItem.innerHTML = item;
            document.getElementById(nodeEl).appendChild(listItem);
        } 
        if(doHr){
            console.log(doHr);
            const listHr = document.createElement("hr");

            document.getElementById(nodeEl).appendChild(listHr);
        }

    }



}

class DisplayStr {
    constructor(target, content, nodeType){
        this._target = target;
        this._content = content;
        this._nodeType = nodeType;
    }

    displayString() {
        console.log(this._content);
        const nodeEl = this._target;
        console.log(nodeEl);
        document.getElementById(nodeEl).innerText = this._content;
    }
}


export {DisplayList, DisplayStr};