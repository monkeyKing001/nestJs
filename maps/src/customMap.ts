
/// <reference types="@types/google.maps" />
// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map; //default is public

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  //duplicated codes
  //addMarker(user : User): void{
  //const marker = new google.map.Marker({
  //	map : this.googleMap,
  //	position : {
  //		lat : user.location.lat;
  //		lng : user.location.lng;
  //	}
  //})
  //};
  //
  //solution 1. | input argument type(  cons: 1) member var name will be limited - name vs CompanyName, 2) how about there are N (over 100) kind of mappable obj)
  //addMarker(obj : User | Company): void{
  //const marker = new google.map.Marker({
  //	map : this.googleMap,
  //	position : {
  //		lat : obj.location.lat;
  //		lng : obj.location.lng;
  //	}
  //})
  //};
  //

  //solution 2. interface
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
