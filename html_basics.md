# HTML Basics

<h3><strong>Elements</strong></h3>

In Html, Elements can contain either text or other elements (nested).Html closes unclosed tags by default when new tags are opened in the flow of the page (so be careful)

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

> **Note**: Make Dead Links Using the Hash Symbol (<code>#</code>) in place of the link.

> **Note**: You can "make elements into links" by nesting them within an <code>a</code> element.
</p>    
</ul>    
    <h4><strong><u> - <code>Input</code> tag</u></strong>:</h4>
        <ul>
            <p><code>input</code> elements are a convenient way to get input from your user.

```html
<input type="text">
```
> **Note**: <code>input</code> elements are self-closing.

> **Note**: <code>Placeholder</code> text is what is displayed in your input element before your user has inputted anything.

```html
<input placeholder="some text">
```
</ul>
        <h4><strong><u> - <code>Form</code> tag</u></strong>:</h4>
        <ul>
            <li><p>You can build web forms that actually submit data to a server using nothing more than pure HTML. You can do this by specifying an action on your <code>form</code> element.</p>     

```html
<form action="/url-where-you-want-to-submit-form-data"></form>
```
</li>
            <li>All inputs inside of a form are submitted to wherever the form goes to. By Default the form submits to the page that you are currently on.<span>[3]</span></li>
            <li>By default: when the <code>enter</code> key is pressed while one of the elements of the form is in "focus"<code> -> </code>the form is submitted immediatley.<span>[0]</span></li>
            <li><code>div</code>s are used to seprate different elements of forms so that they don't be all on one line (because they are inline elements).<span>[3]</span><span>[0]</span></li>
            <li>Almost always when you build a form, you are gonna want your form to submit somewhere other than the page you are currently on & in order to do that, you'll need to add the atribute <code>action</code> <code> -> </code>the <code>action</code> is going to be where your form is submitting to.<span>[3]</span></li>
            <li>The next thing that you are almost always gonna specify on your form is the <code>method</code> you want your form to use<code> -> </code>that is gonna be: <code>GET</code> or a <code>Post</code> :
                <ul>
                    <li><storng><code>GET</code></strong>: is going to append things to the url and it is gonna send it to another page on the site</li>
                    <li><storng><code>POST</code></strong>: is useful when you have a server and want to save some infromation</li>

> **Note**: browsers can only render <code>GET</code> requests.
</ul>
            <span>[3]</span></li>
            <li>in order for an input to show out in a form URL, you must specify the <code>name</code> attribute.<span>[3]</span></li>
            <li>if you click on a label it should highlight the field that it's being labeled for, this is helpful for not only users but also for screen readers and in order to do this, you should set a <code>for</code> attribute to the element you want to highlight whenever you click on the label with a <code>"value"</code> of the <code>id</code> of the element you want to highlight.<span>[3]</span></li>                        

> **Note**: Another way to associate labels with elements is by nesting the element inside of the label element.<span>[3]</span>    

> **Note**: Most people use the <code>for</code> attribute method instead of the wrap inside method because it is cleaner and easier to style.<span>[3]</span> It is considered best practice to set a <code>for</code> attribute on the <code>label</code> element, with a value that matches the value of the <code>id</code> attribute of the <code>input</code> element. This allows assistive technologies to create a linked relationship between the label and the child <code>input</code> element.<span>[1]</span>

> **Note**: Most people use the wrap inside method with checkboxes and radio buttons.<span>[3]</span>

> **Note**: The defualt <code>type</code> of the <code>input</code> element is <code>text</code>, but you are always wanna be explicit in what type of input you are using.<span>[3]</span>

> **Note**: the <code>type</code> of email verifies emails for you by default. It also provides a keyboard specified for entering emails on mobile phones.<span>[0]</span>

> **Note**: the default behaviour of a <code>button</code> element is <code>type</code> submit. That type submits form to the server. if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value.

> **Note**: for <code>button</code> element the <code>type="button"</code>, The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur.

<li>to add a default value for a text input field you can use the <code>value</code> attribute.<span>[3]</span></li>
<li>Adding a <code>submit</code> button to the form will send the data from the form to the URL you specified with your form's <code>action</code> attribute.<span>[1]</span></li>
            <li>Here's an example submit button:

```html
<button type="submit">this button submits the form</button>
```
<span>[1]</span></li>
            <li>all <code>radio</code> buttons need to share the same <code>name</code> which is how we know that there can only be one selected.<span>[3]</span></li>

> **Note**: for all <code>radio</code> buttons, you need to specify a value, so when you submit it to your form, you know what you are getting back.<span>[3]</span>

> **Note**: All related <code>radio</code> buttons should have the same name attribute to create a radio button group. By creating a radio group, selecting any single radio button will automatically deselect the other buttons within the same group ensuring only one answer is provided by the user.<span>[1]</span>

<li>Each of your <code>checkboxes</code> can be nested within its own <code>label</code> element. By wrapping an <code>input</code> element inside of a label element it will automatically associate the checkbox input with the label element surrounding it.<span>[1]</span></li>

> **Note**: All related checkbox inputs should have the same <code>name</code> attribute.<span>[1]</span>

Here's an example of a checkbox:

```html
<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
```
<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>

> **Note**: It is considered best practice to explicitly define the relationship between a checkbox input and its corresponding label by setting the <code>for</code> attribute on the label element to match the <code>id</code> attribute of the associated input element.<span>[1]</span>

> **Note**:  A <code>label</code>> element can have both a for attribute and a contained control element, as long as the <code>for</code> attribute points to the contained control element.<span>[4]</span>

> **Note**: When a form gets submitted, the data is sent to the server and includes entries for the options selected. Inputs of type <code>radio</code> and <code>checkbox</code> report their values from the <code>value</code> attribute.<span>[1]</span>

> **Note**: Only elements with <code>name</code> attribute are submitted.<span>[1]</span>

> **Note**: <code>name</code> & <code>value</code> pairs get submitted for each element. The radio input is affected by the name attribute.

> **Note**: If you omit the <code>value</code> attribute, the submitted form data uses the default value, which is <code>on</code>. So the <code>value</code> attribute needs to be set to something to identify the option.<span>[1]</span> 

> **Note**: Best Practices is to enter <code>name</code>&<code>value</code> attribute-values in lowercase.

> **Note**: You can set a checkbox or radio button to be checked by default using the checked attribute.<span>[1]</span>

<li>You can require specific form fields so that your user will not be able to <code>submit</code> your form until he or she has filled them out.<span>[1]</span></li>
            <li>For example, if you wanted to make a text input field required, you can just add the attribute <code>required</code> within your <code>input</code> element, like this: <code>&lt;input type="text" required&gt;</code><span>[1]</span></li>
            <li>for full project: check the <a href="https://github.com/MrRamoun/front-end_training/tree/master/web-projects/web-dev-simplified-form-project">web-dev-simplified-form-project</a> in the root of the repo.</li>
            <li>another important element is the <code>select</code> element that represents a drop down menu.</li>

```html
<div class="eye-color">
    <label for="eye-color">Eye Color: </label>
    <select name="eye-color" id="eye-color" multiple>
        <option value="green">Green</option>                
        <option label="blue" value="blue"></option>                
    </select>
</div>
```            
> **Note**: the <code>multiple</code> attribute allows selecting more than one option because the <code>select</code> element permits the selection of one option only be default.

<li>another important element is the <code>textarea</code> element that allows entering multiline text.It is very useful for passages or paragraphs or editors.</li>

```html 
 <div class="bio">
    <label for="bio">Bio</label>
    <textarea name="bio" id="bio" cols="30" rows="10">hello from the other side</textarea>
</div>
```

> **Note**: the value goes inside the <code>textarea</code> element not inside a <code>value</code> attribute.<span>[3]</span>

> **Note**: <code>textarea</code> converts all of the white space.So, if you have a default value for the <code>textarea</code>, you wanna make sure that there is no white space between the opening and the closing tags.<span>[3]</span>

> **Note**: when the form is submitted, the <code>textarea</code> is formatted so that all white space is converted to one charachter white space.<span>[0]</span>

> **Note**: <code>select</code> and <code>textarea</code> are the only two anomly type of elements that don't actually use the <code>input</code> for their element, so now let's go back to the.<span>[3]</span>

<li>another really <strong>interesting</strong> element is the hidden (<code>&lt;input type="hidden"&gt;</code>) input element. The hidden input element doesn't show on the page but when the form is submitted the <code>name</code> and <code>value</code> attributes are passed like any other input element.Users are not able to interact at all with hidden inputs.<span>[3]</span></li>

<li>one of the most important types of <code>input</code> element is the <code>type="file"</code> which allows the user to upload files to server through a file picker dialogue.<span>[0][3]</li>

> **Note**: for the <code>input type="file"</code> to be userful for the server you need to specify an attribute to the <code>form</code> tag called <code>enctype</code> with attribute-value of <code>"multipart/formdata"</code>.What that does is simple "it tells the server that we are sending our form in multiple parts and not in one part" because files are very large, we can't send them in one part.<span>[3]</span>

</ul>
    </ul>
</details> 

### Html in 3 words

- Markup <code>--></code> marks up content (helps in seo and other stuff like styling, controling the order of elements ...etc)
- Structure <code>--></code> builds the structure of a web page
- Text <code>--></code> text embeded in an html page

### What Can People do with HTML<span>[2]</span>

- **Designers**: can create more attractive and usable sites.<span>[2]</span>
- **Website Editors**: can create better content.<span>[2]</span>
- **Marketers**: can communicate with their audience more effectively.<span>[2]</span>
- **Managers**: can commission better sites.<span>[2]</span>

### How Html is used to create webpages<span>[2]</span>

1. you start by writing down the words you want to appear on your page.<span>[2]</span>
2. You then add tags or elements to the words so that the browser knows what is a heading, where a paragraph begins and ends, and so on.<span>[2]</span>

### Html Best Practices

- attribute scheme: <code>type="" name="" vlaue="" id=""</code>

### Test Yourself

<!-- info in here represent my current knowledge about the topic before learning anything new -->

<details>
  <summary>Why HTML was named HTML?</summary>
    <ul><ul>
        <li>The HyperText part of HTML comes from the early days of the web and its original use case. Pages usually contained static documents that contained references to other documents. These references contained hypertext links used by the browser to navigate to the reference document so the user could read the reference document without having to manually search for it.<span>[1]<span></li>        
    </ul></ul>
</details>

<details>
  <summary>What is the main Structure of any html document?</summary>
    <ul><ul>
        <li>At the top of the document, we need to tell the browser which version of HTML the page is using. HTML is an evolving language, and is updated regularly. Most major browsers support the latest specification, which is HTML5. However, older web pages may use previous versions of the language.</li>
        <li>We tell the browser this information by adding the <code>&lt;!DOCTYPE ...&gt;</code> tag on the first line, where the ... part is the version of HTML. For HTML5, we use <code>&lt;!DOCTYPE html&gt;</code>.<span>[1]<span></li>

> **Note**: The ! and uppercase DOCTYPE is important, especially for older browsers. The html is not case sensitive.<span>[1]<span>        
<li>Next, the rest of the HTML code needs to be wrapped in <code>html</code> tags. The opening <code>&lt;html&gt;</code> goes directly below the <code>&lt;!DOCTYPE html&gt;</code> line, and the closing <code>&lt;/html&gt;</code> goes at the end of the page.<span>[1]<span></li>

```html
<!DOCTYPE html>
<html>
  <!-- Your HTML code goes here -->
</html>
```
</ul></ul>
</details>

<details>
  <summary>What is the importance of structuer in html?</summary>
    <ul><ul>
        <li>In all kinds of documents, structure is very important in helping readers to understand the messages you are trying to convey and to navigate around the document (increases readability). So, in order to learn how to write web pages, it is very important to understand how to structure documents.<span>[2]<span></li>        
    </ul></ul>
</details>

<details>
  <summary>How Structure helps readers understand the stories in the newspaper?</summary>
    <ul><ul>
        <li>For the stories we read in a newspaper: for each story, there will be a <em>headline</em>, some <em>text</em>, and possibly some <em>images</em>. If the article is a long piece, there may be subheadings that split the story into separate sections or quotes from those involved.<span>[2]<span></li>        
    </ul></ul>
</details>

<details>
  <summary>how offline structure is similar to online structreu?</summary>
    <ul><ul>
        <li>The structure is very similar when a news story is viewed online (although it may also feature audio or video).</li>        
        <li>Example of a word document structure: <em>a document might start with a large heading, followed by an introduction or the most important information. This might be expanded upon under subheadings lower down on the page</em><span>[2]<span></li>

> **Note**: The use of headings and subheadings in any document often reflects a hierarchy of information.<span>[2]<span>

> **Note**:  When using a word processor to create a document, <em>we separate out the text to give it structure</em>. Each topic might have a new paragraph, and each section can have a heading to describe what it covers.<span>[2]<span>

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
    <summary>Why use Dead links?</summary>
        <ul><ul>
            <li>Sometimes you want to add <code>a</code> elements to your website before you know where they will link.<span>[1]</span></li>
            <li>This is also handy when you're changing the behavior of a link using JavaScript.<span>[1]</span></li>
        </ul></ul>
</details>

<details>
  <summary>Why do we separate HTML and CSS?</summary>
    <ul><ul>
        <li>apply one style (from one style sheet) to multiple html docs.</li>
        <li>This improves the readability and reusability of your code.[1]</li>
    </ul></ul>
</details> 

<details>
  <summary>Why do we need a seprate <code>head</code> and <code>body</code> tags?</summary>
    <ul><ul>
        <li>it adds another level of organization in the HTML document within the html (opening and closing) tags.<span>[1]</span></li>        
    </ul></ul>
</details>

<details>
  <summary>How to use the head tag?</summary>
    <ul><ul>
        <li>Any markup with information about the html page would go into the head tag.<span>[1]</span></li>        
        <Li>Metadata elements, such as link, meta, title, and style, typically go inside the head element.<span>[1]</span></li>

> **Note**: if you tried to use non-meta tag inside of the <code>head</code> tag, the browser gonna move that tag to the <code>body</code> tag.<span>[1]</span>

</ul></ul>
</details>

<details>
  <summary>How to use the body tag?</summary>
    <ul><ul>
        <li>Any markup with the content of the page (what displays for a user) would go into the body tag.<span>[1]</span></li>        

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- metadata elements -->
  </head>
  <body>
    <!-- page contents -->
  </body>
</html>
```
</ul></ul>
</details>

<details>
  <summary>What are classes and IDs (and how are they different)?</summary>
    <ul><ul>
        <li><strong>Classes</strong>: are reusable styles that can be added to HTML elements.[1]</li>
        <li><strong>Classes</strong>: are attributes of elements that allows grouping of bunch of elements so that it becomes easier to style or manipulate them [i.e: multiple elements can have the same class].</li>
        <li><strong>IDs</strong>: are attributes of elements that allows distinguishing a specific element [i.e: multiple elements shouldn't have the same id, because ids should be unique].<span>[0]</span> An <code>id</code> is an attribute that uniquely describes an element.<span>[1]</span></li>
    </ul>

- There are several benefits to using `id` attributes: You can use an id to style a single element and later you'll learn that you can use them to select and modify specific elements with JavaScript.<span>[1]</span>

- One cool thing about `id` attributes is that, like classes, you can style them using CSS. However, an id is not reusable and __should only be applied to one element__. An id also has a higher specificity (importance: _id > class > element_) than a class so if both are applied to the same element and have conflicting styles, the styles of the `id` will be applied.

> **Note**: `id` attributes should be unique. Browsers won't enforce this, but it is a widely agreed upon best practice. So please don't give more than one element the same id attribute.<span>[1]</span>
 </ul>
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
        <li>The <code>div</code> element, also known as a division element, is a general purpose container for other elements.<span>[1]</span></li>
        <li>The <code>div</code> element is probably the most commonly used HTML element of all.<span>[1]</span></li>
        <li>Just like any other non-self-closing element, you can open a <code>div</code> element with <code>&lt;div&gt;</code> and close it on another line with <code>&lt;/div&gt;</code>.<span>[1]</span></li>
    </ul></ul>
</details>  

<details>
    <summary>Why only elements with <code>name</code> attribute are submitted?</summary>
    <ul><ul>
        <li></li>
    </ul></ul>
</details>

<details>
  <summary>Why do we need hidden input elements?</summary>
    <ul><ul>
        <li>they are really great when you are trying to do some fancy manipulation with javascript or you wanna send something down from a server.<span>[3]</span></li>

> **Note**: when creating a generic form in html, the hidden input is never going to be useful unless you are doing something fancy in javascript or on a server<span>[3]</span>.
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
[2] Duckett, Jon, HTML and CSS Design and Build Websites, 2011, John Wiley & Sons
[3] Web Dev Simplified, Youtube Channel, https://www.youtube.com/watch?v=fNcJuPIZ2WE&t=52s
[4] MDN Refrences, https://developer.mozilla.org/en-US/docs/web
-->
