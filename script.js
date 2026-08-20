const NAME="Rajani"; // CHANGE
const BIRTHDAY={day:1,month:1}; // CHANGE
const LETTER=`You deserve a birthday that feels a little more magical than an ordinary day.

I hope this new year of your life brings you the kind of happiness that stays, the kind of memories you replay with a smile, and the courage to chase everything your heart wants.

Thank you for being the wonderful person you are. Keep smiling, keep dreaming, and never forget how deeply special you are.

Happy Birthday, ${NAME}. ❤️`;

document.querySelectorAll("#name1,#name2,#name3").forEach(x=>x.textContent=NAME);
const pages=[...document.querySelectorAll(".page")];
function go(id){pages.forEach(p=>p.classList.remove("active"));document.getElementById(id).classList.add("active")}
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>go(b.dataset.go));

const oops=document.getElementById("oops");
document.getElementById("unlockBtn").onclick=()=>{
 const d=+document.getElementById("dd").value,m=+document.getElementById("mm").value;
 if(d===BIRTHDAY.day&&m===BIRTHDAY.month) go("birthday");
 else {oops.classList.add("show");setTimeout(()=>oops.classList.remove("show"),1800)}
};
document.getElementById("skipBtn").onclick=()=>go("birthday");

document.getElementById("wishBtn").onclick=()=>{
 document.querySelectorAll(".flame").forEach(x=>x.style.display="none");
 document.getElementById("wishBtn").textContent="Wish made ✨";
 setTimeout(()=>go("memories"),900);
};
document.getElementById("memoryBtn").onclick=()=>go("wishes");

let popped=0;
document.querySelectorAll(".bal").forEach(b=>b.onclick=()=>{
 if(b.classList.contains("popped"))return;
 b.classList.add("popped");popped++;
 const wt=document.getElementById("wishText");wt.textContent=b.dataset.text;wt.classList.add("show");
 if(popped===5)document.getElementById("wishesNext").classList.remove("hidden");
});
document.getElementById("wishesNext").onclick=()=>go("puzzle");

const tiles=document.getElementById("tiles");
const nums=[1,2,3,4,5,6,7,8,9,0,♥=11,12];
nums.sort(()=>Math.random()-.5);
nums.forEach(n=>{
 const b=document.createElement("button");b.className="tile";b.textContent=n===11?"♥":n;b.dataset.n=n;
 b.onclick=()=>{
  if(n===7){b.classList.add("target");document.getElementById("puzzleHint").textContent="You found 7! ✨";document.getElementById("puzzleNext").classList.remove("hidden")}
  else {b.animate([{transform:"translateX(-4px)"},{transform:"translateX(4px)"},{transform:"translateX(0)"}],{duration:180})}
 };tiles.appendChild(b)
});
document.getElementById("puzzleNext").onclick=()=>go("surprise");

document.getElementById("gift").onclick=()=>{
 const g=document.getElementById("gift");g.animate([{transform:"scale(1)"},{transform:"scale(1.1) rotate(3deg)"},{transform:"scale(.05) rotate(30deg)"}],{duration:850,easing:"ease-in"});
 setTimeout(()=>{go("letter");typeLetter()},650)
};

let typed=false;
function typeLetter(){
 if(typed)return;typed=true;
 const el=document.getElementById("letterText");let i=0;
 const timer=setInterval(()=>{el.textContent=LETTER.slice(0,i++);if(i>LETTER.length)clearInterval(timer)},18);
}
document.getElementById("again").onclick=()=>{typed=false;document.getElementById("letterText").textContent="";go("home")};

const music=document.getElementById("music");
document.getElementById("musicToggle").onclick=async()=>{
 try{if(music.paused){await music.play();document.getElementById("musicToggle").textContent="Ⅱ"}else{music.pause();document.getElementById("musicToggle").textContent="♫"}}catch(e){alert("Add your own MP3 at assets/music.mp3 and tap ♫ again.")}
};

const particle=document.getElementById("particles");
for(let i=0;i<35;i++){
 const s=document.createElement("span");s.textContent=Math.random()>.45?"♥":"·";s.style.cssText=`position:absolute;left:${Math.random()*100}%;top:${Math.random()*100}%;color:rgba(244,105,153,${.12+Math.random()*.35});font-size:${7+Math.random()*13}px;animation:float ${7+Math.random()*10}s ease-in-out ${-Math.random()*10}s infinite;`;
 particle.appendChild(s);
}
const style=document.createElement("style");style.textContent="@keyframes float{50%{transform:translateY(-35px) translateX(15px);opacity:.8}}";document.head.appendChild(style);
