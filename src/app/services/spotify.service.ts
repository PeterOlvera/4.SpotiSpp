import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];

  urlBusqueda:string = "https://api.spotify.com/v1/search";

  constructor( private http:Http ) { }


  getArtistas( termino:string ){

    let headers = new Headers();
    headers.append( 'Authorization' , 'Bearer BQAQHTun6uwDujZ98CvQWURbVflOA4mIiVsNrVgGd5lrdbzzPyItnZtynbxMJpqm6nJ0_WtknhUwB-DhzfBM-g');

    let query = `?q=${ termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url , {headers}  )
      .map( res =>{
        this.artistas =  res.json().artists.items;
        console.log ( this.artistas);
        return this.artistas;
      } );
  }
}
