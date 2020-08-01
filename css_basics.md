# #css_training

This is a training file/cheatsheet for **CSS** language (a styling language for html docs).
<br><br><br><br>


## What is CSS?

**Cascading Style Sheets (CSS)** tells the browser how to display the text and other content that you write in HTML.[[1]](#1 "freecodecamp")
=

> **Note**: CSS is <mark>case-sensitive</mark> so be careful with your capitalization.[[1]](#1 "freecodecamp")

<br>

#### CSS has been adopted by all major browsers and allows you to control:[[1]](#1 "freecodecamp")
- color
- fonts
- positioning
- spacing
- sizing
- decorations
- transitions


#### There are three main ways to apply CSS styling:[[1]](#1 "freecodecamp")

- You can apply <ins>**inline styles**</ins> directly to HTML elements with the `style` attribute. 
- Alternatively, you can place CSS rules within <ins>**`style` tags**</ins> in an HTML document. 
- Finally, you can write CSS rules in an <ins>**external style sheet**</ins>, then reference that file in the HTML document. 
 
> **Note**: Even though the first two options have their use cases, most developers prefer external style sheets _because they keep the styles separate from the HTML elements. **This improves the readability and reusability of your code**_.

#### How CSS works:[[1]](#1 "freecodecamp")

The idea behind CSS is that you can use a `selector` to target an HTML element in the **DOM (Document Object Model)** and then apply a variety of attributes (`properties`) to that element to change the way it is displayed on the page.

    you'll see how adding CSS styles to the elements of your a Web App can change it from simple text to something more.
    
> **Note**: it is a good practice to end inline style declarations with a `;` .
    
<br><br>

## Learn CSS

<img width="600px" src="https://mdn.mozillademos.org/files/9461/css-declaration-small.png">
=

> **Note**: The whole structure is called a **ruleset**. (The term ruleset is often referred to as just rule.) 

<br>

####  Anatomy & syntax of CSS:[[3]](#3 "MDN")

Note the names of the individual parts:
</p>
<ul>
    <li><strong>Selector:</strong>
    This is the HTML element name at the start of the ruleset. It defines the element(s) to be styled (in this example, <code>&lt;p&gt;</code> elements). To style a different element, change the selector.</li>
    <li>
    <strong>Declaration:</strong>
    This is a single rule like <code>color: red;</code>. It specifies which of the element's properties you want to style.
    </li>
    <li><strong>Properties</strong>
    These are ways in which you can style an HTML element. (In this example, color is a property of the <code>&lt;p&gt;</code> elements.) In CSS, you choose which properties you want to affect in the rule.</li>
    <li><strong>Property value</strong>
    To the right of the property—after the colon—there is the property value. This chooses one out of many possible appearances for a given property. (For example, there are many <code>color</code> values in addition to <code>red</code>.)</li>
</ul>
<em>Note the other important parts of the syntax:</em>
<ul>
    <li>Apart from the selector, each ruleset must be wrapped in curly braces. (<code>{}</code>)</li>
    <li>Within each declaration, you must use a colon (<code>:</code>) to separate the property from its value or values.</li>
    <li>Within each ruleset, you must use a semicolon (<code>;</code>) to separate each declaration from the next one.</li>
</ul>

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

<details>
<summary><b><u>list of all properties:</u></b></summary>
<ul>

<li><b>color</b>:
    changes color of element.
</li>

<li><b>font-size</b>:
    change font-size of text.
</li>

<li><b>font-family</b>:
    change font of text.
</li>



> **Note**: there is 2 kinds of fonts: local system fonts & non-standard custom web fonts

> **Note**: `Google Fonts` is a free library of web fonts that you can use in your CSS by referencing the font's URL.

> **Note**: Family names are `case-sensitive` and need to be wrapped in quotes if there is a space in the name. For example, you need quotes to use the `"Open Sans"` font, but not to use the `Lobster` font.

<li><b>width</b>:
    controls an element's width. 
</li>

<li><b>border</b>:
    
  * creates borders around elements.
  * it has some properties (sub-propertise) :
      - `color`: obvio,
      - `width`: thickness of the border.
      - `style`: `solid`, `dotted`, `dashed` ..etc. 
      - `radius`: controls the radius of the conrners of a border (default: 0px).
          > **Note**: In addition to pixels, you can also specify the `border-radius` using a percentage.
      - 
</li>

> **Note**: you can apply multiple classes to an element using its `class` attribute, by separating each class name with a space.

</ul>
</details>





<p>

</details>

<details>
<summary><b><u>Selecting multiple elements:</u></b></summary>

You can also select multiple elements and apply a single ruleset to all of them. Separate multiple selectors by commas. For example:

```css
p, li, h1 {
     color: red;
}
```

</details>

<details>
<summary><b><u>Different types of selectors:</u></b></summary>

here are many different types of selectors. The examples above use element selectors, which select all elements of a given type. But we can make more specific selections as well. Here are some of the more common types of selectors:

<table style="width:100%" border="2">
  <tr>
    <th>Selector name</th>
    <th>What does it select	</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>Element selector (sometimes called a tag or type selector)</td>
    <td>All HTML elements of the specified type.</td>
    <td><code>p</code><br>
    selects <code>&lt;p&gt;</code></td>
  </tr>
  <tr>
    <td>ID selector</td>
    <td>The element on the page with the specified ID. On a given HTML page, each id value <strike>must</strike> <mark>should</mark> be unique.</td>
    <td><code>#my-id</code><br>
    selects <code>&lt;p id="my-id"&gt;</code> or <code>&lt;a id="my-id"&gt;</code></td>
  </tr>
  <tr>
    <td>Class selector</td>
    <td>The element(s) on the page with the specified class. Multiple instances of the same class can appear on a page.</td>
    <td><code>.my-class</code><br>
selects <code>&lt;p class="my-class"&gt;</code> and <code>&lt;a class="my-class"&gt;</code>
</td>
  </tr>
  <tr>
    <td>Attribute selector</td>
    <td>The element(s) on the page with the specified attribute.</td>
    <td><code>img[src]</code><br>
selects <code>&lt;img src="myimage.png"&gt;</code> but not <code>&lt;img&gt;</code</td>
  </tr>
  <tr>
    <td>Pseudo-class selector</td>
    <td>The specified element(s), but only when in the specified state. (For example, when a cursor hovers over a link.)</td>
    <td><code>a:hover</code><br>
selects <code>&lt;a&gt;</code>, but only when the mouse pointer is hovering over the link.</td>
  </tr>
</table>

There are many more selectors to discover. To learn more, see the [MDN Selectors guide](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors).
</details>

### Fonts & Text
<details>
<summary><b><u>Fonts and text:</u></b></summary>

There is some steps that you gotta follow in order to adjust fonts in an html doc:

<ol>
    <li>First, find the <a href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/What_should_your_web_site_be_like#Font">output from Google Fonts</a> that you previously saved from What will your website look like?. Add the <code>&lt;link&gt;</code> element somewhere inside your index.html's head (anywhere between the <code>&lt;head&gt;</code> and <code>&lt;/head&gt;</code> tags). It looks something like this:</li>

```html
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
```
This code links your page to a style sheet that loads the Open Sans font family with your webpage.    
    <li>Add the following lines (shown below). The property <code>font-family</code> refers to the font(s) you want to use for text. This rule defines a global base font and font size for the whole page. Since <code>&lt;html&gt;</code> is the parent element of the whole page, all elements inside it inherit the same <code>font-size</code> and <code>font-family</code> by default.</li>

```css
html {
  font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high  */
  font-family: "Open Sans", sans-serif; /* this should be the rest of the output you got from Google fonts */
}
```    
> <strong>Note</strong>: Anything in CSS  between <code>/*</code> and <code>*/</code> is a <srong>CSS comment</code>. The browser ignores comments as it renders the code. CSS comments are a way for you to write helpful notes about your code or logic.

<li>Now let's set font sizes for elements that will have text inside the HTML body (<code>&lt;h1&gt;</code>, <code>&lt;li<code>&gt;</code>, and &lt;p&gt;</code>). We'll also center the heading. Finally, let's expand the second ruleset (below) with settings for line height and letter spacing to make body content more readable.</li>

```css
h1 {
  font-size: 60px;
  text-align: center;
}

p, li {
  font-size: 16px;    
  line-height: 2;
  letter-spacing: 1px;
}
```
</ol>

</details>

<details>
<summary><u><b>more about fonts:</b></u></summary>

There are several default fonts that are available in all browsers. These generic font families include `monospace`, `serif` and `sans-serif`

When one font isn't available, you can tell the browser to "degrade" to another font.

For example, if you wanted an element to use the `Helvetica` font, but degrade to the `sans-serif` font when `Helvetica` isn't available, you will specify it as follows:

```css

p {
  font-family: Helvetica, sans-serif;
}
```

> **Note**: Generic font family names are not case-sensitive. Also, they do not need quotes because they are CSS keywords.

> **Note**: If you have the font installed on your computer, you won't see the degradation because your browser is able to find the font.

</details>

### CSS: all about boxes

You may have already noticed this, but all HTML elements are essentially little rectangles.[1]

Three important properties control the space that surrounds each HTML element: `padding`    , `margin`, and `border`.[1]

<details>
<summary><b><u>Boxes in CSS:</u></b></summary>
Something you'll notice about writing CSS: a lot of it is about boxes. This includes setting size, color, and position. Most HTML elements on your page can be thought of as boxes sitting on top of other boxes.

CSS layout is mostly based on the box model. Each box taking up space on your page has properties like:
<ul>
<li><code>padding</code>, the space around the content. In the example below, it is the space around the paragraph text.[]

controls the amount of space between the element's content and its `border`.[1]
</li>
<li><code>border</code>, the solid line that is just outside the padding.</li>
<li><code>margin</code>, the space around the outside of the border.[]

controls the amount of space between an element's `border` and surrounding elements.[1]

> **Note**: If you set an element's margin to a negative value, the element will grow larger.[1]

</li>
</ul>

<img src="https://mdn.mozillademos.org/files/9443/box-model.png">

In this section we also use:
<ul>
<li><code>width</code> (of an element).</li>
<li><code>background-color</code>, the color behind an element's content and padding.</li>
<li><code>color</code>, the color of an element's content (usually text).</li>
<li><code>text-shadow</code> sets a drop shadow on the text inside an element.</li>
<li><code>display</code> sets the display mode of an element. (keep reading to learn more)</li>
</ul>
</details>

<details>
<summary><b><u>Styling the body:</u></b></summary>

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #FF9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

There are several declarations for the <code>&lt;body&gt;</code> element. Let's go through these line-by-line:
<ul>
<li><code>width: 600px;</code> This forces the body to always be 600 pixels wide.</li>
<li><code>margin: 0 auto;</code> When you set two values on a property like margin or padding, the first value affects the element's top and bottom side (setting it to 0 in this case); the second value affects the left and right side. (Here, auto is a special value that divides the available horizontal space evenly between left and right). You can also use one, three, or four values, as documented in <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin#Syntax">Margin Syntax</a>.</li>
<li><code>background-color: #FF9500;</code> This sets the element's background color. This project uses a reddish orange for the body background color, as opposed to dark blue for the <html> element. (Feel free to experiment.)</li>
<li><code>padding: 0 20px 20px 20px;</code> This sets four values for padding. The goal is to put  some space around the content. In this example, there is no padding on the top of the body, and 20 pixels on the right, bottom and left. The values set top, right, bottom, left, in that order. As with margin, you can use one, two, three, or four values, as documented in <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding#Syntax">Padding Syntax</a>.</li>
<li><code>border: 5px solid black;</code> This sets values for the width, style and color of the border. In this case, it's a five-pixel–wide, solid black border, on all sides of the body.</li>

</ul>
</details>

<details>
<summary><b><u>Positioning and styling the main page title:</u></b></summary>

```css
h1 {
  margin: 0;
  padding: 20px 0;    
  color: #00539F;
  text-shadow: 3px 3px 1px black;
}
```

You may have noticed there's a horrible gap at the top of the body. That happens because browsers apply default styling to the <code>&lt;h1&gt;</code> element (among others). That might seem like a bad idea, but the intent is to provide basic readability for unstyled pages. To eliminate the gap, we overwrite the browser's default styling with the setting <code>margin: 0;</code>.

Next, we set the heading's top and bottom padding to 20 pixels.

Following that, we set the heading text to be the same color as the HTML background color.

Finally, text-shadow applies a shadow to the text content of the element. Its four values are:

<ul>
<li>The first pixel value sets the <strong>horizontal offset</strong> of the shadow from the text: how far it moves across.</li>
<li>The second pixel value sets the vertical offset of the shadow from the text: how far it moves down.</li>
<li>The third pixel value sets the blur radius of the shadow. A larger value produces a more fuzzy-looking shadow.</li>
<li>The fourth value sets the base color of the shadow.</li>
</ul>

Try experimenting with different values to see how it changes the appearance.


</details>

<details>
<summary><b><u>Centering the image:</u></b></summary>

```css
img {
  display: block;
  margin: 0 auto;
}
```

Next, we center the image to make it look better. We could use the margin: 0 auto trick again as we did for the body. But there are differences that require an additional setting to make the CSS work.

The &lt;body&gt; is a block element, meaning it takes up space on the page. A block element can have margin and other spacing values applied to it. In contrast, images are inline elements. It is not possible to apply margin or spacing values to inline elements. So to apply margins to the image, we must give the image block-level behavior using display: block;.

> Note: The instructions above assume that you're using an image smaller than the width set on the body. (600 pixels) If your image is larger, it will overflow the body, spilling into the rest of the page. To fix this, you can either: 1) reduce the image width using a graphics editor, or 2)  use CSS to size the image by setting the width property on the <img> element with a smaller value.

> Note: Don't be too concerned if you don't completely understand display: block; or the differences between a block element and an inline element. It will make more sense as you continue your study of CSS. You can find more information about different display values on [MDN's display reference page](https://developer.mozilla.org/en-US/docs/Web/CSS/display).

In this exercise, we have just scratched the surface of CSS. To go further, see [Learning to style HTML using CSS](https://developer.mozilla.org/en-US/Learn/CSS).

</details>

<details>
<summary><b><u>CSS Template:</u></b></summary>

```css
body {
    /* margin-padding-border */
    /* width-height */
    /* font-text */
    /* color-background */
}
```
</details>

<details>
<summary><b><u>CSS properties generally fall into one of two categories:</u></b></summary>

- <strong>Presentation</strong>: How to control things like the color of text, the fonts you want to use and the size of those fonts, how to add background colors to pages (or parts of a page), and how to add background images.<span>[2]</span>

- <strong>Layout</strong>: How to control <u>where</u> the different elements are positioned on the screen. There are several techniques that professionals use to make their pages more attractive.<span>[2]</span>
</details>

### Test Yourself

<ul>
  <li>What are selectors?</li>
  <li>What are properties?</li>
  <li>What are values?</li>
  <li>What is the “query string” in a URL and what does it do?</li>
  <li>What is the difference between “pixels” and “ems”?</li>
  <li>How do CSS styles for a particular element get inherited?  i.e. how does an element get its “default” styles?</li>
  <li>What are two CSS attributes you can change to push an element around on the page?</li>
  <li>What are the three different ways to include CSS in your project or use CSS to style a particular element?</li>
  <li>What is the “default stylesheet” or “user agent stylesheet”?</li>
  <li>Why use a CSS reset file?</li>
</ul>

<span id="sdsd">hi</span>

## Refrences

- <span id="0">[0]</span> [my own understanding of the subject](https://mrramoun.github.io "[0] can be used or removed -> blank by default").

- <span id="1">[1]</span> [freecodecamp](https://freecodecamp.org "website").

- <span id="2">[2]</span> [Duckett, Jon, HTML and CSS Design and Build Websites, 2011, John Wiley & Sons](http://www.htmlandcssbook.com/ "book").

- <span id="3">[3]</span> [MDN Refrences](https://developer.mozilla.org/en-US/docs/web "website").

<!-- 

[3] Web Dev Simplified, Youtube Channel, https://www.youtube.com/watch?v=fNcJuPIZ2WE&t=52s
-->
