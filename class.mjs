class Student{
    constructor(name, matricno,major) {
        this.name=name;
        this.matricno=matricno;
        this.major=major;
    }
    
     set Name(name){
         this.name=name;
     }
     get Name() {
        return this.name;
    }
     
    set Matricno(matricno){
        this.matricno;
    }
    get Matricno() {
        return this.matricno;
    }
    set Major(major){
        this.major;
    }
     
    get Major() {
        return this.major;
    }
    display(){
         console.log(`Name: ${this.name}`);
         console.log(`Matricno: ${this.matricno}`);
         console.log(`Major: ${this.major}`);
     }
}
export{Student};
