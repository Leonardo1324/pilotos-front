import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms'; // Importar el módulo
import { importProvidersFrom } from '@angular/core'; // Importar la función para agregar módulos

import { HttpClientModule } from '@angular/common/http';// Importar HttpClientModule
import { CommonModule } from '@angular/common'; // Importar CommonModule


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(ReactiveFormsModule),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(CommonModule)]
};
