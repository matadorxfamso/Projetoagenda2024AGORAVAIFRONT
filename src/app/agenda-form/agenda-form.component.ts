import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { agendasService } from '../agendas.service';

@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styleUrl: './agenda-form.component.css'
})
export class AgendaFormComponent {
  formGroupagenda: FormGroup;
  constructor(private FormBuilder: FormBuilder,
    private service: agendasService, private router: Router){

    this.formGroupagenda = FormBuilder.group({
      id: [''],
      nome: [''],
      compromisso: [''],
      dia: [''],
      horario: [''],
      localizacao: [''],
    })

  }
  save(){
    this.service.save(this.formGroupagenda.value).subscribe({
      next:()=> this.router.navigate(['agenda'])
    })
  }
}
