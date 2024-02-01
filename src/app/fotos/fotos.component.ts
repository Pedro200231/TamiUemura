import { Component } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.css'
})
export class FotosComponent {
  timerSubs!: Subscription;

  imagens = [
    { 
      title: 'Neném - Ameaçador', 
      url: '../../assets/image/nenem-ameaçador.jpeg' 
    }, 
    { 
      title: 'Neném - Amigo', 
      url: '../../assets/image/nenem-amigo.jpeg' 
    },
    { 
      title: 'Neném - Beijinho', 
      url: '../../assets/image/nenem-beijinho.jpeg' 
    },
    { 
      title: 'Neném - CowGirl', 
      url: '../../assets/image/nenem-cowgirl.jpeg' 
    },
    { 
      title: 'Neném - Frase', 
      url: '../../assets/image/nenem-frase.jpeg' 
    },
    { 
      title: 'Neném - Linguinha', 
      url: '../../assets/image/nenem-linguinha.jpeg' 
    },
    { 
      title: 'Neném - Natal', 
      url: '../../assets/image/nenem-natal.jpeg' 
    },
    { 
      title: 'Neném - Olhar', 
      url: '../../assets/image/nenem-olhar.jpeg' 
    },
    { 
      title: 'Neném - Pia do Banheiro', 
      url: '../../assets/image/nenem-pia-banheiro.jpeg' 
    },
    { 
      title: 'Neném - Sorriso', 
      url: '../../assets/image/nenem-sorriso.jpeg' 
    },
    { 
      title: 'Neném -Sorriso na Tenda', 
      url: '../../assets/image/nenem-tenda-sorriso.jpeg' 
    },
    { 
      title: 'Neném - Tenda', 
      url: '../../assets/image/nenem-tenda.jpeg' 
    },
  ]

  private _indexImagemAtiva: number = 0;
  get indexImagemAtiva() {
    return this._indexImagemAtiva;
  }

  set indexImagemAtiva(value: number) {
    this._indexImagemAtiva =
      value < this.imagens.length ? value : 0;
  }

  ngOnInit(): void {
    this.iniciarTimer();
  }

  ngOnDestroy(): void {
    this.pararTimer();
  }

  iniciarTimer(): void {
    this.timerSubs = timer(2000).subscribe(() => {
      this.ativarImagem(
        this.indexImagemAtiva + 1
      );
    });
  }

  pararTimer(): void {
    this.timerSubs?.unsubscribe();
  }

  ativarImagem(index: number): void {
    this.indexImagemAtiva = index;
    this.iniciarTimer();
  }

}

