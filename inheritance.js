class Father{
    constructor(){
        this.fatherName = "Abir";
    }
}

class Child extends Father {
    constructor(cname, cage){
        super();
        this.Name = cname;
        this.Age = cage;
    }
}

const baby1 = new Child('xxx', 15);
console.log(baby1);