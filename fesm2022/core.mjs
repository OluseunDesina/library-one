import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class CoreService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CoreService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CoreService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class CoreComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CoreComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CoreComponent, isStandalone: true, selector: "lib-core", ngImport: i0, template: `
    <p>
      core works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CoreComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-core', standalone: true, imports: [], template: `
    <p>
      core works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CoreComponent, CoreService };
//# sourceMappingURL=core.mjs.map
