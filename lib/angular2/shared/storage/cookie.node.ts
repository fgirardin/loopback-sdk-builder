/* tslint:disable */
declare var Zone: any;
import { Injectable, Injector } from '@angular/core';
/**
* @author Fabien Girardin <twitter:@fabiengirardin> <github:@fgirardin>
* @module CookieNode
* @license MIT
* @description
* This module handle cookies, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
* Fixed using https://github.com/mean-expert-official/loopback-sdk-builder/issues/512#issuecomment-395931748
**/

@Injectable()
export class CookieNode {

constructor(private injector: Injector) { }
  get(key: string) {
    let cookies: { [ key: string ]: number } = this.injector.get('request').cookies;
    return cookies[ key ];
  }

  set(key: string, value: any): any {
    this.injector.get('response')
        .cookies(key, value)
        .send('Cookie is set');
  }

  remove(key: string, value: any): any {
    this.injector.get('response')
        .cookies(key, '; expires=Thu, 01 Jan 1970 00:00:01 GMT;')
        .send('Cookie is removed');
  }

}