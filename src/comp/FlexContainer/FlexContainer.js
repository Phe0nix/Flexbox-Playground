import fc from './fc.module.scss';
import cb from '../CodeBlock/cb.module.scss';
import CodeBlock from '../CodeBlock/CodeBlock';
import { useState } from 'react';

export default function FlexContainer() {
  let [ext, setExt] = useState('block');
  let handleChange = (e) => {
    setExt(e.target.value);
  }
  return (
    <details open className={fc.wrapper}>
      <summary><h3>Flex Container</h3></summary>
      <p>The parent element that contains one or more flex items is known as the flex container. To create a flex container, you need to apply the <code>display: flex</code> or <code>display: inline-flex</code> property to the container element. It enables a flex context for all its direct children.</p>
      <p>Note that CSS columns have no effect on a flex container.</p>
      <CodeBlock>
        <div className={`${cb.container} ${cb[ext]}`}>
          <div className={cb.container_item}>Item 1</div>
          <div className={cb.container_item}>Item 2</div>
          <div className={cb.container_item}>Item 3</div>
          <div className={cb.container_item}>Item 4</div>
        </div>
        <div className={cb.controls}>
          <div className={cb.controls_wrapper}>
            <p>display:</p>
            <div className={cb.controls_values} onChange={handleChange}>
              <label><input type="radio" name="fcValues" value="block" defaultChecked={true} />block</label>
              <label><input type="radio" name="fcValues" value="flex" />flex</label>
            </div>
          </div>
        </div>
      </CodeBlock>
    </details>
  )
}