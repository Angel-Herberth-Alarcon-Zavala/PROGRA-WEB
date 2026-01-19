function butOnclick() {
    const body = document.getElementById("cuerpo")
    body.setAttribute("style", "background-color: red")
}

const but = document.getElementById("btn")
but.onclick = butOnclick()