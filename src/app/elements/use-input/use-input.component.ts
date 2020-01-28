import { Component, Input } from '@angular/core';
// import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-use-input',
  templateUrl: './use-input.component.html',
  styleUrls: ['./use-input.component.scss']
})
export class InputUseComponent {

    @Input() data: any = {
        type: ''
    };

    photos = [];

    constructor() {}

    checkFile(el) {
        let name, file;

        if ( el && el.files[0] ) {
            file = el.parentNode.parentNode.querySelector('.file-txt');
            name = file.querySelector('span');
            name.innerHTML = el.files[0].name;
            file.classList.remove('hidden');
        }
    }

    checkIMG(el) {
        let photo, i, pv, img, photos, file, size; photos = this.photos;

        if (el) {
            URL = URL ? URL : window.URL;
            pv = el.parentNode.parentNode; size = [ el.parentNode.clientWidth, el.parentNode.clientHeight ];

            if ( el.files.length > 0 ) {
                for ( i = 0; i < el.files.length; i++ ) {

                    file = el.files[i];
                    if ( photos.length < 20 ) {

                        if ( photos.indexOf(file) !== -1) {
                            alert('Essa imagem já foi carregada !');
                        } else {
                            photos.push(file);
                            photo = URL.createObjectURL( file );
                            if (pv) {
                                img = document.createElement('img');
                                img.src = photo;
                                img.style.display = 'inline-block';
                                img.alt = file.name;
                                img.title = file.name;
                                img.width = size[0];
                                img.height = size[1];
                                img.style.margin = '1em .5em';
                                img.style.wordWrap = 'break-word';
                                img.style.wordBreak = 'break-all';
                                img.style.outline = '1px solid rgba(0,0,0,0.12)';
                                img.style.pointerEvents = 'none';
                                img.setAttribute('data-idx', i);
                                pv.appendChild(img);
                                // URL.revokeObjectURL(photo);
                            }
                        }
                    } else { alert('Você excedeu o limite de 20 items !'); }
                }
            }
        }
    }

    checkAvatar(ev) {
        let file, img;
        file = ev.target.files[0];
        img = ev.target.parentNode.querySelector('img');
        img.src = URL.createObjectURL( file );
        console.log( file );
    }

}
