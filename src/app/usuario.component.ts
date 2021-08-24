import {Component} from '@angular/core';

@Component({
    selector:'app-usuario',
    templateUrl:'./usuario.component.html'
})

export class UsuarioComponent{
    usuarios = ['Luis','Fernando','Mario'];
    usuarias =['María','Luisa','Alejandra'];
    usuarioNombre = '';
    usuariaNombre = '';
    visible=false;
    constructor(){
        setTimeout(()=>{this.visible=true;},3000)
    }
    onAgregarUsuario(){
        this.usuarios.push(this.usuarioNombre);
    }
    onAgregarUsuaria(){
        this.usuarias.push(this.usuariaNombre);
    }
}
