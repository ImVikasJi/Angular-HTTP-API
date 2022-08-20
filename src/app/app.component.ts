import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-HTTP-API';

  constructor() {
    type HttpResponse = { code: number; data: string };

    const observable = new Observable<HttpResponse>((subscriber) => {
      console.log('*******************Inside subscriber****************');
      console.log("This ran second");        

      subscriber.next({ code: 200, data: 'this is data 1.........' });
      subscriber.next({ code: 200, data: 'this is data 2.........' });
      subscriber.next({ code: 200, data: 'this is data 3.........' });
      subscriber.error({ code: 500, msg: 'An error occurred' });
      setTimeout(() => {
        subscriber.next({ code: 200, data: 'this is data more data...' });
        subscriber.complete();
      }, 3 * 1000);

      console.log('subscribe is done emitting.......');
    });

    observable.subscribe({                    
      next(response: HttpResponse) {
        console.log("This ran first");        
        console.log('got Response: ', response);
      },
      error(error: any) {
        console.error('something wrong occurred: ', error);
      },
      complete() {
        console.log('done');        
      },
    });
  }
}
