# can-arcgis-map

[![Join the chat at https://gitter.im/can-arcgis/Lobby](https://badges.gitter.im/can-arcgis/Lobby.svg)](https://gitter.im/can-arcgis/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A configureable mapping app bundled with StealJS. Designed for configurability, and modularity. A work in progress. Inspired by [cmv-app](https://github.com/cmv/cmv-app)

![screenshot](docs/images/zoom.gif)

## Why can-arcgis?

I've worked with cmv, web app builder, and several other web map templates. Each has their advantages and cons. While can-arcgis requires some knowledge of javascript, it focuses on development, flexibility, and performance. 
 - **Easy**: First and formost, adding an app to can-arcgis with layers, widgets, and map views should be easy and require only a minimal understanding of how the can-arcgis and the ArcGIS Javascript API works (what is my latitude and longitude, and what are my layer urls?) While Javascript knowledge is recommended, it is not required for creating a simple interactive application. Reading the documentation and following the steps should easily result in a successful application to deploy. 
 - **Development:** can-arcgis uses some of the newest and best web technology. ES6, (or alternatively regular old ES5) can be used to write widgets and configs. 
 - **Flexibility:** Custom dependencies like css and javascript can be easily installed and imported using only NPM or the package manager of your choice. Steal automatically loads modules from your package.json. Because of this, its very easy to utilize existing code and integrate third party frameworks. 
 - **Performance:** Applications are built into separate modular config bundles with almost zero config. In addition, packages that are shared between configs are not built twice, instead they are automatically built into a shared file that will automatically be generated by steal-tools and loaded by a production version of steal.

## Features

 - Configure multiple apps using a simple JSON like syntax 
 - Utilize existing Esri API widgets, layers, and map views
 - Easily compact, progressivly loaded bundles with `steal-tools`
 - Add functionality by creating widgets built using CanJS Components and `stache` (mustache like) templating language
 - Extend the application using builtin and custom [hooks](#hooks) in ES6 or commonjs format

## Demos 
 - [Basic example](https://roemhildtg.github.io/can-arcgis/index-prod.html#!viewer) | [viewer.js](./config/viewer/viewer.js)
 - [Using Esri and CanJS widgets](https://roemhildtg.github.io/can-arcgis/index-prod.html#!widgets) | [widgets.js](./config/widgets/widgets.js)
 - [Using 3d Webmap](https://roemhildtg.github.io/can-arcgis/index-prod.html#!scene) | [scene.js](./config/scene/scene.js)
 - [Using custom basemap](https://roemhildtg.github.io/can-arcgis/index-prod.html#!basemap) | [basemap.js](./config/basemap/basemap.js)
 - [Using group layers](https://roemhildtg.github.io/can-arcgis/index-prod.html#!group) | [group.js](./config/group/group.js)
 - [Selecting features (select/query widget)](https://roemhildtg.github.io/can-arcgis/index-prod.html#!select) | [select.js](./config/select/select.js)
 - [Identify other layers (Identify widget - map image layers)](https://roemhildtg.github.io/can-arcgis/index-prod.html#!map-image) | [map-image.js](./config/map-image/map-image.js)
 - [Access Widgets using onCreate (LayerList - item actions)](https://roemhildtg.github.io/can-arcgis/index-prod.html#!layerlist-actions) | [layerlist-actions.js](./config/layerlist-actions/layerlist-actions.js)
 - [Edit and Create Features](https://roemhildtg.github.io/can-arcgis/index-prod.html#!edit-features) | [edit-features.js](./config/edit-features/edit-features.js)
 - [Using esri modules in options (optionsPromise)](https://roemhildtg.github.io/can-arcgis/index-prod.html#!options-promise) | [options-promise.js](./config/options-promise/options-promise.js)

## Quick Start

### Install

Install [NodeJS](https://nodejs.org/en/) and [Git](https://git-scm.com/download/), then in a command prompt type:

```
git clone https://github.com/this/repo.git
cd repo
npm install 
```

### Customize

Configs are loaded dynamically based on the current hash/route. By default, configs are stored in the config folder. Each config should be placed
in its own folder, and related files can be placed next to that file. Each config gets its own url: `https://roemhildtg.github.io/can-arcgis/index-prod.html#!scene`. For example, you can link to other configs within the app just by specifying its hash: 

```html
<a href="#!viewer">Viewer App</a>
```

This will navigate the user to the config file in `config/viewer/viewer.js`.

Customize a config file in the config folder. The syntax is a jsonlike 
structure that gets passed to esri's api constructors. 

Each config module exports a default object.

```javascript
export default {

};
```

Within this object are the configuration parameters for widgets, layers, and map views. 

#### `mapOptions`

Options passed to the map constructor. These options are documented in the [esri/Map api](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html).

```javascript
mapOptions: {
    layers: [] // layer config
}
```

##### `layers`

A simplified json structure for creating esri layer objects. This should
be inside the `mapOptions` object. 

```javascript
    layers: [{
            // path to feature layer class
            path: 'esri/layers/FeatureLayer',

            // options to pass to constructor
            options: {
                url: '/arcgis/rest/services/servicename/MapServer/132',
                id: 'workorders',
                outFields: ['*'],
                popupTemplate: {
                    // popup template
                    }
                }
            }
        }]]
```

#### `viewOptions` 

Options to be passed to the map view constructor.These options are documented in the [esri/views/View api](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html)

```javascript
viewOptions: {
    center: [-93.28697204589844, 44.294471740722656],
    zoom: 12
}
```

#### `widgets`

Array of widget config objects to be passed to the esri-map. 
These widgets are basic json structures that represent the types
and parameters for widgets that the esri-map component should create. 

These configs tell the esri-map how to find, load, and create widgets. 

Additional widget types may be created by modifying teh esri-map/widgets files. 

```javascript
widgets: [{

    // type of widget
    // 'esri', 'renderer', or none
    type: 'esri', 
    
    // parent type 
    // options include 'expand', 'view', or 'invisible'
    parent: 'view', 

    // path to widget class
    path: 'dijit/layout/ContentPane', 

    // position to place widget in (if type is view)
    position: 'top-right',

    onCreate(widget){
        // customize widget or events after the widget 
        // gets created here
    },

    // widget constructor options
    options: {
        content: 'Hello!'
    }
}]
```

Each config can include these properties or import them from other modules.
 For instance, you could have one file `widgets.js` that looks like this:

```javascript
export default [{
    // widget config
}]
```

and you can import that into your config by adding an import line to the top

```javascript
import myWidgets from './widgets';

export default {
    // other config props
    widgets: myWidgets
};
```

For options that require esri modules, you'll need to use the esriPromise 
library along with the `optionsPromise` property. This allows you to resolve
your options with a promise, rather than passing them in. 

Example: configuring a BasemapToggle widget with `optionsPromise`:

```javascript
// viewer.js config file
import {loadModules} from 'esri-loader';

export default {
    // ...
    // other config properties
    // ...
    widgets: [{
    path: 'esri/widgets/BasemapToggle',
    parent: 'view',
    type: 'esri',
    position: 'top-left',
    iconClass: 'esri-icon-basemap',
    getOptions(){
        return loadModules([
            'esri/Basemap', 
            'esri/layers/TileLayer',
            'esri/layers/MapImageLayer'
        ]).then(([Basemap, TileLayer, MapImageLayer]) => {
            const base = new Basemap({
                thumbnailUrl: 'https://js.arcgis.com/4.5/esri/images/basemap/hybrid.jpg',
                id: 'aerial',
                baseLayers: [new TileLayer({
                    url: `${url}/basemaps/imagery_2016/MapServer`
                })],
                referenceLayers: [new MapImageLayer({
                    url: `${url}/basemaps/gray_labels/MapServer`
                })]
            });
            return {
                nextBasemap: base
            };
        });
    }
},
}
```

### Test

Open `index-dev.html` in a web server to get a live preview of the app. 
If you need a development web server, 
```
npm i -g live-server
live-server
```
 will start up a development server. 

### Build 

Before building, make sure you have added all of your config files as bundles to the `package.json` file. Specify your bundles in the `steal.bundles` array
like `"can-arcgis/config/viewer/viewer"`.

Each bundle will be scanned for dependencies using `steal-tools` and 
steal will automatically optimize the files into progressivly 
loaded bundles.

To build the application use the npm script `build`. 

```
npm run build
```

Now you can copy the output `dist` folder and `index.html` to production.

## Hooks 

Hooks are available to customize the core of this app. Hooks may be added or removed via the 
`app/hooks.js` config file.

Hooks are simple modules that export an object with one or more 
of the following methods. All methods accept a parameter based on the hook, and should return a promise that resolves to the same parameter. This ensures each hook is run sequentially, even if they are async. 

## Application Lifecycle

The application lifecycle begins when the app is constructed using `new App()`.
Each method is called in order and the cycle repeats every time the `app.configName` 
changes. This is to ensure the config is reloaded and the map and widgets are 
created correctly.

### `init`: 

Called immediately with the `AppViewModel`.

### `preConfig`:

Called with the `config` that was loaded, but not yet set on the app. Useful for modifying the config before the map begins loading. 

### `postConfig`:

Called after config is set with the `AppViewModel`. 

### `postView`:

The final stage to the application loading process. A perfect time 
to initialize widgets on the view, change map layers, or any other 
runtime stuff on the view. Called with the `AppViewModel`

## FAQ

**Why stealjs?**

Steal provides a minimal effort configuration for your app to get started developing and generate distributable bundles. 

**Are dojo modules bundled?**

At this time, dojo modules are loaded from the Esri CDN. 
