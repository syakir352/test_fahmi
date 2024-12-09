import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  destinations = [
    {
      id: 1,
      name : 'pantai pangandaran',
      location : 'pangandaran',
      price : '25000',
      imageUrl : 'https://www.mypangandaran.com/gambar/blog/blog-7-fakta-menarik-tentang-pangandaran-yang-memperlihatkan-pesona-pantainya-pastikan-tercatat-dalam-rencana-liburan-anda-di-tahun-2024-496-l.png'
    },
    {
      id: 2,
      name : 'pantai pangandaran',
      location : 'pangandaran',
      price : '25000',
      imageUrl : 'https://www.mypangandaran.com/gambar/blog/blog-7-fakta-menarik-tentang-pangandaran-yang-memperlihatkan-pesona-pantainya-pastikan-tercatat-dalam-rencana-liburan-anda-di-tahun-2024-496-l.png'
    },
  ];

  constructor( private router: Router) {}
  goToDetail(destination: any) {
    // Navigasi ke halaman detail dengan mengirim data ID destinasi
    this.router.navigate(['/tabs/detail', destination.id]);
  }
}
