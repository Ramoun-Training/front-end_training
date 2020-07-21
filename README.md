# front-end_training

### Front-end Tips

- On the front end, you will need to be highly conscious of who your user is and how they will be interacting with your web page, because you are building their gateway to your page or product. This may mean gaining a strong understanding of accessibility and things like responsive development down the line, but first you need to build up your toolkit and pick up the fundamentals of the front-end languages.

- The fundamental, primary feature of any web browser, such as Firefox, Chrome, Safari, is to render (display) HTML documents.

- HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables. As the title suggests, this article will give you a basic understanding of HTML and its functions.

- HTML is not a programming language; it is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on.

- It is important to understand that HTML only defines the <strong>semantic structure</strong> of a document. It does, as such, say nothing about the visual representation of, for example, a headline, the spacing between paragraphs, the font family and size used, any colors, borders, or even element placement: The visual representation is defined in a different language called CSS (or by the browser’s defaults, should there not be any custom style definition for this web page, as in our example above).

- You should use a hyphen for your file names. The Google search engine treats a hyphen as a word separator but does not regard an underscore that way. For these reasons, it is best to get into the habit of writing your folder and file names lowercase with no spaces and with words separated by dashes, at least until you know what you're doing. That way you'll bump into fewer problems later down the road.

- Like HTML, CSS is not a programming language. It's not a markup language either. CSS is a style sheet language. CSS is what you use to selectively style HTML elements. For example, this CSS selects paragraph text, setting the color to red:
  ```css
  p {
    color: red;
  }
  ```

- JavaScript is the programming language that you use to add interactive features to your website. Some examples could be games, things that happen when buttons are pressed or data is entered in forms, dynamic styling effects, animation, and much more.

> **Note**: The Windows file system tends to use backslashes, not forward slashes, e.g. `C:\windows`. This doesn't matter in HTML — even if you are developing your website on Windows, you should still use forward slashes in your code.

### Learning Outcomes

<details>
<summary>What is the role of HTML in a web page?</summary>
<ul><ul>
  <li></li>
</ul></ul>
</details>

<details>
<summary>What is the role of CSS in a web page?</summary>
<ul><ul>
  <li></li>
</ul></ul>
</details>

<details>
<summary>What is the role of JavaScript in a web page?</summary>
<ul><ul>
  <li>JavaScript is a client-side programming language which helps web developer to do Web Application Development and make dynamic and interactive web pages by implementing custom client-side scripts.</li>
</ul></ul>
</details>

<details>
<summary>Why is the semantic structure of a document useful at all, even disregarding its visual styling when presented in the browser window?</summary>
<ul><ul>
  <li>
    Maybe the simplest example is a link. In order to describe a link in text (HTML is stored as plain text) we’ll need to tell three pieces of information to the browser:

    - That we’d like to define a link,
    - what text to display for the link, and
    - what other web address to link to.
This is a valid example of a link in HTML, using the tag a (which means “anchor”):

    <a href="http://rubymonstas.org">Ruby Monstas Homepage</a>

This HTML, when rendered in a web browser, looks like this: [Ruby Monstas Homepage](http://rubymonstas.org), i.e. there’s a link with the text “Ruby Montas Homepage” and it links to the target URL (“href”) http://rubymonstas.org.
  </li>
</ul></ul>
</details>

<details>
<summary>What is Html?</summary>
<ul><ul>
  <li>It is a language that “marks up” certain each part of the content with its structural meaning, such as “This is a link, with this target URL”, or “This is a heading with this level”, “This is a simple paragraph”, and so on.
</li>
</ul></ul>
</details>

<details>
<summary>Explain the main parts of an Html element?</summary>
<ul><ol>


  <img src="https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png" alt="an example of an html element"/>

  <li> <strong>The opening tag</strong>: This consists of the name of the element (in this case, p), wrapped in opening and closing angle brackets. This states where the element begins or starts to take effect — in this case where the paragraph begins.</li>
  <li> <strong>The closing tag</strong>: This is the same as the opening tag, except that it includes a forward slash before the element name. This states where the element ends — in this case where the paragraph ends. Failing to add a closing tag is one of the standard beginner errors and can lead to strange results.</li>
  <li> <strong>The content</strong>: This is the content of the element, which in this case, is just text.</li>
  <li> <strong>The element</strong>: The opening tag, the closing tag and the content together comprise the element.</li>
</li>
</ol></ul>
</details>

<details>
<summary>What do you know about attributes?</summary>
<ul><ul>
  <li>Attributes contain extra information about the element that you don't want to appear in the actual content. Here, <code>class</code> is the attribute name and <code>editor-note</code> is the attribute value. The <code>class</code> attribute allows you to give the element an identifier that can be used later to target the element with style information and other things.
</li>
<li>An attribute should always have the following:
    <ol>
    <li> A space between it and the element name (or the previous attribute, if the element already has one or more attributes).</li>
    <li> The attribute name followed by an equal sign.</li>
    <li> The attribute value wrapped by opening and closing quotation marks.</li>
    </ol>
</li>

<li><strong>Note</strong>: Simple attribute values that don't contain ASCII whitespace (or any of the characters  <code>"</code> <code>'</code> <code>`</code> <code>=</code> <code><</code> <code>></code> ) can remain unquoted, but it is recommended that you quote all attribute values, as it makes the code more consistent and understandable.</li>
</ul></ul>
</details>

<details>
<summary>What is nesting?</summary>
<ul><ul>

    <p>My cat is <strong>very grumpy.</p></strong>
  <code>
  <p>My cat is <strong>very grumpy.</p></strong>
  </code>
  <li>You can put elements inside other elements too — this is called <strong>nesting</strong>.</li>
  <li>nesting in html follows the <strong>stack</strong> structure <strong>(LIFO)</strong></li>
  <li><strong>Note:</strong> The elements have to open and close correctly so that they are clearly inside or outside one another. If they overlap as shown above, then your web browser will try to make the best guess at what you were trying to say, which can lead to unexpected results. So don't do it!</li>
  <li>The correct way:

    <p>My cat is <strong>very grumpy.</strong></p>
  </li>
</ul></ul>
</details>

<details>
<summary>What do you know about empty elements?</summary>
<ul><ul>

  ```html
<img src="images/firefox-icon.png" alt="My test image">
```
  <li>
  Some elements have no content and are called empty elements. 
  </li>
  <li>
  This contains two attributes, but there is no closing <code>&lt;/img&gt;</code> tag and no inner content. This is because an image element doesn't wrap content to affect it. Its purpose is to embed an image in the HTML page in the place it appears.
  </li>

</ul></ul>
</details>

<details>
<summary>Explain the Anatomy of an HTML Document.</summary>
<ul><ul>

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image">
  </body>
  </html>
  ```

  <li><code>&lt;!DOCTYPE html&gt;</code> — the doctype. It is required preamble. In the mists of time, when HTML was young (around 1991/92), doctypes were meant to act as links to a set of rules that the HTML page had to follow to be considered good HTML, which could mean automatic error checking and other useful things. However these days, they don't do much, and are basically just needed to make sure your document behaves correctly. That's all you need to know for now.</li>

  <li><code>&lt;html&gt;&lt;/html&gt;</code> — the <code>&lt;html&gt;</code> element. This element wraps all the content on the entire page and is sometimes known as the root element.</li>

  <li><code>&lt;head&gt;&lt;/head&gt;</code> — the <code>&lt;head&gt;</code> element. This element acts as a container for all the stuff you want to include on the HTML page that isn't the content you are showing to your page's viewers. This includes things like keywords and a page description that you want to appear in search results, CSS to style our content, character set declarations and more.</li>

  <li><code>&lt;meta charset="utf-8"&gt;</code> — This element sets the character set your document should use to UTF-8 which includes most characters from the vast majority of written languages. Essentially, it can now handle any textual content you might put on it. There is no reason not to set this and it can help avoid some problems later on.</li>

  <li><code>&lt;title&gt;&lt;/title&gt;</code> — the <code>&lt;title&gt;</code> element. This sets the title of your page, which is the title that appears in the browser tab the page is loaded in. It is also used to describe the page when you bookmark/favourite it.</li>
  
  <li><code>&lt;body&gt;&lt;/body&gt;</code> — the <code>&lt;body&gt;</code> element. This contains all the content that you want to show to web users when they visit your page, whether that's text, images, videos, games, playable audio tracks or whatever else.</li>
</ul></ul>
</details>

### Glossery

- Meta information: information about the document, not part of the document itself.

### Good To Know

- The entire success of Google as a search engine relied on the fact that the semantic structure of a document provides clues about the relevance of certain search terms in this document: If a word is contained in the URL, the document title, the toplevel headlines, then it’s probably important. Even more so, if other pages link to this document using link texts that also contain that word, then this adds social proof to the mix, and search results should probably list this page higher up in the results.

- By inspecting the headline tags in an HTML document, we can auto-generate a table of contents for this document quite easily, without having authors maintain this manually. Many content management systems (CMS) do this, including Wikipedia.

### Important Links

- [brief intro to front-end development](https://web.archive.org/web/20200601022721/https://generalassemb.ly/blog/what-is-front-end-web-development/)
- [ruby monstas](http://rubymonstas.org/)
- [Mozilla Web Developers](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [HTML Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [CSS Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index)
- [JS Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [w3shcool](https://https://www.w3schools.com/)
- [devdocs.io/](https://devdocs.io/)