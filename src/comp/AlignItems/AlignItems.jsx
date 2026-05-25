import ai from './ai.module.scss';
import cb from '../CodeBlock/cb.module.scss';
import CodeBlock from '../CodeBlock/CodeBlock';
import { useState } from 'react';

export default function AlignItems() {
  let [ext, setExt] = useState('stretch');
  let handleChange = (e) => {
    setExt(e.target.value);
  }
  return (
    <details className={ai.wrapper}>
      <summary><h3>Align Items</h3></summary>
      <p>The <code>align-items</code> property determines the alignment of flex items along the cross axis. It offers values such as <code>stretch</code>(default value), <code>flex-start</code>, <code>flex-end</code>, <code>center</code> and <code>baseline</code>. Using <code>align-items</code>, we can vertically center flex items, align them to the top or bottom of the container, or stretch them to fill the container's height.</p>
      <ul>
        <li><strong>stretch:</strong> stretch to fill the container (still respect min-width/max-width).</li>
        <li><strong>flex-start / start / self-start:</strong> items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.</li>
        <li><strong>flex-end / end / self-end:</strong> items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.</li>
        <li><strong>baseline:</strong> items are aligned such as their baselines align. In many cases, when the <strong>font size is the same</strong> among items, then <code>flex-start</code> and <code>baseline</code> <strong>will be indistinguishable</strong>. But <strong>if font size varies</strong> among flex items, then baseline can make a <strong>noticeable difference</strong>.</li>
        <li><strong>center:</strong> Pack items around the center. </li>
      </ul>
      <CodeBlock>
        <div className={`${cb.container} ${cb.flex} ${cb[ext]}`}>
          <div className={cb.container_item}>Item 1</div>
          <div className={cb.container_item}>Item 2</div>
          <div className={cb.container_item}>Item 3</div>
          <div className={cb.container_item}>Item 4</div>
        </div>
        <div className={cb.controls}>
          <div className={cb.controls_wrapper}>
            <p>display:</p>
            <div className={cb.controls_values}>
              <label><input type="radio" value="flex" defaultChecked={true} />flex</label>
            </div>
          </div>
          <div className={cb.controls_wrapper}>
            <p>align-items:</p>
            <div className={cb.controls_values} onChange={handleChange}>
              <label><input type="radio" name="aiValues" value="stretch" defaultChecked={true} />stretch</label>
              <label><input type="radio" name="aiValues" value="f-start" />flex-start / start / self-start</label>
              <label><input type="radio" name="aiValues" value="f-end" />flex-end / end /  self-end</label>
              <label><input type="radio" name="aiValues" value="cnter" />center</label>
              <label><input type="radio" name="aiValues" value="baseline" />baseline</label>
            </div>
          </div>
        </div>
      </CodeBlock>
    </details>
  )
}