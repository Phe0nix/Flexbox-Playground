import gap from './gap.module.scss';
import cb from '../CodeBlock/cb.module.scss';
import CodeBlock from '../CodeBlock/CodeBlock';
import { useState } from 'react';

export default function Gap() {
  let [fwrap, setFwrap] = useState('wrap');
  const min = 150;
  const max = 900;
  let rg = window.getComputedStyle(document.documentElement).getPropertyValue('--row-gap');
  let cg = window.getComputedStyle(document.documentElement).getPropertyValue('--column-gap');
  const gmin = 10;
  const gmax = 50;
  let [width, setWidth] = useState(max);
  let [rowGap, setRowGap] = useState(rg);
  let [colGap, setColGap] = useState(cg);
  let handleRG = (e) => {
    setRowGap(e.target.value);
  }
  let handleCG = (e) => {
    setColGap(e.target.value);
  }
  let handleWidth = (e) => {
    setWidth(e.target.value);
  }
  let handleWrap = (e) => {
    setFwrap(e.target.value);
  }
  document.documentElement.style.setProperty('--row-gap', rowGap + 'px');
  document.documentElement.style.setProperty('--column-gap', colGap + 'px');
  return (
    <details className={gap.wrapper}>
      <summary><h3>Gap</h3></summary>
      <p>The <code>gap</code> property explicitly controls the space between flex items. It's shorthand of <code>row-gap</code> and <code>column-gap</code>. It applies that spacing only between items not on the outer edges. In multiline layout, it works really well.</p>
      <ul>
        <li><strong>gap:</strong> <code>row-gap</code> <code>column-gap</code>.</li>
        <li><strong>row-gap:</strong> adds the space vertically.</li>
        <li><strong>column-gap:</strong> adds the space horizontally. </li>
      </ul>
      <p>To see the <code>gap</code> effect, Try to change the width to make below container multiline layout.</p>
      <CodeBlock>
        <div style={{width: `${width}px`}}>
          <div className={`${cb.container} ${cb.flex} ${cb[fwrap]} ${cb.gap}`}>
            <div className={cb.container_item}>Item 1</div>
            <div className={cb.container_item}>Item 2</div>
            <div className={cb.container_item}>Item 3</div>
            <div className={cb.container_item}>Item 4</div>
            <div className={cb.container_item}>Item 5</div>
            <div className={cb.container_item}>Item 6</div>
            <div className={cb.container_item}>Item 7</div>
            <div className={cb.container_item}>Item 8</div>
          </div>
        </div>
        <div className={`${cb.controls} ${cb.fwrap}`}>
          <div className={cb.controls_wrapper}>
            <p>display:</p>
            <div className={cb.controls_values}>
              <label><input type="radio" value="flex" defaultChecked={true} />flex</label>
            </div>
          </div>
          <div className={cb.controls_wrapper} onChange={handleWrap}>
            <p>flex-wrap:</p>
            <div className={cb.controls_values}>
              <label><input type="radio" name="gapwrap" value="wrap" defaultChecked={true} />wrap</label>
              <label><input type="radio" name="gapwrap" value="wrap-reverse" />wrap-reverse</label>
            </div>
          </div>
          <div className={cb.controls_wrapper}>
            <p>row-gap (px):</p>
            <div className={cb.controls_values}>
              <input type='range' min={gmin} max={gmax} name='rgValue' defaultValue={rowGap} onChange={handleRG} /> {rowGap}
            </div>
          </div>
          <div className={cb.controls_wrapper}>
            <p>column-gap (px):</p>
            <div className={cb.controls_values}>
              <input type='range' min={gmin} max={gmax} name='cgValue' defaultValue={colGap} onChange={handleCG} /> {colGap}
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