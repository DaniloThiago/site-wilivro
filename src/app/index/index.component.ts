import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Element } from '@angular/compiler';

declare var $: any;

var on = true;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class IndexComponent implements OnInit {

  lat: number = -22.532313;
  lng: number = -43.209118;
  scrollwheel: boolean = false;
  zoom: number = 16;
  styles: any = [
    {
      elementType: "geometry",
      stylers: [{ color: "#1d2c4d" }]
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#8ec3b9" }]
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#1a3646" }]
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [{ color: "#4b6878" }]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{ color: "#64779e" }]
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [{ color: "#4b6878" }]
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.stroke",
      stylers: [{ color: "#334e87" }]
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [{ color: "#023e58" }]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#283d6a" }]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6f9ba5" }]
    },
    {
      featureType: "poi",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#1d2c4d" }]
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [{ color: "#023e58" }]
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#3C7680" }]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#304a7d" }]
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#98a5be" }]
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#1d2c4d" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#2c6675" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#255763" }]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#b0d5ce" }]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#023e58" }]
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [{ color: "#98a5be" }]
    },
    {
      featureType: "transit",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#1d2c4d" }]
    },
    {
      featureType: "transit.line",
      elementType: "geometry.fill",
      stylers: [{ color: "#283d6a" }]
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [{ color: "#3a4762" }]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#0e1626" }]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#4e6d70" }]
    }
  ]

  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle('Wilivro');
    this.resultados();
  }

  contador(el: any, inicial: number, total: number, speed: number, jump: number) {

    setInterval(function () {
      if (inicial <= total) {
        el.innerHTML = inicial;
      }
      inicial = inicial + jump;
    }, speed);

  }



  private resultados() {
    var _this = this;
    $(document).scroll(function () {

      if (!on) return;

      if (window.scrollY > $('#resultado').offset().top - window.innerHeight / 2) {

        $('span.cont').map(function () {
          var inicial = $(this).attr('data-inicial');
          var total = $(this).attr('data-total');
          var speed = $(this).attr('data-speed');
          var jump = $(this).attr('data-jump');

          _this.contador(this, parseInt(inicial), parseInt(total), parseInt(speed), parseInt(jump));
        })

        on = false;

      }


    })
  }




}
