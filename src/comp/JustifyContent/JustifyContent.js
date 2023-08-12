import jc from './jc.module.scss';
import cb from '../CodeBlock/cb.module.scss';
import CodeBlock from '../CodeBlock/CodeBlock';
import { useState } from 'react';

export default function JustifyContent() {
  let [ext, setExt] = useState('flex-start');
  let handleChange = (e) => {
    setExt(e.target.value);
  }
  return (
    <details className={jc.wrapper}>
      <summary><h3>Justify Content</h3></summary>
      <p>The <code>justify-content</code> property controls the alignment of flex items along the main axis. It offers various options such as <code>flex-start</code>(default value), <code>flex-end</code>, <code>center</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code> and many more. These options allow us to distribute space between or around flex items, align them to the start or end of the container, or center them.</p>
      <ul>
        <li><strong>flex-start:</strong> Flex items are packed toward the start of the flex-direction.</li>
        <li><strong>flex-end:</strong> Flex items are packed toward the end of the flex-direction.</li>
        <li><strong>start:</strong> items are packed toward the start of the <code>writing-mode(ltr, rtl)</code> direction. </li>
        <li><strong>end:</strong> items are packed toward the end of the <code>writing-mode(ltr, rtl)</code> direction.</li>
        <li><strong>left:</strong> Pack items from the left.</li>
        <li><strong>right:</strong> Pack items from the right.</li>
        <li><strong>center:</strong> Pack items around the center. </li>
        <li><strong>space-between:</strong> items are evenly distributed. first item is on the start line, last item on the end line.</li>
        <li><strong>space-around:</strong> items are evenly distributed with equal space around them.</li>
        <li><strong>space-evenly:</strong> items are distributed so that the spacing between any two items (and the space to the edges) is equal.</li>
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
            <p>justify-content:</p>
            <div className={cb.controls_values} onChange={handleChange}>
              <label><input type="radio" name="jcValues" value="flex-start" defaultChecked={true} />flex-start</label>
              <label><input type="radio" name="jcValues" value="flex-end" />flex-end</label>
              <label><input type="radio" name="jcValues" value="start" />start</label>
              <label><input type="radio" name="jcValues" value="end" />end</label>
              <label><input type="radio" name="jcValues" value="center" />center</label>
              <label><input type="radio" name="jcValues" value="space-between" />space-between</label>
              <label><input type="radio" name="jcValues" value="space-around" />space-around</label>
              <label><input type="radio" name="jcValues" value="space-evenly" />space-evenly</label>
            </div>
          </div>
        </div>
      </CodeBlock>
    </details>
  )
}