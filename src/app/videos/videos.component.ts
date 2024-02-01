import { Component,Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})

export class VideosComponent {
  videos = [
    { 
      title: 'Neném - Início', 
      url: '../../assets/videos/nenem-inicio.mp4' 
    },
    { 
      title: 'Neném - Atenção', 
      url: '../../assets/videos/nenem-atencao.mp4' 
    },
    { 
      title: 'Neném - Barca', 
      url: '../../assets/videos/nenem-barca.mp4' 
    },
    {
      title: 'Neném - Belieber', 
      url: '../../assets/videos/nenem-belieber.mp4'
    },
    {
      title: 'Neném - Cavalinho', 
      url: '../../assets/videos/nenem-cavalinho.mp4'
    },
    {
      title: 'Neném - Colo', 
      url: '../../assets/videos/nenem-colo.mp4'
    },
    {
      title: 'Neném - Hamburguer', 
      url: '../../assets/videos/nenem-hamburguer.mp4'
    },
    {
      title: 'Neném - Maringá', 
      url: '../../assets/videos/nenem-maringa.mp4'
    },
    {
      title: 'Neném - Meia', 
      url: '../../assets/videos/nenem-meia.mp4'
    },
    {
      title: 'Neném - Motel', 
      url: '../../assets/videos/nenem-motel.mp4'
    },
    {
      title: 'Neném - Motoqueiro', 
      url: '../../assets/videos/nenem-motoqueiro.mp4'
    },
    {
      title: 'Neném - Música', 
      url: '../../assets/videos/nenem-musica.mp4'
    },
    {
      title: 'Neném - Ombrinho', 
      url: '../../assets/videos/nenem-ombrinho.mp4'
    },
    {
      title: 'Neném - Sobrancelha', 
      url: '../../assets/videos/nenem-sobrancelha.mp4'
    },
    {
      title: 'Neném - Te Amuuu', 
      url: '../../assets/videos/nenem-teamuuu.mp4'
    },
    {
      title: 'Neném - Varanda', 
      url: '../../assets/videos/nenem-varanda.mp4'
    }
  ];

  timerSubs!: Subscription;

  private _indexVideoAtiva: number = 0;
  get indexVideoAtiva() {
    return this._indexVideoAtiva;
  }

  set indexVideoAtiva(value: number) {
    this._indexVideoAtiva =
      value < this.videos.length ? value : 0;
  }

  ativarVideo(index: number): void {
    this.indexVideoAtiva = index;
  }
}

