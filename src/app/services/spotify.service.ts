import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "	https://api.spotify.com/v1/artists";

  token = 'Bearer BQBIRfGTSgpXUr9ZYNyBrdgURad_desiAPb782KU0khzFGFOOql3gEiMXBMHQ2MejW3DQ9SNGDm2ulenP_dZQQ';
  urlToken = "https://accounts.spotify.com/api/token";

  headers = new Headers({ 'Authorization':  this.token});


  constructor( private http:Http ) { }


  getToken(headers){
//    let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
//    headers.append('Content-Type', 'application/x-www-form-urlencoded');

//    headers.append('client_id','e4be07658c244074ae56664c2f3460bf');
//    headers.append('client_secret','d2a61350a514429694c190c35196f2ea');
//    headers.append('grant_type','client_credentials');

    return this.http.post(this.urlToken, {headers})
    .map( res =>{
      let data = res.json();
      console.log(data);
    } );
  }


  getArtistas( termino:string ){

    let headers = new Headers();
    let query = `?q=${ termino}&type=artist`;
    let url = this.urlBusqueda + query;


    headers = this.headers;
    return this.http.get( url , {headers}  )
      .map( res =>{
        this.artistas =  res.json().artists.items;
        return this.artistas;
      } );

  }

  getArtista( id:string ){

    let headers = new Headers();
    let query = `/${id}`;
    let url = this.urlArtista + query;

    headers = this.headers;
    return this.http.get( url , {headers}  )
      .map( res =>{
        console.log(res.json());
        return res.json();
      } );
  }

  getTop( id:string ){

    let headers = new Headers();
    let query = `/${id}/top-tracks?country=ES`;
    let url = this.urlArtista + query;

    headers = this.headers;
    return this.http.get( url , {headers}  )
      .map( res =>{
        let artista =  res.json();
        return res.json();

      } );

  }
}
