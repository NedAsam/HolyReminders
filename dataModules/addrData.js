/* Data for "circles" page -- first commit*/

class Location  {
    Constructor(id, name, addr){
        this.id = id;
        this.desc = name;
        this.addr = addr;
    }  
}

/* Location Array*/
const addr0 = "15 Indian Spring Lane, Rochester, NY 14618";
const addr1 = "155 Golf Ave. Pittsford, NY 14534";
const addr2 = "127 Chapel Drive, Syracuse, NY 13291";
const addr3 = "one Randall Street, Pembroke, MA 02359";

const loc00 = new Location(0, 'Principe Home', addr0);
const loc01 = new Location(1, 'Monroe Country Club', addr1);
const loc02 = new Location(2, 'Holy Family Church', addr2);
const loc03 = new Location(3, 'Arnold Hall', addr3);


const locationArray = [loc00, loc01, loc02, loc03];
export {locationArray};