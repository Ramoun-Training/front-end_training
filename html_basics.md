# HTML Basics

### Elements

<details>
<summary><b><u>Images:</u></b></summary>

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

Find out more about accessibility in our [accessibility learning module.](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
</p>

</details>

<details>
<summary><b><u>Marking up text:</u></b></summary>

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
<summary><b><u>Links:</u></b></summary>

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







### Html in 3 words

- Markup --> marks up content (helps in seo and other stuff like styling, controling the order of elements ...etc)
- Structure --> builds the structure of a web page
- Text --> text embeded in an html page

### Test Yourself

<!-- info in here represent my current knowledge about the topic before learning anything new -->

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
        <li><strong>IDs</strong>: are attributes of elements that allows distinguishing a specific element [i.e: multiple elements shouldn't have the same id, because ids should be unique].</li>
    </ul></ul>
</details>  

<details>
  <summary>What are elements?</summary>
    <ul><ul>
        <li>Elements are the building block of any html document.</li>        
        <li>Elements represent the tags (opening tag and closing tag) used to markup different contents of the page.</li>
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
