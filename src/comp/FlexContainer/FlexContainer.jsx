import fc from './fc.module.scss';
import cb from '../CodeBlock/cb.module.scss';
import CodeBlock from '../CodeBlock/CodeBlock';
import useUrlState from '../../hooks/useUrlState';

export default function FlexContainer() {
  const [ext, setExt] = useUrlState('fc_d', 'block');
  let handleChange = (e) => {
    setExt(e.target.value);
  }

  const cssOutput = `display: ${ext};`;

  return (
    <details open className={fc.wrapper}>
      <summary><h3>Flex Container</h3></summary>
      <p>The parent element that contains one or more flex items is known as the flex container. To create a flex container, you need to apply the <code>display: flex</code> or <code>display: inline-flex</code> property to the container element. It enables a flex context for all its direct children.</p>
      <p>Note that CSS columns have no effect on a flex container.</p>
      <CodeBlock cssOutput={cssOutput}>
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
              <label><input type="radio" name="fcValues" value="block" checked={ext === 'block'} onChange={handleChange} />block</label>
              <label><input type="radio" name="fcValues" value="flex" checked={ext === 'flex'} onChange={handleChange} />flex</label>
            </div>
          </div>
        </div>
      </CodeBlock>
    </details>
  )
}