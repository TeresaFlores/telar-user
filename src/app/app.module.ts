import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HederNavegatorComponent } from './shared/heder-navegator/heder-navegator.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AgentesComponent } from './pages/agentes/agentes.component';
import { AgentesService } from './components/services/agentes.service'


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HederNavegatorComponent,
    PerfilComponent,
    AgentesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AgentesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
