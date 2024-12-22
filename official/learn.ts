//if ("" == 0)
//if (1 < x < 3)

const obj = { width: 10, height:15 };
const area = obj.width * obj.height;

let a = (4);

//console.log(4 / []);

const user = {
    name: "",
    id: 0
}

interface User {
    name: string,
    id: number;
}

const tsUser: User = {
    name: "",
    id: 0,
}

//const tsUserError: User = {
//    username: "",
//    id: 0,
//}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const userInstance: User = new UserAccount("", 0);
const user3 = new UserAccount("", 0);

function deleteUser(user: User) {
    //
}

function getAdminUser(): User {
    return userInstance;
}

