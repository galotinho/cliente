import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements AfterViewInit {

  private map: any;
  private latitude: number = -14.7972639;
  private longitude: number = -39.0368351;  
  
  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {

    var marcador = {};

    this.map = L.map('map', {
      center: [ this.latitude, this.longitude ],
      zoom: 15
    });
  
    this.map.on('click', (e : any) => {
      this.latitude = e.latlng.lat;
      this.longitude = e.latlng.lng;

      if (marcador != undefined) {
        this.map.removeLayer(marcador);
      };

      marcador = L.marker([this.latitude,this.longitude]).addTo(this.map);  
    });   

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

   
}

