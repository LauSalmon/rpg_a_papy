let hero = {
    s_nom : "Pomme",
    n_pv : 10,
    n_attaque : 3,
    saluer(personnage){
        console.log("Salutation "+personnage.s_nom+" Je suis "+this.s_nom+"!");
    },
    ficheDePersonnage(){
        return "Nom : "+this.s_nom+" | PdV : "+this.n_pv;
    },
    soin(n_soin){
        this.n_pv = this.n_pv + n_soin;
    },
    attaquer(ennemie){
        ennemie.n_pv -= this.n_attaque;
    },
 };

let ennemie = {
    s_nom : "Zombie",
    n_pv : 8,
    n_attaque : 2,
    saluer(personnage){
        console.log("Salutation "+personnage.s_nom+" Je suis "+this.s_nom+"!");
    },
    ficheDePersonnage(){
        return "Nom : "+this.s_nom+" | PdV : "+this.n_pv;
    },
    soin(n_soin){
        this.n_pv += n_soin;
    },
    attaquer(hero){
        hero.n_pv -= this.n_attaque;
    },
};

//Constantes pour le hero
const element_hero_name = document.querySelector("#hero .name");
const element_hero_pv = document.querySelector("#hero .pv");
const element_hero_attack = document.querySelector("#hero .attack");

element_hero_name.innerText = hero.s_nom;
element_hero_pv.innerText = "PV : "+hero.n_pv;
element_hero_attack.innerText = "ATK : "+hero.n_attaque;

//Constantes pour le zombie
const element_ennemy_name = document.querySelector("#ennemy .name");
const element_ennemy_pv = document.querySelector("#ennemy .pv");
const element_ennemy_attack = document.querySelector("#ennemy .attack");

element_ennemy_name.innerText = ennemie.s_nom;
element_ennemy_pv.innerText = "PV : "+ennemie.n_pv;
element_ennemy_attack.innerText ="ATK : "+ennemie.n_attaque;


//Fonction Draw
function draw(){
    const element_hero_pv = document.querySelector("#hero .pv");
    element_hero_pv.innerText = "PV : "+hero.n_pv;

    const element_ennemy_pv = document.querySelector("#ennemy .pv");
    element_ennemy_pv.innerText = "PV : "+ennemie.n_pv;
};

// CONSTANTES POUR LE BOUTTON SOIGNER
const hero_btn_soin = document.querySelector("#hero .btn_soin");
hero_btn_soin.addEventListener("click", function(){
    hero.soin(1);
    const body = document.querySelector("body"); // changement de couleur de fond quand click sur soigner
    body.classList.add("soigner_hero");
    setTimeout(function(){
        body.classList.remove("soigner_hero");
    },250);

    draw();
});
const ennemy_btn_soin = document.querySelector("#ennemy .btn_soin");
ennemy_btn_soin.addEventListener("click", function(){
    ennemie.soin(1);
    const body = document.querySelector("body"); // changement de couleur de fond quand click sur soigner
    body.classList.add("soigner_ennemie");
    setTimeout(function(){
        body.classList.remove("soigner_ennemie");
    },250);
    draw();
});

//CONSTANTES POUR LE BOUTTON ATTAQUER
const hero_btn_attack = document.querySelector("#hero .btn_attack");
hero_btn_attack.addEventListener("click",function(){
    hero.attaquer(ennemie);
    const image = document.querySelector("#hero img"); //Zoom quand le hero attaque
    image.classList.add("attaquer");
    setTimeout(function(){                             // Dézoom
        image.classList.remove("attaquer");
    },250)

    const pv = document.querySelector("#ennemy .pv"); // les pv passent en rouge
    pv.classList.add("attaquer");
    setTimeout(function(){
        pv.classList.remove("attaquer");
    },250);

    draw();
});

const ennemy_btn_attack = document.querySelector("#ennemy .btn_attack");
ennemy_btn_attack.addEventListener("click", function(){
    ennemie.attaquer(hero);
    const image = document.querySelector("#ennemy img"); // Zoom pour attaquer
    image.classList.add("attaquer");
    setTimeout(function(){                               // Dézoom
        image.classList.remove("attaquer");
    },250);

    const pv = document.querySelector("#hero .pv"); // les pv passent en rouge
    pv.classList.add("attaquer");
    setTimeout(function(){
        pv.classList.remove("attaquer");
    },250);

    draw();
});

