(async function () {
    const cardParent = document.getElementById("body")
    async function getData() {
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            renderData(data)
        } catch (error) {
            alert("Error occured")
        }
    }
    function renderData(data) {
        data.forEach(element => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
        <div id="img-div">
        <img src="${element.image}" alt="">
        </div>
        <div id="text">
            <h1>${element.title}</h1>
            <p>${element.description}</p>
            <button id="price">$ ${element.price}</button>
            </div>`
            cardParent.appendChild(card);
        });
    }
    await getData()

    const search = document.getElementById("inp")
    const data = search.addEventListener("input", function () {
        
    })
})
();