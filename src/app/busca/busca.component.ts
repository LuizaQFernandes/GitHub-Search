import { Component, OnInit } from '@angular/core';
import { BuscaService } from '../busca.service';
import { Busca} from '../busca'

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})

export class BuscaComponent implements OnInit {

  busca?: Busca;

  constructor(
    private buscaService: BuscaService,

  ) { }

  ngOnInit(): void {
    this.getBusca();
  }
  
  getBusca(): void {
    const login = (<HTMLInputElement>document.getElementById('search')).value;
    this.buscaService.getBusca(login)
      .subscribe(busca => this.busca = busca);
  }
}
