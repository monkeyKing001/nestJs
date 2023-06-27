/*#############################################*/
/*#########     Class Inheretance      ########*/
/*#############################################*/
class Vehicle {

	//same with 
	//color : string  = "red";
	//constructor(color : string){
	//	this.color = color;
	//}
  constructor(public color: string) {}

  // child class cannot change access
//  public drive(): void {
//    console.log('vroom');
//  }

  /** protected */
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {

	//overriding parent constructor Car class has wheels mem var
  constructor(public wheels: number, color: string) {
    super(color);//super => parent's constructor(string)
  }

  /** private */
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
//car.drive(); drive method is private
car.startDrivingProcess();
