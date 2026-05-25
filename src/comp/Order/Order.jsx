import or from './or.module.scss';
import cb from '../CodeBlock/cb.module.scss';
import CodeBlock from '../CodeBlock/CodeBlock';
import { useState } from 'react';

export default function Order() {
  let [ext, setExt] = useState('order0');
  let handleChange = (e) => {
    setExt(e.target.value);
  }
  return (
    <details className={or.wrapper}>
      <summary><h3>Order</h3></summary>
      <p>The <code>order</code> property lets us control the order in which flex items are displayed. By default, items have an order value of 0. However, we can assign positive or negative integers to rearrange items within the flex container. This property enables us to reorder elements visually without changing the HTML structure.</p>
      <CodeBlock>
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
              <label><input type="radio" value="order0" name="orderValues" defaultChecked={true} />0</label>
              <label><input type="radio" value="order1" name="orderValues" />1</label>
              <label><input type="radio" value="order2" name="orderValues" />2</label>
              <label><input type="radio" value="order3" name="orderValues" />3</label>
              <label><input type="radio" value="order4" name="orderValues" />4</label>
            </div>
          </div>
        </div>
      </CodeBlock>
    </details>
  )
}