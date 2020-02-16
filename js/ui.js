const clearBottomBarFocus = () => {
  let xx = ["inspect", "log", "console"];

  for (let b of xx) {
    document.getElementById("btn_" + b).setAttribute('class', '')
  }
}

const focusBB = (b) => {
  clearBottomBarFocus()
  document.getElementById("btn_" + b).setAttribute('class', 'highlight')
}

const ex = (str) => {
 let win = document.getElementById("src").contentWindow;
  let res = eval("win."+str);
  let d = document.createElement("p")
  d.innerText=res
  document.getElementById("console").appendChild(d)
}
function execute(el) {
  if (event.key === 'Enter') {
    let val = el.value
    el.value=""
    ex(val)
  }
}