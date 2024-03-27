import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Context {
    mainTitle: string;
}
export const emptyContext = { mainTitle: '' } as Context;

@Injectable({ providedIn: 'root' })
export class NavService {

    private context: BehaviorSubject<Context>;
    private value: Context;

    constructor() {
        this.value = emptyContext;
        this.context = new BehaviorSubject<Context>(this.value);
    }

    /**
     * Sets the full context
     * @param context object with all details.
     */
    public setContext(context: Context) {
        if (context) {
            this.context.next(context);
        }
    }
    public getContext() {
        return this.context;
    }

    public updateContextForPage1(mainTitle: string) {
        this.value.mainTitle = mainTitle;
        this.context.next(this.value); // announce the update
    }

}
