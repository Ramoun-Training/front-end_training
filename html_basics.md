# HTML Basics

<h3><strong>Elements</strong></h3>

In Html, Elements can contain either text or other elements (nested).

E.G:

```html
<body> 
    some text
    <p>other element</p>
</body>    
```    
<!-- side note: think of inline-text as an element that is controlled using parent elements. -->

> **Note**: <code>h1</code> element tells the browser about the structure of your website. <code>h1</code> elements are often used for main headings, while <code>h2</code> elements are generally used for subheadings.<span>[1]</span>

> <strong>Note: </strong>Web developers traditionally use lorem ipsum text as placeholder text. The lorem ipsum text is randomly scraped from a famous passage by Cicero of Ancient Rome. For more about lorem ipsum visist <a href="https://en.lipsum.com/"> <code> >>-></code></a>.<span>[1]</span>


<details>
<summary><u>Images:</u></summary>

```html
<img src="images/firefox-icon.png" alt="My test image">
```
<p>
It embeds an image into our page in the position it appears. It does this via the <code>src</code> (source) attribute, which contains the path to our image file.
</p>

<p>
We have also included an <code>alt</code> (alternative) attribute. In this attribute, you specify descriptive text for users who cannot see the image, possibly because of the following reasons:

1. They are visually impaired. Users with significant visual impairments often use tools called screen readers to read out the alt text to them.

2. Something has gone wrong causing the image not to display. For example, try deliberately changing the path inside your <code>src</code> attribute to make it incorrect. If you save and reload the page, you should see something like this in place of the image:


> <strong>Note: </strong>The keywords for alt text are "descriptive text". The alt text you write should provide the reader with enough information to have a good idea of what the image conveys. In this example, our current text of "My test image" is no good at all. A much better alternative for our Firefox logo would be "The Firefox logo: a flaming fox surrounding the Earth."

> **Note**: All <code>img</code> elements <strong>must</strong> have an <code>alt</code> attribute. The text inside an <code>alt</code> attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.

> **Note**: If the image is purely decorative (using an image as a graphic element for the design of the web page), using an empty alt attribute is a best practice.

> **Note**: Ideally the <code>alt</code> attribute should not contain special characters unless needed.

Find out more about accessibility in our [accessibility learning module.](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
</p>

</details>

<details>
<summary><u>Marking up text:</u></summary>

<h2>Headings</h2>
    <p>
    Heading elements allow you to specify that certain parts of your content are headings — or subheadings. In the same way that a book has the main title, chapter titles and subtitles, an HTML document can too. HTML contains 6 heading levels, <code>&lt;h1&gt;–&lt;h6&gt;</code>, although you'll commonly only use 3 to 4 at most.
    </p>



> <strong>Note: </strong>You'll see that your heading level 1 has an implicit style. Don't use heading elements to make text bigger or bold, because they are used for [accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#Text_content) and other reasons such as [SEO](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Why_do_we_need_structure). Try to create a meaningful sequence of headings on your pages, without skipping levels.

<h2>Paragraphs</h2>
    <p>
    As explained above, <code>&lt;p&gt;</code> elements are for containing paragraphs of text; you'll use these frequently when marking up regular text content.
    </p>

<h2>Lists</h2>
    <p>A lot of the web's content is lists and HTML has special elements for these. Marking up lists always consist of at least 2 elements. The most common list types are ordered and unordered lists:</p>
    <ul>
    <li><strong>Unordered lists</strong> are for lists where the order of the items doesn't matter, such as a shopping list. These are wrapped in a <code>&lt;ul&gt;</code> element.</li>
    <li><strong>Ordered lists</strong> are for lists where the order of the items does matter, such as a recipe. These are wrapped in an <code>&lt;ol&gt;</code> element.</li>
    </ul>
    <p>Each item inside the lists is put inside an <code>&lt;li&gt;</code> (list item) element.</p>    
    <p>For example, if we wanted to turn the part of the following paragraph fragment into a list:</p>   

    <p>At Mozilla, we’re a global community of technologists, thinkers, and builders working together ... </p>

    We could modify the markup to this:

    ```html
        <p>At Mozilla, we’re a global community of</p>
    
        <ul> 
            <li>technologists</li>
            <li>thinkers</li>
            <li>builders</li>
        </ul>

        <p>working together ... </p>
    ```

</details>

<details>
<summary><u>Links:</u></summary>

<p>
Links are very important — they are what makes the web a web! To add a link, we need to use a simple element — <code>&lt;a&gt;</code> — "a" being the short form for "anchor". To make text within your paragraph into a link, follow these steps:
</p>
    <ul>
    <li>Choose some text. We chose the text "Mozilla Manifesto".</li>
    <li>Wrap the text in an <code>&lt;a&gt;</code> element, as shown below:
    
```html
<a>Mozilla Manifesto</a>
```
</li>  
    <li>Give the <code>&lt;a&gt;</code> element an href attribute, as shown below:

```html
<a href="">Mozilla Manifesto</a>
```    
</li>
    <li>Fill in the value of this attribute with the web address that you want the link to link to:

```html
<a href="https://www.mozilla.org/en-US/about/manifesto/">Mozilla Manifesto</a>
```    
</li>
</ul>

> <strong>Note:</strong> You might get unexpected results if you omit the <code>https://</code> or <code>http://</code> part, called the protocol, at the beginning of the web address. After making a link, click it to make sure it is sending you where you wanted it to.</p>

> <strong>Note:</strong> <code>href</code> might appear like a rather obscure choice for an attribute name at first. If you are having trouble remembering it, remember that it stands for <em><strong>h</strong>ypertext <strong>ref</strong>erence</em>.


</details>

<details>
  <summary><u>More Elements</u></summary>
    <p>HTML5 introduces more descriptive HTML tags. These include <code>main</code>, <code>header</code>, <code>footer</code>, <code>nav</code>, <code>video</code>, <code>article</code>, <code>section</code> and others.</p>
    <ul>
        <h4><strong><u> - <code>main</code> tag</u></strong>:</h4>
        <ul>
            <p>The <code>main</code> HTML5 tag helps search engines and other developers find the main content of your page.</p>                    
        </ul>
        <h4><strong><u> - Link to Internal Sections of a Page with Anchor Elements</u></strong>:</h4>
        <ul>
            <p>The <code>a</code> (anchor) elements can also be used to create internal links to jump to different sections within a webpage.<span>[1]</span></p>           
            <p>

```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```
When users click the Contacts link, they'll be taken to the section of the webpage with the Contacts header element.
> **Note**: IDs should be unique, But if there are 2 or more elements with the same ID, and that ID is used to create an internal link, the first element in the flow of the page will be choosen to jump to (the destination).<span>[0]</span>
</p>         
        </ul>
    </ul>
</details> 


### Html in 3 words

- Markup <code>--></code> marks up content (helps in seo and other stuff like styling, controling the order of elements ...etc)
- Structure <code>--></code> builds the structure of a web page
- Text <code>--></code> text embeded in an html page

### Test Yourself

<!-- info in here represent my current knowledge about the topic before learning anything new -->

<details>
  <summary>Why HTML was named HTML?</summary>
    <ul><ul>
        <li>The HyperText part of HTML comes from the early days of the web and its original use case. Pages usually contained static documents that contained references to other documents. These references contained hypertext links used by the browser to navigate to the reference document so the user could read the reference document without having to manually search for it.<span>[1]<span</li>        
    </ul></ul>
</details>

<details>
  <summary>Why comments are very useful?</summary>
    <ul><ul>
        <li>Commenting is a way that you can leave comments for other developers within your code without affecting the resulting output that is displayed to the end user.<span>[1]</span></li>
        <li>Commenting is also a convenient way to make code inactive without having to delete it entirely.<span>[1]</span></li>
    </ul></ul>
</details>

<details>
    <summary>Why use Html5 new tags?</summary>
        <ul><ul>
            <li>These tags give a descriptive structure to your HTML, make your HTML easier to read (readability), and help with Search Engine Optimization (SEO) and accessibility.</li>
        </ul></ul>
</details>

<details>
  <summary>Why do we separate HTML and CSS?</summary>
    <ul><ul>
        <li>apply one style (from one style sheet) to multiple html docs.</li>
        <li></li>
    </ul></ul>
</details>  

<details>
  <summary>What are classes and IDs (and how are they different)?</summary>
    <ul><ul>
        <li><strong>Classes</strong>: are attributes of elements that allows grouping of bunch of elements so that it becomes easier to style or manipulate them [i.e: multiple elements can have the same class].</li>
        <li><strong>IDs</strong>: are attributes of elements that allows distinguishing a specific element [i.e: multiple elements shouldn't have the same id, because ids should be unique].<span>[0]</span> An <code>id</code> is an attribute that uniquely describes an element.<span>[1]</span></li>
    </ul></ul>
</details>  

<details>
  <summary>What are elements?</summary>
    <ul><ul>
        <li>Elements are the building block of any html document.</li>        
        <li>Elements usually have opening and closing tags that surround and give meaning to content (used to markup content of the page).</li>
        <li>Example: there are different tag options to place around text to show whether it is a heading, a paragraph, or a list.<span>[1]</span></li>
    </ul></ul>
</details> 

<details>
  <summary>What are tags?</summary>
    <ul><ul>
        <li>tags is a way of marking up content of an html document.</li>        
        <li>using an opening tag and a closing tag to tell the browser that some text of the document is a heading or a paragraph.</li>
        <li>Example:

```html
<openingTag>content</closingtag>
```
</li>    
    </ul></ul>
</details>

<details>
  <summary>What are attributes?</summary>
    <ul><ul>        
        <li>Attributes are like properties of an html element</li>
        <li>Attributes can be used to alter the content of an html element by applying styles and other properties to the content.</li>
        <li>Example:

```html
<openingTag attribute="value">content</closingtag>
```
</li>    
    </ul></ul>
</details> 

<details>
  <summary>What are forms?</summary>
    <ul><ul>        
        <li>Forms are html elements that can contain some textboxes, submit buttons, checkboxes and other stuff.</li>
        <li>Forms are used for sign up and log in pages.</li>
    </ul></ul>
</details>

<details>
  <summary>What is a div?</summary>
    <ul><ul>        
        <li>Div: is a block level element that can contain a bunch of other html elements.</li>
        <li>Divs are mainly used to group multiple html elements together</li>
    </ul></ul>
</details>  


<!-- <details>
  <summary>Why do we separate HTML and CSS?</summary>
    <ul><ul>
        <li>apply one style (from one style sheet) to multiple html docs.</li>
        <li></li>
    </ul></ul>
</details>   -->

<!-- 
[0] my own understanding of the subject ([0] can be used or removed -> blank by default)
[1] https://freecodecamp.org 

-->
