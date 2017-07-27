import React from 'react'

const ShareButtons = (props) => {
  return (
    <div id="share-buttons">
      <a href="mailto:?Subject=Simple Share Buttons&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 https://simplesharebuttons.com">
        <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" />
      </a>

      <a href="http://www.facebook.com/sharer.php?u=https://simplesharebuttons.com" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
      </a>

      <a href="https://twitter.com/share?url=https://simplesharebuttons.com&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
      </a>

      <a href="https://plus.google.com/share?url=https://simplesharebuttons.com" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" />
      </a>

      <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />
      </a>
    </div>
  );
}
