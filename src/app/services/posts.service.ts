import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaPosts, Post, Usuario } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { post } from 'selenium-webdriver/http';

const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPosts = 0;

  nuevoPost = new EventEmitter<Post>();


  constructor( private http: HttpClient,
               private usuarioService: UsuarioService,
               private fileTransfer: FileTransfer ) { }

  getPosts( pull: boolean = false ) {

    if ( pull ) {
      this.paginaPosts = 0;
    }

    this.paginaPosts ++;

    // return this.http.get<RespuestaPosts>(`${ URL }/posts/?pagina=${ this.paginaPosts }`);
    this.CargarPost();
    console.log("las intento devolver")
return this.posts;
  }

  crearPost( post ) {

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise( resolve => {

      this.http.post(`${ URL }/posts`, post, { headers })
        .subscribe( resp => {

          this.nuevoPost.emit( resp['post'] );
          resolve(true);
        });
    });



  }


  subirImagen( img: string ) {

    const options: FileUploadOptions = {
      fileKey: 'image',
      headers: {
        'x-token': this.usuarioService.token
      }
    };

    const fileTransfer: FileTransferObject = this.fileTransfer.create();

    fileTransfer.upload( img, `${ URL }/posts/upload`, options )
      .then( data => {
        console.log(data);
      }).catch( err => {
        console.log('error en carga', err);
      });

  }

  private  CargarPost () 
  {
    console.log("Cargado imagen")
    let _post = new PostClass();
    _post.imgs=["assets/perro-1.jpg" ] ;
    _post.usuario = new UsuarioClass();
    _post.usuario._id="1";
    _post.usuario.nombre ="Pedro";
    _post.usuario.email ="Laranga"
    _post.usuario.avatar = "av-7.png";
    _post.mensaje = "Esto es un mensaje de prieba para ver si puedo hacer andar el post";
    this.posts.push(_post);    
  }
 private posts= [];

}

class PostClass implements Post {

  imgs?: string[];
  _id?: string;
  mensaje?: string;
  coords?: string;
  usuario?: Usuario;
  created?: string;
}
class UsuarioClass implements Usuario{

}
