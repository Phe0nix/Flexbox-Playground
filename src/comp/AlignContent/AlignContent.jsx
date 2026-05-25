import ac from './ac.module.scss';
import cb from '../CodeBlock/cb.module.scss';
import CodeBlock from '../CodeBlock/CodeBlock';
import useUrlState from '../../hooks/useUrlState';

export default function AlignContent() {
  const [ext, setExt] = useUrlState('ac_val', 'normal');
  const [fwrap, setFwrap] = useUrlState('ac_wrap', 'wrap');
  const min = 150;
  const max = 900;
  const [width, setWidth] = useUrlState('ac_w', max, { parse: Number });
  let handleChange = (e) => {
    setExt(e.target.value);
  }
  let handleWidth = (e) => {
    setWidth(e.target.value);
  }
  let handleWrap = (e) => {
    setFwrap(e.target.value);
  }
  const cssOutput = `display: flex;\nflex-wrap: ${fwrap};\nalign-content: ${ext};\nwidth: ${width}px;`;

  return (
    <details className={ac.wrapper}>
      <summary><h3>Align Content</h3></summary>
      <p>The <code>align-content</code> property aligns a flex container's lines within when there is extra space in the vertically, similar to how <code>justify-content</code> aligns individual items within the horizontally.</p>
      <p>This property only takes effect on <strong>multi-line flexible containers</strong>, where <code>flex-wrap</code> is set to either <code>wrap</code> or <code>wrap-reverse</code>. A single-line flexible container (i.e. where <code>flex-wrap</code> is set to its default value, <code>no-wrap</code>) will not reflect align-content.</p>
      <ul>
        <li><strong>normal (default value):</strong> items are packed in their default position as if no value was set.</li>
        <li><strong>flex-start / start:</strong> items packed to the start of the container. The flex-start honors the flex-direction while start honors the writing-mode direction.</li>
        <li><strong>flex-end / end:</strong> items packed to the end of the container. The (more support) flex-end honors the flex-direction while end honors the writing-mode direction.</li>
        <li><strong>stretch:</strong> lines stretch to take up the remaining space.</li>
        <li><strong>center:</strong> Pack items around the center. </li>
        <li><strong>space-between:</strong> items evenly distributed. the first line is at the start of the container while the last one is at the end.</li>
        <li><strong>space-around:</strong> items evenly distributed with equal space around each line.</li>
        <li><strong>space-evenly:</strong> items are evenly distributed with equal space around them.</li>
      </ul>
      <p>To see the <code>align-content</code> effect, Try to change the width to make below container multiline layout.</p>
      <CodeBlock cssOutput={cssOutput}>
        <div style={{width: `${width}px`}}>
          <div className={`${cb.container} ${cb.flex} ${cb[fwrap]} ${cb['ac' + ext]}`}>
            <div className={cb.container_item}>Item 1</div>
            <div className={cb.container_item}>Item 2</div>
            <div className={cb.container_item}>Item 3</div>
            <div className={cb.container_item}>Item 4</div>
            <div className={cb.container_item}>Item 5</div>
            <div className={cb.container_item}>Item 6</div>
            <div className={cb.container_item}>Item 7</div>
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
              <label><input type="radio" name="acwrap" value="wrap" checked={fwrap === 'wrap'} onChange={handleWrap} />wrap</label>
              <label><input type="radio" name="acwrap" value="wrap-reverse" checked={fwrap === 'wrap-reverse'} onChange={handleWrap} />wrap-reverse</label>
            </div>
          </div>
          <div className={cb.controls_wrapper}>
            <p>justify-content:</p>
            <div className={cb.controls_values} onChange={handleChange}>
              <label><input type="radio" name="acValues" value="normal" checked={ext === 'normal'} onChange={handleChange} />normal</label>
              <label><input type="radio" name="acValues" value="flex-start" checked={ext === 'flex-start'} onChange={handleChange} />flex-start / start</label>
              <label><input type="radio" name="acValues" value="flex-end" checked={ext === 'flex-end'} onChange={handleChange} />flex-end / end</label>
              <label><input type="radio" name="acValues" value="stretch" checked={ext === 'stretch'} onChange={handleChange} />stretch</label>
              <label><input type="radio" name="acValues" value="center" checked={ext === 'center'} onChange={handleChange} />center</label>
              <label><input type="radio" name="acValues" value="space-between" checked={ext === 'space-between'} onChange={handleChange} />space-between</label>
              <label><input type="radio" name="acValues" value="space-around" checked={ext === 'space-around'} onChange={handleChange} />space-around</label>
              <label><input type="radio" name="acValues" value="space-evenly" checked={ext === 'space-evenly'} onChange={handleChange} />space-evenly</label>
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