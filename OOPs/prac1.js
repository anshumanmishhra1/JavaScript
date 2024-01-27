let data = "secret information";

class user {
    constructor (name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ", data);
    }
}

class Admin extends user {
    constructor(name, email){
        super();
    }
    editData () {
        data = "some new value";
    }
}
let student1 = new user("shraddha", "abc@gmail.com");
let student2 = new user("Anshuman", "anshu@gmail.com");

let admin1 = new Admin("admin", "admin@gmail.com")