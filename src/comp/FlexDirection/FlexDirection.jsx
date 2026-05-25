import fd from './fd.module.scss';
import cb from '../CodeBlock/cb.module.scss';
import CodeBlock from '../CodeBlock/CodeBlock';
import useUrlState from '../../hooks/useUrlState';

export default function FlexDirection() {
  const [ext, setExt] = useUrlState('fd_dir', 'row');
  let handleChange = (e) => {
    setExt(e.target.value);
  }

  const cssOutput = `display: flex;\nflex-direction: ${ext};`;

  return (
    <details className={fd.wrapper}>
      <summary><h3>Flex Direction</h3></summary>
      <p>The <code>flex-direction</code> property determines whether flex items should be laid out in a <code>row</code> (default value), <code>row-reverse</code>, <code>column</code>, or <code>column-reverse</code>. It plays a significant role in defining the main axis. By changing the direction, we can create vertical layouts, reverse the order of items, or create grid-like structures.
      </p>
      <ul>
        <li><strong>row:</strong> left to right in ltr; right to left in rtl</li>
        <li><strong>row-reverse:</strong> right to left in ltr; left to right in rtl</li>
        <li><strong>column:</strong> same as row but top to bottom</li>
        <li><strong>column-reverse:</strong> same as row-reverse but bottom to top</li>
      </ul>
      <CodeBlock cssOutput={cssOutput}>
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
            <p>flex-direction:</p>
            <div className={cb.controls_values} onChange={handleChange}>
              <label><input type="radio" name="fdValues" value="row" checked={ext === 'row'} onChange={handleChange} />row</label>
              <label><input type="radio" name="fdValues" value="row-reverse" checked={ext === 'row-reverse'} onChange={handleChange} />row-reverse</label>
              <label><input type="radio" name="fdValues" value="column" checked={ext === 'column'} onChange={handleChange} />column</label>
              <label><input type="radio" name="fdValues" value="column-reverse" checked={ext === 'column-reverse'} onChange={handleChange} />column-reverse</label>
            </div>
          </div>
        </div>
      </CodeBlock>
    </details>
  )
}