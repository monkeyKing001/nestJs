import { faker } from "@faker-js/faker";
//conventionally, class src file label with capital(ex. User.ts Map.ts..etc)
import { Mappable } from "./CustomMap";

export class User implements Mappable{
  name: string;
  color: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
//      lat: parseFloat(faker.address.latitude()),
//      lng: parseFloat(faker.address.longitude()),
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    };
  }

  markerContent(): string {
    return `user name: ${this.name}`;
  }
}
