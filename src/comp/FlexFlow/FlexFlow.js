import ff from './ff.module.scss';
import cb from '../CodeBlock/cb.module.scss';
import CodeBlock from '../CodeBlock/CodeBlock';
import { useState } from 'react';

export default function FlexFlow() {
  let [ext, setExt] = useState('nowrap');
  let [fdVal, setFdVal] = useState('row');
  const min = 150;
  const max = 900;
  let [width, setWidth] = useState(max);
  let fwHandleChange = (e) => {
    setExt(e.target.value);
  }
  let fdHandleChange = (e) => {
    setFdVal(e.target.value);
  }
  let handleWidth = (e) => {
    setWidth(e.target.value);
  }
  return (
    <details className={ff.wrapper}>
      <summary><h3>Flex Flow</h3></summary>
      <p>This is a shorthand for the <code>flex-direction</code> and <code>flex-wrap</code> properties, which together define the flex container's main and cross axes. The default value is <code>row nowrap</code>.</p>
      <p>To see the <code>flex-flow</code> effect, Try to change the values of below container</p>
      <CodeBlock>
        <div style={{width: `${width}px`}}>
          <div className={`${cb.container} ${cb.flex} ${cb[ext]} ${cb[fdVal]}`}>
            <div className={cb.container_item}>Item 1</div>
            <div className={cb.container_item}>Item 2</div>
            <div className={cb.container_item}>Item 3</div>
            <div className={cb.container_item}>Item 4</div>
            <div className={cb.container_item}>Item 5</div>
          </div>
        </div>
        <div className={cb.controls}>
          <div className={cb.controls_wrapper}>
            <p>display:</p>
            <div className={cb.controls_values}>
              <label><input type="radio" value="flex" defaultChecked={true} />flex</label>
            </div>
          </div>
          <div className={cb.controls_wrapper}>
            <p>flex-direction:</p>
            <div className={cb.controls_values} onChange={fdHandleChange}>
              <label><input type="radio" name="fffdValues" value="row" defaultChecked={true} />row</label>
              <label><input type="radio" name="fffdValues" value="row-reverse" />row-reverse</label>
              <label><input type="radio" name="fffdValues" value="column" />column</label>
              <label><input type="radio" name="fffdValues" value="column-reverse" />column-reverse</label>
            </div>
          </div>
          <div className={cb.controls_wrapper}>
            <p>flex-wrap:</p>
            <div className={cb.controls_values} onChange={fwHandleChange}>
              <label><input type="radio" name="fffwValues" value="nowrap" defaultChecked={true} />nowrap</label>
              <label><input type="radio" name="fffwValues" value="wrap" />wrap</label>
              <label><input type="radio" name="fffwValues" value="wrap-reverse" />wrap-reverse</label>
            </div>
          </div>
          <div className={cb.controls_wrapper}>
            <p>container width:</p>
            <div className={cb.controls_width}>
              <input type='range' min={min} max={max} name='widthValue' defaultValue={width} onChange={handleWidth} /> {width}px
            </div>
          </div>
        </div>
      </CodeBlock>
    </details>
  )
}