import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { AuthProviders, AuthMethods } from 'angularfire2';

import {Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  items: any;
  usuariosLogueados:FirebaseListObservable<any[]>;

  subject:Subject<any>;

  queryObservable:any;

 
  constructor(private af: AngularFire){
    this.usuariosLogueados = 
            this.af.database.list('/usuarios');
    //const promiseObject = this.af.database.object('/usuarios');
    //promiseObject.set({name: "jorge"});

    this.subject = new Subject();
    
    this.af.database.list('/usuarios',{
                              query:{
                                orderByChild: 'size',
                                equalsTo: this.subject
                              }
                          });

    this.queryObservable.subscribe(queriedItems=>{
        console.log(queriedItems);
    });
     
  }
  

  filterBy(valor: string) {
    this.subject.next(valor); 
  }

  login(){
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then((authUser)=>{
      console.log(authUser);
      this.usuariosLogueados.push({ 
        "nombre": authUser.auth.displayName,
        "email": authUser.auth.email,
        "photoUrl": authUser.auth.photoURL
      });
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  ngOnInit(){
    this.items = this.af.database.list("/chats");

    
  }

  eliminar(key:string){
    this.usuariosLogueados.remove(key);
  }

  update(key:string){
    this.usuariosLogueados.update(key, {'email': 'jorge@jorge.com'});
  }

  eliminarTodos(){
    this.af.database.object('/usuarios').remove();
  }

  snapshot(){
    this.items = this.af.database.object('/usuarios', {preserveSnapshot: true});
    this.items.subscribe(snapshot=>{
      console.log(snapshot.key);
      console.log(snapshot.val());
    });
  }
  
}


