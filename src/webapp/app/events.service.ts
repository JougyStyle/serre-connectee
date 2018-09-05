import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private messageSubject = new Subject();
  messageObs = this.messageSubject.asObservable();

  constructor() { }

  emit(channel: string, payload?: any) {
    console.log('emit', channel, payload);
    this.messageSubject.next({ channel, payload })
  }
}
