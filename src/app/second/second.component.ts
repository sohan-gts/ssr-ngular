import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor( private metaService:Meta ) {

    // console.log('HELLO THERE');

     }

  ngOnInit(): void {

    console.log('HELLO THERE');

      this.metaService.updateTag({property: 'og:title', content: 'Second Component'})
      this.metaService.updateTag({property: 'og:description', content: 'This Is Second Component'})
      this.metaService.updateTag({property: 'og:image', content:'https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png'})

  }

}
