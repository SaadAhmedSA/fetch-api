let url = "https://cat-fact.herokuapp.com/facts"

  async function foo(){

let respon = await fetch(url)


let dat = await respon.json();

let h= document.getElementById("h1")
  
h1.innerText=(dat[0].text);
console.log(dat[1].text);
console.log(dat[2].text);
console.log(dat[3].text);
console.log(dat[4].text);


 }
foo()
