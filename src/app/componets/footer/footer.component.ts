import { Component, OnInit } from '@angular/core';import { faFacebookF, faGooglePlus, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // importação de icom do fortawesome

  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faGooglePlus = faGooglePlus;
  faInstagram = faInstagram;
  faYoutube = faYoutube;

  constructor() { }

  ngOnInit(): void {
  }

}
