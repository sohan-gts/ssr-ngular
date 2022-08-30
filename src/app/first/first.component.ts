import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor( private metaService:Meta ) {

    // console.log('HELLO THERE');

  }

  ngOnInit(): void {

    console.log('HELLO THERE');
      this.metaService.updateTag({property: 'og:title', content: 'first Component'})
      this.metaService.updateTag({property: 'og:description', content: 'This Is AJV Product'})
      this.metaService.updateTag({property: 'og:image', content:'https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png'})

  }

}
