import fg from './fg.module.scss';
import cb from '../CodeBlock/cb.module.scss';
import CodeBlock from '../CodeBlock/CodeBlock';
import useUrlState from '../../hooks/useUrlState';

export default function FlexGrow() {
  const [fgrow, setFgrow] = useUrlState('fg_v', 'fg1');
  let handleFlexGrow = (e) => {
    setFgrow(e.target.value);
  }

  const cssOutput = `display: flex;\n/* Item 2 */\nflex-grow: ${fgrow.replace('fg', '')};`;

  return (
    <details className={fg.wrapper}>
      <summary><h3>Flex Grow</h3></summary>
      <p>This defines the ability for a flex item to grow if necessary. If all items have <code>flex-grow</code> set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, that child would take up twice as much of the space either one of the others</p>
      <p>Try to change flex-grow value to see the effect on item 2.</p>
      <CodeBlock cssOutput={cssOutput}>
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
              <label><input type="radio" name="fgVal" value="fg1" checked={fgrow === 'fg1'} onChange={handleFlexGrow} />1</label>
              <label><input type="radio" name="fgVal" value="fg2" checked={fgrow === 'fg2'} onChange={handleFlexGrow} />2</label>
              <label><input type="radio" name="fgVal" value="fg3" checked={fgrow === 'fg3'} onChange={handleFlexGrow} />3</label>
              <label><input type="radio" name="fgVal" value="fg4" checked={fgrow === 'fg4'} onChange={handleFlexGrow} />4</label>
            </div>
          </div>
        </div>
      </CodeBlock>
    </details>
  )
}