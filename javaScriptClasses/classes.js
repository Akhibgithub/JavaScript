//A JavaScript class is not an object. It is a template for JavaScript objects.

// The constructor method is a special method:
//It has to have the exact name "constructor"
//It is executed automatically when a new object is created
//It is used to initialize object properties.

// If you do not define a constructor method, JavaScript will add an empty constructor method.
// Class methods are created with the same syntax as object methods.
// Use the keyword class to create a class.
// Always add a constructor() method.
// Then add any number of methods.


// class FirstPerson {
//     constructor(fname, lname) {
//         this.firstName = fname;
//         this.lastName = lname;
//     }
//     getFullName() {
//         return `First name : ${this.firstName} Last Name : ${this.lastName}`
//     }
// }
// class ChildOfFirstPerson extends FirstPerson {
//     constructor(phone,fname,lname) {
//         super(fname,lname)
//         this.phone = phone
//     }
//     getPhone() {
//         return `Contact Number : ${this.phone}`
//     }
// }
// const firstPerson = new FirstPerson('Daemon','Targaryen')
// console.log(firstPerson);
// console.log(firstPerson.getFullName());
// const childClass = new ChildOfFirstPerson(7414946200,'Aegon','Targaryen')
// console.log(childClass);


class CastOfHOD {
    constructor(fname, lname) {
        this.firstName = fname
        this.lastName = lname
    }
    getFName() {
        return `First Name : ${this.firstName} lastName : ${this.lastName}`
    }
}

// const Cast = new CastOfHOD('Rhena','Valerian');
// console.log(Cast.getFName());

class ChildOfCastOfHOD extends CastOfHOD {
    constructor(dragon, size, fname, lname) {
        super(fname, lname)
        this.dragon = dragon
        this.size = size
    }
    getDragon() {
        return `Dragon Name : ${dragon} Dragon Size : ${size}`
    }
}

// const withDragon = new ChildOfCastOfHOD('Vehgar','Rhena','Valerian')
// console.log(withDragon);


class AddressOfCast extends ChildOfCastOfHOD {
    constructor(dragon, size, fname, lname, address, city) {
        super(dragon, size, fname, lname)
        this.address = address
        this.city = city
    }
    getAddress() {
        `Address : ${address} City : ${city}`
    }
}

const withAddress = new AddressOfCast('Vehgar', '173 FIT', 'Rhena', 'Valerian', 'westros', 'Dragon bae')
console.log(withAddress);