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