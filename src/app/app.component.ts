import {Component, OnInit} from '@angular/core';
import {UniqueId} from './core/shared/domain/uniqueId';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'apiumware';


  ngOnInit(): void {
    const a = UniqueId.new('aeo');
  }

}
