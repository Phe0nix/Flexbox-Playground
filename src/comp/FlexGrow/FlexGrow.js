import fg from './fg.module.scss';
import cb from '../CodeBlock/cb.module.scss';
import CodeBlock from '../CodeBlock/CodeBlock';
import { useState } from 'react';

export default function FlexGrow() {
  let [fgrow, setFgrow] = useState('fg1');
  let handleFlexGrow = (e) => {
    setFgrow(e.target.value);
  }
  return (
    <details className={fg.wrapper}>
      <summary><h3>Flex Grow</h3></summary>
      <p>This defines the ability for a flex item to grow if necessary. If all items have <code>flex-grow</code> set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, that child would take up twice as much of the space either one of the others</p>
      <p>Try to change flex-grow value to see the effect on item 2.</p>
      <CodeBlock>
        <div className={`${cb.container} ${cb.flex}`}>
          <div className={`${cb.container_item} ${cb.fg1}`}>Item 1</div>
          <div className={`${cb.container_item} ${cb.activeItem} ${cb[fgrow]}`}>Item 2</div>
          <div className={`${cb.container_item} ${cb.fg1}`}>Item 3</div>
          <div className={`${cb.container_item} ${cb.fg1}`}>Item 4</div>
        </div>
        <div className={`${cb.controls} ${cb.fwrap}`}>
          <div className={cb.controls_wrapper}>
            <p>display:</p>
            <div className={cb.controls_values}>
              <label><input type="radio" value="flex" defaultChecked={true} />flex</label>
            </div>
          </div>
          <div className={cb.controls_wrapper} onChange={handleFlexGrow}>
            <p>flex-grow:</p>
            <div className={cb.controls_values}>
              <label><input type="radio" name="fgVal" value="fg1" defaultChecked={true} />1</label>
              <label><input type="radio" name="fgVal" value="fg2" />2</label>
              <label><input type="radio" name="fgVal" value="fg3" />3</label>
              <label><input type="radio" name="fgVal" value="fg4" />4</label>
            </div>
          </div>
        </div>
      </CodeBlock>
    </details>
  )
}