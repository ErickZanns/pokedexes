export class PokemonModel{
    private id: number;
    private nombre: string;
    private imagen: string;
    private vida: string;
    private ataque: string;
    private defensa: string;
    private tipo: string;
    constructor(id: number, nombre: string, imagen: string, vida: string, ataque: string, defensa: string, tipo: string){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.tipo = tipo;
    }

    /*Getter*/
    getId(): number{
        return  this.id;
    }
    getNombre(): string{
        return this.nombre;
    }
    getImagen(): string{
        return this.imagen;
    }
    getVida(): string{
        return this.vida;
    }
    getAtaque(): string{
        return this.ataque;
    }
    getDefensa(): string{
        return this.defensa;
    }
    getTipo(): string{
        return this.tipo;
    }



    /*Setter*/
    setId(id: number){
        this.id = id;
    }
    setNombre(nombre: string){
        this.nombre = nombre;
    }
    setImagen(imagen: string){
        this.imagen = imagen;
    }
    setVida(vida: string){
        this.vida = vida;
    }
    setAtaque(ataque: string){
        this.ataque = ataque;
    }
    setDefensa(defensa: string){
        this.defensa = defensa;
    }
    setTipo(tipo: string){
        this.tipo = tipo;
    }

    /*Métodos de clase*/
    mostrarPokemon():string{
        return "ID: " + this.id + " Nombre: " + this.nombre + " Imagen: " + this.imagen + " Vida: " + this.vida + " Ataque: " + this.ataque + " Defensa: " + this.defensa + " Tipo: " + this.tipo;
    }
}
