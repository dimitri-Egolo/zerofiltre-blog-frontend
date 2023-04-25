import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'vimeoUrl'
})
export class VimeoUrlPipe implements PipeTransform {
  readonly accessToken = environment.vimeoToken;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  transform(value: string, ...args: any[]): any {
    // 'https://vimeo.com/697276485'
    const prev = `${value}?access_token=${this.accessToken}&autoplay=0&title=false&muted=true&color=15B2BC&byline=false`
    const url = prev?.replace("vimeo.com/", "player.vimeo.com/video/")

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
