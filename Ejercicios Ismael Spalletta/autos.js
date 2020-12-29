// ISMAEL IGANCIO SPALLETTA 
const vehiculos =[
  { 
    marca: "Peugeot",  
    modelo: "206"  ,
    puertas: 4 , 
    precio: 20000000
  },

   { 
    marca: "Honda" ,
    modelo: "Titan"  ,
    cilindrada: 125 ,
    precio: 6000000
  },

   { 
    marca: "Peugeot" ,
    modelo: "208" ,
    puertas: 5 ,
    precio: 25000000
   },

   { 
    marca: "Yamaha",  
    modelo: "YBR"  ,
    cilindrada: 160 ,
    precio: 8050050
   }
];
        
function mostrarResultados(){
        let masCaro={};
        let masVarato={};
        let contieneY={};
   
        vehiculos.forEach(a=>{
        if(Object.keys(masCaro).length === 0 )
        {
            masCaro=a;
        }
        if(Object.keys(masVarato).length === 0 )
        {
            masVarato=a;
        }
        if(a.precio>masCaro.precio){
            masCaro=a;
        }
        if(a.precio<masVarato.precio){
            masVarato=a;
        }
        if(a.modelo.includes('Y')){
            contieneY=a;
        } 
    })
    console.log("Vehículo más caro: "+masCaro.marca+" "+masCaro.modelo);
    console.log("Vehículo más barato:"+ masVarato.marca+" "+masVarato.modelo);
    console.log("Vehículo que contiene en el modelo la letra ‘Y’:"+contieneY.marca+" "+contieneY.modelo);
}
 function mostrarOrdenados(){
    const ordenados= vehiculos.sort((a,b)=>{
        return b.precio-a.precio
    }) 
    ordenados.forEach(a=> console.log(a.marca+ " "+ a.modelo));
 };
mostrarResultados();
mostrarOrdenados();


