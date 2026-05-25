import or from './or.module.scss';
import cb from '../CodeBlock/cb.module.scss';
import CodeBlock from '../CodeBlock/CodeBlock';
import useUrlState from '../../hooks/useUrlState';

export default function Order() {
  const [ext, setExt] = useUrlState('ord_v', 'order0', { hash: 'order' });
  let handleChange = (e) => {
    setExt(e.target.value);
  }

  const cssOutput = `display: flex;\n/* Item 2 */\norder: ${ext.replace('order', '')};`;

  return (
    <details className={or.wrapper}>
      <summary><h3>Order</h3></summary>
      <p>The <code>order</code> property lets us control the order in which flex items are displayed. By default, items have an order value of 0. However, we can assign positive or negative integers to rearrange items within the flex container. This property enables us to reorder elements visually without changing the HTML structure.</p>
      <CodeBlock cssOutput={cssOutput}>
        <div className={`${cb.container} ${cb.flex} ${cb[ext]}`}>
          <div className={`${cb.container_item} ${cb.orderItem}`}>Order -1</div>
          <div className={`${cb.container_item} ${cb.orderItem} ${cb.item2}`}>Order 0</div>
          <div className={`${cb.container_item} ${cb.orderItem}`}>Order 1</div>
          <div className={`${cb.container_item} ${cb.orderItem}`}>Order 2</div>
          <div className={`${cb.container_item} ${cb.orderItem}`}>Order 3</div>
        </div>
        <div className={cb.controls}>
          <div className={cb.controls_wrapper}>
            <p>display:</p>
            <div className={cb.controls_values}>
              <label><input type="radio" value="flex" defaultChecked={true} />flex</label>
            </div>
          </div>
          <div className={cb.controls_wrapper}>
            <p>change 'item 1' order to:</p>
            <div className={cb.controls_values} onChange={handleChange}>
              <label><input type="radio" value="order0" name="orderValues" checked={ext === 'order0'} onChange={handleChange} />0</label>
              <label><input type="radio" value="order1" name="orderValues" checked={ext === 'order1'} onChange={handleChange} />1</label>
              <label><input type="radio" value="order2" name="orderValues" checked={ext === 'order2'} onChange={handleChange} />2</label>
              <label><input type="radio" value="order3" name="orderValues" checked={ext === 'order3'} onChange={handleChange} />3</label>
              <label><input type="radio" value="order4" name="orderValues" checked={ext === 'order4'} onChange={handleChange} />4</label>
            </div>
          </div>
        </div>
      </CodeBlock>
    </details>
  )
}