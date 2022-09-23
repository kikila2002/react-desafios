const data = [
    {
        id: 1,
        title: "ARCOIRIS",
        price: 750,
        detail:"Chapita identificadora realizada a 3D con grandes acabados y super resistentes",
        img:"/imagenes/arcoiris.jpg",
        stock: 1000,
        category: "Chapitas",
    },
    {
        id: 2,
        title: "OREO",
        price: 750,
        detail:"Chapita identificadora realizada a 3D con grandes acabados y super resistentes",
        img:"/imagenes/oreo0.png",
        stock: 1000,
        category: "Chapitas",
    },
    {
        id: 3,
        title: "TOY STORY",
        price: 750,
        detail:"Chapita identificadora realizada a 3D con grandes acabados y super resistentes",
        img:"/imagenes/soy.jpg",
        stock: 1000,
        category: "Chapitas",
    },
    {
        id: 4,
        title: "VIKINGOS",
        price: 750,
        detail:"Chapita identificadora realizada a 3D con grandes acabados y super resistentes",
        img:"/imagenes/VIKINGOS1.png",
        stock: 1000,
        category: "Chapitas",
    },
    
]

export function getItems(){
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(data);
        }, 1000 );
    }
    );


}