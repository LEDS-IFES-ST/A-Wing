import { Component, OnInit, HostBinding } from '@angular/core';
import { MembroEsquadraoService } from '../../services/membro-esquadrao.service';
import { membroEsquadrao } from 'src/app/models/membroEsquadrao';
@Component({
  selector: 'app-membro-esquadrao-list',
  templateUrl: './membro-esquadrao-list.component.html',
  styleUrls: ['./membro-esquadrao-list.component.css']
})
export class MembroEsquadraoListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  membrosEsquadrao: any = [];
  constructor(private membrosEsquadraoService: MembroEsquadraoService) {  }

  ngOnInit() {
    this.getMembroEsquadrao();
  }
  getMembroEsquadrao(){
    this.membrosEsquadraoService.getMembrosEsquadrao().subscribe(
      res => {
        this.membrosEsquadrao= res 
      },
      err => console.error(err)
    )
  }
  excluirMembroEsquadrao(cod_personagem,cod_esquadrao:String){
    this.membrosEsquadraoService.deleteMembroEsquadrao(cod_personagem,cod_esquadrao).subscribe(
      res => {
        console.log(res);
        this.getMembroEsquadrao();
      },
      err => console.log(err)
    )
  }

}
