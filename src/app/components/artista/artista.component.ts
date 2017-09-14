import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})




export class ArtistaComponent implements OnInit {

/*  canciones:{
      titulo:string;
      imagen:string;
    };
};
artista(){
  return this.artrista
}*/


  artista= new Artista();
  pistas: Pista[] = [];

  constructor( private activatedRoute: ActivatedRoute ,
                private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
        .map(parametros => parametros['id'])
        .subscribe( id => {

//OBTENER INFO DE LA REQUEST PARA EL ARTISTA//
        this._spotifyService.getArtista(id)
              .subscribe(  data => {
                this.artista.nombre = data.name;
                this.artista.imagen = data.images;
                this.artista.followers = data.followers.total;
                this.artista.pagina = data.external_urls.spotify;
                this.artista.generos = data.genres;
              });

//OBTENER top-tracks DEL ARTISTA//
        this._spotifyService.getTop(id)
              .subscribe ( data => {
                console.log(data);
                for(let track of data.tracks){
                  let pista = new Pista(track.name, track.duration_ms, track.album.images, track.uri);
                  this.pistas.push(pista);
                }
              });
              console.log(this.pistas);
              console.log(this.artista);

        });
  }

}

class Artista {
    nombre:string;
    imagen:string;
    pagina:string;
    followers:string;
    generos:string[];
    constructor(){

    }
  }

  class Pista {
    nombre:string;
    imagen:string;
    album:string;
    duration:string;
    imagenAlbum:string;
    uri:string;
    constructor(nombre:string, duration:string, imagenAlbum:string, uri:string){
      this.nombre = nombre;
      this.duration = duration;
      this.imagenAlbum  = imagenAlbum;
      this.uri = uri;
    }
  }
