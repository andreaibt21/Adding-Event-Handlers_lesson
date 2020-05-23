// Add the code you want to test below:
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.onclick = open;
close.onclick = hide;

// Adding Event Handlers

function textChange () {
  view.innerHTML = 'Hello, World!'
};
function textReturn (){
  view.innerHTML = 'View';
};
view.addEventListener('click', textChange);

close.addEventListener('click', textReturn);
