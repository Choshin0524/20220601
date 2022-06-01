import "./styles.css";

let next = 1;

document.remove = (id) => {
  if (id === next) {
    document.getElementById("main").removeChild(document.getElementById(id));
    next += 1;
  }
};
let left_pos = [];
let top_pos = [];
for (var i = 60; i > 0; i--) {
  var elm = document.createElement("button");
  elm.innerHTML = i;
  elm.setAttribute("id", i);
  elm.setAttribute("class", "circle");
  elm.setAttribute("onclick", "remove(" + i + ")");

  left_pos[i - 1] = 100 + Math.floor(Math.random() * 600);
  top_pos[i - 1] = 100 + Math.floor(Math.random() * 450);
  if (i <= 49) {
    var left_dif = Math.abs(left_pos[i - 1] - left_pos[i]);
    var top_dif = Math.abs(top_pos[i - 1] - top_pos[i]);
    while (left_dif < 50 || top_dif < 50) {
      left_pos[i - 1] = 100 + Math.floor(Math.random() * 600);
      top_pos[i - 1] = 100 + Math.floor(Math.random() * 450);
      left_dif = Math.abs(left_pos[i - 1] - left_pos[i]);
      top_dif = Math.abs(top_pos[i - 1] - top_pos[i]);
    }
  }

  document.getElementById("main").appendChild(elm);
  document.getElementById(i).style.left = left_pos[i - 1] + "px";
  document.getElementById(i).style.top = top_pos[i - 1] + "px";
  document.getElementById(i).style.height = 20 + Math.random() * 50 + "px";
  document.getElementById(i).style.width = 20 + Math.random() * 50 + "px";
}
