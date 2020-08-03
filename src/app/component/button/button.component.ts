import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'test-button',
  template: `
    <button (click)="onClick.emit($event)">{{ valueLabelButton }}</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input()
  input: string;

  @Input()
  valueLabelButton: 'ClickMe!';

  @Output()
  onClick = new EventEmitter();
}
