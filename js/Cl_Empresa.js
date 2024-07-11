export default class Cl_Empresa{
constructor(){
this.cont_h=0;
this.cont_m=0;
this.cont_empleados=0;
}
    procesar(e){
        this.cont_empleados++;
        if(e._sexo ==="M"){
            this.cont_h++;
            if(e._sexo ==="F")
            this.cont_m++;
        }
    }
devolverContH(){
    return this.cont_h;
}
pcteMujeres(){
  return  this.cont_m*100/this.cont_empleados;
}
devolverNOmbre(){
    return e._nombre;
}
}