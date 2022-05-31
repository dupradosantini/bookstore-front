import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll():Observable<Categoria[]>{

    const url = `${this.baseUrl}/categoria`;

    return this.http.get<Categoria[]>(url);
  }

  create(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/categoria`;
    return this.http.post<Categoria>(url, categoria);
  }

  message(str: String): void {
    this.snack.open(`${str}`, "OK", {
      horizontalPosition: "center",
      verticalPosition: "top",
      duration: 3000
    })
  }
}
