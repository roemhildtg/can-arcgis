/*can-arcgis@1.0.0#components/edit-feature-widget/template.stache!steal-stache@3.1.3#steal-stache*/
define('can-arcgis@1.0.0#components/edit-feature-widget/template.stache!steal-stache@3.1.3#steal-stache', [
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@3.2.5#can-view-import',
    'can-stache-bindings@3.11.2#can-stache-bindings'
], function (module, stache, mustacheCore) {
    var renderer = stache('components/edit-feature-widget/template.stache', [
        {
            'tokenType': 'special',
            'args': [
                '#if editLayer',
                1
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n\r\n    ',
                1
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'ul',
                false,
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'menu',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                3
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'ul',
                false,
                3
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n        ',
                3
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'li',
                false,
                4
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                4
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'menu-item',
                4
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                4
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                4
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'deactivate()',
                4
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                4
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'li',
                false,
                4
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n            ',
                4
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false,
                5
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false,
                5
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'i',
                false,
                5
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                5
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'esri-icon-left',
                5
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                5
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'i',
                false,
                5
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'i',
                5
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' Back',
                5
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'a',
                5
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n        ',
                5
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'li',
                6
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n    ',
                6
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'ul',
                7
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n    ',
                7
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'br',
                true,
                8
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'br',
                true,
                8
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n        \r\n    ',
                8
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'p',
                false,
                10
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                10
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'text-bold',
                10
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                10
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'p',
                false,
                10
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                'Create ',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'editLayer.title',
                10
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ':',
                10
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'p',
                10
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n\r\n    \r\n    ',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if(graphicsLayer.graphics.items.length)',
                13
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n        ',
                13
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'form-widget',
                true,
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'is:u:saving:bind',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'isSaving',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'is:u:saving:bind',
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:submit',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'submitForm',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:submit',
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:cancel',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'cancelForm',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:cancel',
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'fields:from',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'editFields',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'fields:from',
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'form:u:object:from',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'editGraphic',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'form:u:object:from',
                14
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'form-widget',
                true,
                19
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n    ',
                19
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                20
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n        ',
                20
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'draw-widget',
                true,
                21
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'geometries:from',
                21
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'editLayer.geometryType',
                21
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'geometries:from',
                21
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'view:from',
                21
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'view',
                21
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'view:from',
                21
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'graphics:u:layer:bind',
                21
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'graphicsLayer',
                21
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'graphics:u:layer:bind',
                21
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'allow:u:continuous:from',
                21
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'false',
                21
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'allow:u:continuous:from',
                21
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'draw-widget',
                true,
                24
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n    ',
                24
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                25
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n\r\n',
                25
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                27
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n    ',
                27
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'ul',
                false,
                28
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                28
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'menu',
                28
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                28
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'ul',
                false,
                28
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n        ',
                28
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#each(view.map.layers.items, layer=value)',
                29
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n            ',
                29
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if layer.capabilities.editing.supportsGeometryUpdate',
                30
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n            ',
                30
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'li',
                false,
                31
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                31
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'menu-item',
                31
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                31
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                31
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'activate(layer)',
                31
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                31
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'li',
                false,
                31
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n                ',
                31
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                32
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                32
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'tile tile-centered',
                32
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                32
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                32
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n                ',
                32
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                33
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                33
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'tile-icon',
                33
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                33
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                33
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n                    ',
                33
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                34
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                34
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'example-tile-icon',
                34
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                34
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                34
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n                    ',
                34
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'i',
                false,
                35
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                35
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'esri-icon-',
                35
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#eq(layer.geometryType, \'point\')',
                35
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'map-pin',
                35
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                35
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'layer.geometryType',
                35
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/eq',
                35
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                35
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'i',
                false,
                35
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'i',
                35
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n                    ',
                35
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                36
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n                ',
                36
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                37
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n                ',
                37
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'tile-content',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                38
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                38
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n                    ',
                38
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                39
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                39
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'tile-title',
                39
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                39
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                39
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'layer.title',
                39
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                39
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n                ',
                39
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                40
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n                ',
                40
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                41
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'tile-action',
                41
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                41
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                41
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n                    ',
                41
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'button',
                false,
                42
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                42
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'btn btn-link',
                42
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                42
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'button',
                false,
                42
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n                    ',
                42
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'i',
                false,
                43
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'esri-icon-right',
                43
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                43
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'i',
                false,
                43
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'i',
                43
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n                    ',
                43
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'button',
                44
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n                ',
                44
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                45
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n                ',
                45
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                46
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n            ',
                46
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'li',
                47
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n            ',
                47
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                48
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n        ',
                48
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/each',
                49
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n    ',
                49
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'ul',
                50
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\r\n',
                50
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                51
            ]
        },
        {
            'tokenType': 'done',
            'args': [51]
        }
    ]);
    return function (scope, options, nodeList) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions), nodeList);
    };
});
/*can-arcgis@1.0.0#components/edit-feature-widget/ViewModel*/
define('can-arcgis@1.0.0#components/edit-feature-widget/ViewModel', [
    'exports',
    '../edit-attribute-dialog/ViewModel'
], function (exports, _ViewModel) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _ViewModel2 = _interopRequireDefault(_ViewModel);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _ViewModel2.default.extend('EditFeatureWidget', {
        editMode: { value: 'add' },
        view: {},
        editLayer: {},
        editGraphic: {
            get: function get() {
                if (this.graphicsLayer && this.graphicsLayer.graphics.length) {
                    var g = this.graphicsLayer.graphics.items[0];
                    g.attributes = {};
                    this.view.graphics.add(g);
                    return g;
                }
                return {};
            }
        },
        graphicsLayer: {},
        clearGraphics: function clearGraphics() {
            this.view.graphics.remove(this.editGraphic);
            this.graphicsLayer.graphics.removeAll();
        },
        activate: function activate(layer) {
            this.editLayer = layer;
        },
        deactivate: function deactivate() {
            this.clearGraphics();
            this.editLayer = null;
            return false;
        },
        submitForm: function submitForm() {
            var _this = this;
            _ViewModel2.default.prototype.submitForm.apply(this, arguments).then(function () {
                _this.clearGraphics();
            });
        },
        cancelForm: function cancelForm() {
            _ViewModel2.default.prototype.cancelForm.apply(this, arguments);
            this.clearGraphics();
        }
    });
});
/*can-arcgis@1.0.0#components/edit-feature-widget/edit-feature-widget*/
define('can-arcgis@1.0.0#components/edit-feature-widget/edit-feature-widget', [
    'exports',
    'can-component',
    './template.stache',
    './ViewModel',
    './styles.less',
    '../draw-widget/draw-widget',
    'can-admin/components/form-widget/form-widget',
    'can-admin/components/form-widget/field-components/text-field/text-field',
    'can-admin/components/form-widget/field-components/select-field/select-field',
    'jquery',
    'jquery-ui',
    'jquery-ui/ui/widgets/datepicker',
    'jquery-ui/themes/base/core.css',
    'jquery-ui/themes/base/theme.css',
    'jquery-ui/themes/base/datepicker.css'
], function (exports, _canComponent, _template, _ViewModel) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _canComponent2 = _interopRequireDefault(_canComponent);
    var _template2 = _interopRequireDefault(_template);
    var _ViewModel2 = _interopRequireDefault(_ViewModel);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _canComponent2.default.extend({
        tag: 'edit-feature-widget',
        ViewModel: _ViewModel2.default,
        view: _template2.default
    });
});
/*can-arcgis@1.0.0#config/edit-features/edit-features*/
define('can-arcgis@1.0.0#config/edit-features/edit-features', [
    'exports',
    'can-stache',
    '../../components/edit-feature-widget/edit-feature-widget'
], function (exports, _canStache) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _canStache2 = _interopRequireDefault(_canStache);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = {
        debug: true,
        viewOptions: {
            center: [
                -93.28697204589844,
                44.294471740722656
            ],
            zoom: 12
        },
        mapOptions: {
            basemap: 'gray',
            layers: [
                {
                    type: 'feature',
                    options: { url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Military/FeatureServer/6' }
                },
                {
                    type: 'feature',
                    options: { url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Military/FeatureServer/8' }
                },
                {
                    type: 'feature',
                    options: { url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Military/FeatureServer/9' }
                },
                {
                    type: 'feature',
                    options: {
                        url: 'https://services1.arcgis.com/6bXbLtkf4y11TosO/arcgis/rest/services/Restaurants/FeatureServer/0',
                        id: 'workorders',
                        outFields: ['*']
                    }
                }
            ]
        },
        widgets: [{
                parent: 'view',
                position: 'top-right',
                type: 'renderer',
                renderer: (0, _canStache2.default)('<edit-feature-widget \n            style="width: 300px;max-height:500px;background:#fff;padding:10px;display:block;overflow:auto;" \n            view:from="view" />'),
                options: {}
            }]
    };
});