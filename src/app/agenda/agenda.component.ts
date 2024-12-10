import { agendasService } from './../agendas.service';
import { agendas } from './../agenda';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  agendas: agendas[] = []
  constructor(private service: agendasService){}
  ngOnInit(): void{
    this.loadagendas();
  }
  loadagendas(){
    this.service.getagendas().subscribe({
      next: data => this.agendas = data
    })
  }
  delete(agendas: agendas){
    
    this.service.delete(agendas).subscribe({
      next: ()=> this.loadagendas()
    })
  }
  }

