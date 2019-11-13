import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='Derrick Mbote';
  UserSelected:string
  CompSelected:string
  compWeapon=["rock","paper", "scissors"]
  UserScore=0
  CompScore=0
  action:string
  status:string
  UserPick (weapon:string){
    this.UserSelected=weapon
console.log('userselected',this.UserSelected)

setTimeout(()=>{
const randomNumber=Math.floor(Math.random()*3)
this.CompSelected=this.compWeapon[randomNumber]
console.log('comp selected',this.CompSelected)
 this.checkResult()
},1000)


  }
  clearfield(){
    setTimeout(()=>{
    this.status=''
    this.UserSelected=''
    this.CompSelected=''},1500)
    
  }
  
    win(user,comp){
    this.UserScore++
    console.log(user,comp)
    this.UserSelected=user
    this.CompSelected=comp
    this.action="beats"
    this.status="You win"
    this.clearfield()

  }
  lose(user,comp){
    this.CompScore++
    console.log(user,comp)
    this.UserSelected=user
    this.CompSelected=comp
    this.action="loses to"
    this.status="You lose"
    this.clearfield()
}
draw(user,comp){
  console.log(user,comp)
  this.UserSelected=user
    this.CompSelected=comp
    this.action="and"
    this.status="You draw"
    this.clearfield()

}
reset(){
  this.UserScore=0
  this.CompScore=0

}
  checkResult(){
  const UserChoice=this.UserSelected 
  const CompChoice=this.CompSelected
  switch(UserChoice+CompChoice){
    case "rockscissors":
    case"scissorspaper":
    case"paperrock":
  this.win(UserChoice, CompChoice)
    break;
    case"scissorsrock":
    case"rockpaper":
    case"paperscissors":
   this.lose(UserChoice, CompChoice)
    break;
    default:
    this.draw(UserChoice, CompChoice)
    break;
  
  }
}
}
