import { AfterContentInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit{
  title = 'site-loan-angular';
  indexAvis : number = 0;
  constructor() {
    //this.initAvis();
  }
  ngAfterContentInit(): void {
    this.initAvis();
    this.menuBurger();
  }
  dropDownMenuBurger(){
    const btnDropDownMenuBurger :  HTMLDivElement = document.querySelector('.menu-burger-nav_menu_li-dropdown-2') as HTMLDivElement;
    btnDropDownMenuBurger.addEventListener('click',(event)=>{
  
      const btnBlockNav :  HTMLDivElement = document.querySelector('.menu-burger-nav') as HTMLDivElement;
      btnBlockNav.classList.toggle('dropdown-2');
      const menuNavLiDropdown2 :  HTMLDivElement = document.querySelector('.menu-burger-nav_menu_li-dropdown-2')  as HTMLDivElement; 
      menuNavLiDropdown2.classList.toggle('grossir');
      const listBtnMaigrir = document.querySelectorAll(".menu-burger-nav_menu_li:not(.menu-burger-nav_menu_li:nth-child(4))") ;
      listBtnMaigrir.forEach(elt =>{
          elt.classList.toggle('maigrir');
      })
      
  })
  }
  
  menuBurger(){
    const btn  : HTMLDivElement = document.querySelector('.menu-burger') as HTMLDivElement ;
    const btnNavBurger : HTMLDivElement = document.querySelector('.menu-burger-nav') as HTMLDivElement;
    btn.addEventListener('click',()=>{

      btn.classList.toggle('active');
      btn.classList.toggle('menu-burger-z-index');
      btnNavBurger.classList.toggle('menu-burger-nav-active');
      const divConteneur : HTMLDivElement = document.querySelector('.conteneur_menu-burger_content') as HTMLDivElement;
      divConteneur.classList.toggle('active');
  
  });
  }
  
  

  clickButton( {path} :any){
    
    const targetDivElement : HTMLDivElement = path[0].nextElementSibling as HTMLDivElement;
    targetDivElement.classList.toggle('sous_icon_texte_toggle');
    const nbTexteActivee = document.querySelectorAll('.sous_icon_texte_toggle').length ; 
    console.log("blabla",nbTexteActivee);
    let  main2ContainerIcon = document.querySelector('.main2_container_icon') as HTMLDivElement;
    
         if(nbTexteActivee >= 1){
         
          main2ContainerIcon.style.marginBottom = "350px";
         }else{
          main2ContainerIcon.style.marginBottom = "250px";
         }
  }
  slideAdroite(){
    let blockAvis : NodeListOf<HTMLDivElement> = document.querySelectorAll('.main2_block4_avis_box_block') as NodeListOf<HTMLDivElement> ;
    console.log(blockAvis);
    blockAvis.forEach(element =>{
      let decallage = Number(element.style.left.split('%')[0])-100;
      element.style.left = decallage+"%";
      console.log(element);
    })

  }
  slideAgauche(){
    let blockAvis : NodeListOf<HTMLDivElement> = document.querySelectorAll('.main2_block4_avis_box_block') as NodeListOf<HTMLDivElement> ;
    console.log(blockAvis);
    blockAvis.forEach(element =>{
      let decallage = Number(element.style.left.split('%')[0])+100;
      element.style.left = decallage+"%";
      console.log(element);
    })
  }
  tournerADroite(){
    console.log("mon indexe : ",this.indexAvis);
    if(this.indexAvis<3){
        this.indexAvis++;
        this.slideAdroite();
        
    }
  }
  tournerAGauche(){
    console.log("mon indexe : ",this.indexAvis);
    if(this.indexAvis> 0){
      this.indexAvis--;
      this.slideAgauche();
    }
  }

  initAvis(){
    console.log("debut");
    let blockAvis : NodeListOf<HTMLDivElement> = document.querySelectorAll('.main2_block4_avis_box_block') as NodeListOf<HTMLDivElement> ;
    let leftAvis = "50";
    console.log("blockAvist",blockAvis);
    console.log("millieu");
    blockAvis.forEach(element => {
      console.log("mon element",element);
      element.style.left = leftAvis+"%";
      element.style.transform = "translate(-50%, -50%)";
      element.style.transition = "all 0.5s ease-in-out"
      leftAvis = String(Number(leftAvis)+100);
      console.log("boucle",leftAvis);
    });
    console.log("fin");
  }

}
