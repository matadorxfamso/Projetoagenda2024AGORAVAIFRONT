import { agendas } from './../agenda';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { agendasService } from '../agendas.service';

@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styleUrl: './agenda-form.component.css'
})
export class AgendaFormComponent implements OnInit {
  formGroupagenda: FormGroup;
  isEditing: boolean = false;

  constructor(private FormBuilder: FormBuilder,
    private service: agendasService, private router: Router, private activatedRouter: ActivatedRoute){

    this.formGroupagenda = FormBuilder.group({
      id: [''],
      nome: [''],
      compromisso: [''],
      dia: [''],
      horario: [''],
      localizacao: [''],
    })};

    ngOnInit(): void {
      const id = Number(this.activatedRouter.snapshot.paramMap.get("id"))
      if (id != 0) {
        this.loadagendas(id);
        this.isEditing = true;
      }
    }

    loadagendas(id: number) {
      this.service.getAgendasById(id).subscribe({
        next: data => this.formGroupagenda.setValue(data)
        })
    };

  save(){
    this.service.save(this.formGroupagenda.value).subscribe({
      next:()=> this.router.navigate(['agenda'])
    })
  }
  update(){
    this.service.update(this.formGroupagenda.value).subscribe({
      next:()=> this.router.navigate(['agenda'])

  })
}}
