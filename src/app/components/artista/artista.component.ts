import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

/* class Artista: {
    nombre:string;
    imagen:string;
    pagina:string;
  /*  canciones:{
      titulo:string;
      imagen:string;
    };
};
artista(){
  return this.artrista
}*/

  artistaa = {
    nombre: "",
    imagen: "",
    pagina: ""
  };
  pistas: any[];
  imagenPerfil: string;

  constructor( private activatedRoute: ActivatedRoute ,
                private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
        .map(parametros => parametros['id'])
        .subscribe( id => {


        this._spotifyService.getArtista(id)
              .subscribe( data => this.artistaa.nombre = data.name
              ); //data => this.artistaa.imagen = data//);

      /*      this._spotifyService.getTop(id)
              .subscribe( data => this.pistas = data

              );*/


        });
        console.log(this.artistaa);
  }

}
