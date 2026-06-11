let products = [
    {name:"TV", price:1000, qty:2},
    {name:"Phone", price:800, qty:3}
];

function render(){
    let table = document.getElementById("table");
    table.innerHTML = "";

    products.forEach((p,i)=>{
        table.innerHTML += `
            <tr>
                <td>${p.name}</td>
                <td>${p.price}</td>
                <td>${p.qty}</td>
                <td><button onclick="deleteItem(${i})">Delete</button></td>
            </tr>
        `;
    });

    document.getElementById("count").innerText = products.length;

    let revenue = products.reduce((a,b)=>a + (b.price*b.qty),0);
    document.getElementById("revenue").innerText = revenue;
}

function addProduct(){
    let name = prompt("Name?");
    let price = prompt("Price?");
    let qty = prompt("Qty?");

    products.push({name, price:Number(price), qty:Number(qty)});
    render();
}

function deleteItem(i){
    products.splice(i,1);
    render();
}

document.getElementById("search").addEventListener("input",(e)=>{
    let value = e.target.value.toLowerCase();
    let rows = document.querySelectorAll("tbody tr");

    rows.forEach(r=>{
        r.style.display = r.innerText.toLowerCase().includes(value) ? "" : "none";
    });
});

render();