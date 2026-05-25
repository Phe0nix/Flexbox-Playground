import fs from './fs.module.scss';
import cb from '../CodeBlock/cb.module.scss';
import CodeBlock from '../CodeBlock/CodeBlock';
import useUrlState from '../../hooks/useUrlState';

export default function FlexShrink() {
  const [fshrink, setfshrink] = useUrlState('fs_v', 'fs1');
  const min = 150;
  const max = 900;
  const [width, setWidth] = useUrlState('fs_w', max, { parse: Number });
  let handleFlexShrink = (e) => {
    setfshrink(e.target.value);
  }
  let handleWidth = (e) => {
    setWidth(e.target.value);
  }
  const cssOutput = `display: flex;\n/* Item 2 */\nflex-shrink: ${fshrink.replace('fs', '')};\nwidth: ${width}px;`;

  return (
    <details className={fs.wrapper}>
      <summary><h3>Flex Shrink</h3></summary>
      <p>This defines the ability for a flex item to shrink if necessary.</p>
      <p>Try to change flex-shrink value and reduce container width to see the effect on item 2.</p>
      <CodeBlock cssOutput={cssOutput}>
        <div style={{width: `${width}px`}}>
          <div className={`${cb.container} ${cb.flex} ${cb.boxWidth}`}>
            <div className={`${cb.container_item} ${cb.fs1}`}>Item 1</div>
            <div className={`${cb.container_item} ${cb.activeItem} ${cb[fshrink]}`}>Item 2</div>
            <div className={`${cb.container_item} ${cb.fs1}`}>Item 3</div>
            <div className={`${cb.container_item} ${cb.fs1}`}>Item 4</div>
          </div>
        </div>
        <div className={`${cb.controls} ${cb.fwrap}`}>
          <div className={cb.controls_wrapper}>
            <p>display:</p>
            <div className={cb.controls_values}>
              <label><input type="radio" value="flex" defaultChecked={true} />flex</label>
            </div>
          </div>
          <div className={cb.controls_wrapper} onChange={handleFlexShrink}>
            <p>flex-shrink:</p>
            <div className={cb.controls_values}>
              <label><input type="radio" name="fsVal" value="fs1" checked={fshrink === 'fs1'} onChange={handleFlexShrink} />1</label>
              <label><input type="radio" name="fsVal" value="fs2" checked={fshrink === 'fs2'} onChange={handleFlexShrink} />2</label>
              <label><input type="radio" name="fsVal" value="fs3" checked={fshrink === 'fs3'} onChange={handleFlexShrink} />3</label>
              <label><input type="radio" name="fsVal" value="fs4" checked={fshrink === 'fs4'} onChange={handleFlexShrink} />4</label>
            </div>
          </div>
          <div className={cb.controls_wrapper}>
            <p>container width:</p>
            <div className={cb.controls_width}>
              <input type='range' min={min} max={max} name='widthValue' value={width} onChange={handleWidth} /> {width}px
            </div>
          </div>
        </div>
      </CodeBlock>
    </details>
  )
}