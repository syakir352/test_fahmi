import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  destination = {
    name: 'Pantai Pangandaran',
    location: 'Pangandaran, Jawa Barat',
    price: 25000,
    description: 'Pantai Pangandaran adalah destinasi wisata populer yang menawarkan pasir putih, ombak tenang, dan pemandangan matahari terbenam yang indah.',
    imageUrl: 'https://www.mypangandaran.com/gambar/blog/blog-7-fakta-menarik-tentang-pangandaran-yang-memperlihatkan-pesona-pantainya-pastikan-tercatat-dalam-rencana-liburan-anda-di-tahun-2024-496-l.png',
  };

  constructor() {}

  ngOnInit() {}

  bookNow() {
    alert('Fitur pemesanan sedang dalam pengembangan.');
  }

  shareDestination() {
    alert('Bagikan destinasi ini ke teman Anda!');
  }
}
