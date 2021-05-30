import { Component, OnInit } from '@angular/core';
import { BuscaService } from '../busca.service';
import { Busca} from '../busca'

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})

export class BuscaComponent implements OnInit {

  busca?: Busca;

  constructor(
    private route: ActivatedRoute,
    private buscaService: BuscaService,
    private location: Location
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
