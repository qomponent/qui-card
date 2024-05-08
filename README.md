# qui-card

Card UI component


## Installation

```bash
npm i @qomponent/qui-card
```

## Usage

```javascript
import '@qomponent/qui-card';
```

```html
<div class="cards">
    <qui-card header="Small">
        <div slot="content">
            <div class="cardcontents">
                <span>Hello</span>
            </div>
        </div>
    </qui-card> 
```

### Header

Basic string header can be provided with the `header` attribute, example:

```html
<qui-card header = "Here the header">
    
</qui-card>
```

More complex header can be provided with the `header` slot, example:

```html
<qui-card>
    <div slot="header">
        <span>Here the header</span>
    </div>
</qui-card>
```

### Footer

Basic string footer can be provided with the `footer` attribute, example:

```html
<qui-card footer = "Here the header">
    
</qui-card>
```

More complex footer can be provided with the `footer` slot, example:

```html
<qui-card>
    <div slot="footer">
        <span>Here the footer</span>
    </div>
</qui-card>
```


## Example

To run the example:

```bash
npm install
npm start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[Apache 2](http://www.apache.org/licenses/LICENSE-2.0)