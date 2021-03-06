/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var import0 = require('@angular/core/src/linker/debug_context');
var import1 = require('../../../../src/app-components/about/about.component');
var import3 = require('@angular/core/src/linker/view');
var import4 = require('@angular/core/src/linker/element');
var import7 = require('@angular/core/src/linker/view_type');
var import8 = require('@angular/core/src/change_detection/change_detection');
var import9 = require('../../../../src/app-components/services/appstate.service');
var import10 = require('../../../../src/app-components/services/authentication.service');
var import11 = require('@angular/router/src/router_state');
var import12 = require('@angular/core/src/metadata/view');
var import13 = require('@angular/core/src/linker/component_factory');
var nodeDebugInfos_AboutComponent_Host0 = [new import0.StaticNodeDebugInfo([import1.AboutComponent], import1.AboutComponent, {})];
var renderType_AboutComponent_Host = null;
var _View_AboutComponent_Host0 = (function (_super) {
    __extends(_View_AboutComponent_Host0, _super);
    function _View_AboutComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AboutComponent_Host0, renderType_AboutComponent_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_AboutComponent_Host0);
    }
    _View_AboutComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('about', rootSelector, this.debug(0, 0, 0));
        this._appEl_0 = new import4.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AboutComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AboutComponent_0_4 = new import1.AboutComponent(this.parentInjector.get(import9.AppState), this.parentInjector.get(import10.Authentication), this.parentInjector.get(import11.ActivatedRoute));
        this._appEl_0.initComponent(this._AboutComponent_0_4, [], compView_0);
        compView_0.create(this._AboutComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AboutComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import1.AboutComponent) && (0 === requestNodeIndex))) {
            return this._AboutComponent_0_4;
        }
        return notFoundResult;
    };
    _View_AboutComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._AboutComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            this.debug(0, 0, 0);
            if ((this.numberOfChecks === 0)) {
                this._AboutComponent_0_4.ngAfterViewInit();
            }
        }
    };
    return _View_AboutComponent_Host0;
}(import3.DebugAppView));
function viewFactory_AboutComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AboutComponent_Host === null)) {
        (renderType_AboutComponent_Host = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, [], {}));
    }
    return new _View_AboutComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.AboutComponentNgFactory = new import13.ComponentFactory('about', viewFactory_AboutComponent_Host0, import1.AboutComponent);
var styles_AboutComponent = [];
var nodeDebugInfos_AboutComponent0 = [
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {})
];
var renderType_AboutComponent = null;
var _View_AboutComponent0 = (function (_super) {
    __extends(_View_AboutComponent0, _super);
    function _View_AboutComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AboutComponent0, renderType_AboutComponent, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_AboutComponent0);
    }
    _View_AboutComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'h1', this.debug(0, 0, 0));
        this._text_1 = this.renderer.createText(this._el_0, 'Hello about page!', this.debug(1, 0, 4));
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', this.debug(2, 0, 26));
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2
        ], [], []);
        return null;
    };
    return _View_AboutComponent0;
}(import3.DebugAppView));
function viewFactory_AboutComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AboutComponent === null)) {
        (renderType_AboutComponent = viewUtils.createRenderComponentType('C:/Source/GitHub/angular2-aot-webpack2-typescript-dotnet/master/src/app-components/about/about.template.html', 0, import12.ViewEncapsulation.None, styles_AboutComponent, {}));
    }
    return new _View_AboutComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_AboutComponent0 = viewFactory_AboutComponent0;
//# sourceMappingURL=about.component.ngfactory.js.map