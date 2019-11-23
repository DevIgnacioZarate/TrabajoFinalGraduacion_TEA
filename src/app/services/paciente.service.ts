import { Injectable, OnInit } from '@angular/core';
import { Paciente } from '../interfaces/interfaces';


@Injectable({
    providedIn: 'root'
})
export class PacienteService  {
    private listadoPaciente: Paciente[];

    getPacientes() {
        this.listadoPaciente = [
            { _id: "1", apellido: "Zarate" , nombre:"Ignacio" , documento: 3370940 , activo: true  },
            { _id: "2", apellido: "Zarate", nombre:"Juan Martin",  documento:2570940, activo: true},
            { _id: "3", apellido: "Cocco", nombre:"Lucia Belen",  documento: 4570940, activo: true},
            { _id: "4", apellido: "Ortiz", nombre:"Malena" ,documento: 12570940 , activo: false},
            { _id: "5", apellido: "Sanches",nombre:"Estefania" , documento: 564645, activo: true},
            { _id: "6", apellido: "Perez", nombre: "Juan" , documento: 385161 , activo: true},
            { _id: "7", apellido: "Perez", nombre: "Juan" , documento: 385161 , activo: true},
            { _id: "8", apellido: "Perez", nombre: "Juan" , documento: 385161 , activo: true},
            { _id: "9", apellido: "Perez", nombre: "Juan" , documento: 385161 , activo: true},
            { _id: "10", apellido: "Perez", nombre: "Juan" , documento: 385161 , activo: true},
            { _id: "11", apellido: "Perez", nombre: "Juan" , documento: 385161 , activo: true},
            { _id: "12", apellido: "Perez", nombre: "Juan" , documento: 385161 , activo: true},
            { _id: "13", apellido: "Perez", nombre: "Juan" , documento: 385161 , activo: true},
            { _id: "14", apellido: "Perez", nombre: "Juan" , documento: 385161 , activo: true},
            { _id: "15", apellido: "Perez", nombre: "Juan" , documento: 385161 , activo: true},
            { _id: "16", apellido: "Perez", nombre: "Juan" , documento: 385161 , activo: true},
            { _id: "17", apellido: "Perez", nombre: "Juan" , documento: 385161 , activo: true},
            { _id: "18", apellido: "Perez", nombre: "Juan" , documento: 385161 , activo: true},
            
        ];
        return this.listadoPaciente;
    }
   

}
