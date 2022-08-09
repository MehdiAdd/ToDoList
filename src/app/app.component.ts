import { Component,OnInit } from '@angular/core';
import {Task} from './Task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  atask:string="";
  listTasks: Task[]=[];

  ngOnInit():void {
    this.listTasks=[];
    this.atask="";
    console.log('initttt')
  }

  addTask(){

    if(this.atask !== ""){
      let item: Task={
        id: Date.now(),
        task: this.atask
      };
      this.listTasks.push(item);
      this.atask="";
    }else{
      alert("Enter a task");
    }

  }

  deleteTask(id:number){
    this.listTasks=this.listTasks.filter((item)=>item.id!==id);
  }

  clearAll(){
    this.listTasks=[];
    console.log('clear');
  }



}
