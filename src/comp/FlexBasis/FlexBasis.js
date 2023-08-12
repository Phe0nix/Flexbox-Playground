import fb from './fb.module.scss';
import cb from '../CodeBlock/cb.module.scss';
import CodeBlock from '../CodeBlock/CodeBlock';
import { useState } from 'react';

export default function FlexBasis() {
  const min = 66;
  const max = 400;
  let [width, setWidth] = useState(min);
  let handleWidth = (e) => {
    setWidth(e.target.value);
  }
  return (
    <details className={fb.wrapper}>
      <summary><h3>Flex Basis</h3></summary>
      <p>This defines the default size of an element before the remaining space is distributed. In a Flex row, <code>flex-basis</code> does the same thing as <code>width</code>. In a Flex column, <code>flex-basis</code> does the same thing as <code>height</code>.</p>
      <p>Try to change flex-grow value to see the effect on item 2.</p>
      <CodeBlock>
        <div className={`${cb.container} ${cb.flex}`}>
          <div className={`${cb.container_item}`} style={{width: `${min}px`}}>Item 1</div>
          <div className={`${cb.container_item} ${cb.activeItem}`} style={{width: `${width}px`}}>Item 2</div>
          <div className={`${cb.container_item}`} style={{width: `${min}px`}}>Item 3</div>
          <div className={`${cb.container_item}`} style={{width: `${min}px`}}>Item 4</div>
        </div>
        <div className={`${cb.controls} ${cb.fwrap}`}>
          <div className={cb.controls_wrapper}>
            <p>display:</p>
            <div className={cb.controls_values}>
              <label><input type="radio" value="flex" defaultChecked={true} />flex</label>
            </div>
          </div>
          <div className={cb.controls_wrapper}>
            <p>flex-basis:</p>
            <div className={cb.controls_width}>
              <input type='range' min={min} max={max} name='widthValue' defaultValue={width} onChange={handleWidth} /> {width}px
            </div>
          </div>
        </div>
      </CodeBlock>
    </details>
  )
}