import { ErrorHandler, Injectable, Injector } from '@angular/core';


export class AppErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    alert('un Expected Error');
    console.log(error);
  }


}
