
class DisplayList{
    constructor(target, content, nodeType){
        this._target = target;
        this._content = content;
        this._nodeType = nodeType;
    }

    displayList(){
        console.log(this._target);
        console.log(this._content);
        const nodeEl = this._target;
        const nodeType= this._nodeType;
        this._content.forEach(outPutToList);
        function outPutToList(item){
            console.log(nodeEl);
            const listItem = document.createElement(nodeType);
            listItem.innerHTML = item;
            document.getElementById(nodeEl).appendChild(listItem);
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