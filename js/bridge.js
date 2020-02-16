let win = null;

var hist = [];

const DBUG = () => {
    

    win = document.getElementById("src").contentWindow;

    //inherit code
    let s = win.document.createElement("script");
    s.innerHTML = "var _BUG = [];window.onerror = function (e) { _BUG.push(e)};console.log=function (msg){_BUG.push(msg)}";
    win.document.body.appendChild(s);

    setInterval(() => {
      let hist = win._BUG;
      document.getElementById("log").innerHTML=""
       if (hist.length > 0) {
         for (let m of hist) {
           let e = document.createElement("p");
           e.innerText = m
           document.getElementById("log").appendChild(e)
         }}
         document.getElementById("inspect").innerText="<html>\n"+win.document.documentElement.innerHTML+"\n</html>"
    }, 500);
    
    document.getElementById("inspect").innerText="<html>\n"+win.document.documentElement.innerHTML+"\n</html>"
  };
