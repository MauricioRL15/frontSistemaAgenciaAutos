import { Marcas } from "./Marca";

export class Modelo{

    idModelo: Number;
    nombre: String;
    tipo: String;
    precio: Number;
    fechaLanzamiento: Date;
    marca: Marcas; //Variable de tipo objeto
}