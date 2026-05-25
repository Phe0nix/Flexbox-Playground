import fw from './fw.module.scss';
import cb from '../CodeBlock/cb.module.scss';
import CodeBlock from '../CodeBlock/CodeBlock';
import useUrlState from '../../hooks/useUrlState';

export default function FlexWrap() {
  const [ext, setExt] = useUrlState('fw_wrap', 'nowrap');
  const min = 150;
  const max = 900;
  const [width, setWidth] = useUrlState('fw_w', max, { parse: Number });
  let handleChange = (e) => {
    setExt(e.target.value);
  }
  let handleWidth = (e) => {
    setWidth(e.target.value);
  }
  const cssOutput = `display: flex;\nflex-wrap: ${ext};\nwidth: ${width}px;`;

  return (
    <details className={fw.wrapper}>
      <summary><h3>Flex Wrap</h3></summary>
      <p>By default, flex items try to fit within a single line. However, when there is not enough space, the <code>flex-wrap</code> property controls whether the items should wrap onto multiple lines. It offers options like <code>nowrap</code> (default value), <code>wrap</code>, and <code>wrap-reverse</code>. This property allows us to create responsive layouts that adapt to different screen sizes.
      </p>
      <ul>
        <li><strong>nowrap :</strong> all flex items will be on one line</li>
        <li><strong>wrap :</strong> flex items will wrap onto multiple lines, from top to bottom.</li>
        <li><strong>wrap-reverse :</strong> flex items will wrap onto multiple lines from bottom to top.</li>
      </ul>
      <p>To see the <code>flex-wrap</code> effect, Try to change the width of below container</p>
      <CodeBlock cssOutput={cssOutput}>
        <div style={{width: `${width}px`}}>
          <div className={`${cb.container} ${cb.flex} ${cb[ext]}`}>
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
            <p>flex-wrap:</p>
            <div className={cb.controls_values} onChange={handleChange}>
              <label><input type="radio" name="fwValues" value="nowrap" checked={ext === 'nowrap'} onChange={handleChange} />nowrap</label>
              <label><input type="radio" name="fwValues" value="wrap" checked={ext === 'wrap'} onChange={handleChange} />wrap</label>
              <label><input type="radio" name="fwValues" value="wrap-reverse" checked={ext === 'wrap-reverse'} onChange={handleChange} />wrap-reverse</label>
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