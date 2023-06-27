const profile = {
  realname: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

/*********************************************************/
/**********     HOW TO DECLARE TYPE OF OBJ     ***********/
/*********************************************************/
//const age = profile.age;
//    variable    var : type      => diff with what we learned
//const { age } : { age : number } = profile;
const { age, realname }: { age: number; realname: string } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
