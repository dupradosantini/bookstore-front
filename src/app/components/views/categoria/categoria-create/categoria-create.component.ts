import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    name: '',
    description: ''
  }

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.categoria).subscribe({
      next: (resposta) => {
        this.router.navigate(['categorias']);
        this.service.message("Categoria criada com sucesso!");
      },
      error: (err) => {
        for(let i=0; i< err.error.errors.length; i++){
          this.service.message(err.error.errors[i].message);
        }
      }
    })
  }
  cancel(): void {
    this.router.navigate(['categorias']);
  }
}
