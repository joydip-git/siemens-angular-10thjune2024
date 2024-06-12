import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ResultRepository } from '../repository/result-repo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnDestroy, OnChanges, OnInit {
  private sub: Subscription | undefined;
  @Input() resultValue = 0
  resultText = ''
  constructor(private _repo: ResultRepository) {
    console.log('result component created');
  }
  ngOnInit(): void {
    console.log('on init');
    //this.resultText = 'Result: ' + this.resultValue
    this.sub = this._repo
      .storageAccessor
      .subscribe({
        next: (result) => {
          this.resultText = 'Result: ' + result
        },
        error: (err) => {
          this.resultText = err.message
        },
        complete: () => { }
      })
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log('changes event');
    //this.resultText = 'Result: ' + this.resultValue
  }

  ngOnDestroy(): void {
    console.log('result component destroyed');
    this.sub?.unsubscribe()
  }
}
