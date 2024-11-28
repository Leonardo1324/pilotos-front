import { Component, NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PilotosService} from './services/pilotos/pilotos.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { error } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  [x: string]: any;

  pilotoForm!: FormGroup;
  pilotos:any;

  constructor(public fb: FormBuilder,public pilotosservice: PilotosService) {

  }

  ngOnInit(): void {
    this.pilotoForm = this.fb.group({
    id: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido:['', Validators.required],
    nombreCompleto: ['', Validators.required],
    nombreAbreviado: ['', Validators.required],
    fotoPiloto: ['', Validators.required],
    });

    this.pilotosservice.getPiloto().subscribe(resp => {
        this.pilotos = resp;
        console.log(resp);
    },
    error =>{console.error(error)})
  }

  guardar():void{
    
  }
}
