import { Component, OnInit } from '@angular/core';
import { BuscaService } from '../busca.service';
import { Busca} from '../busca'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})

export class BuscaComponent implements OnInit {

  busca?: Busca;

  constructor(
    private buscaService: BuscaService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    
  }
  
  getBusca(): void {
    const login = (<HTMLInputElement>document.getElementById('search')).value;
    this.buscaService.getBusca(login)
      .subscribe(busca => this.busca = busca);  
    
    this.messageService.clear()
  }
}
