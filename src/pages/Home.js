import AlignContent from "../comp/AlignContent/AlignContent"
import AlignItems from "../comp/AlignItems/AlignItems"
import FlexBasis from "../comp/FlexBasis/FlexBasis"
import FlexContainer from "../comp/FlexContainer/FlexContainer"
import FlexDirection from "../comp/FlexDirection/FlexDirection"
import FlexFlow from "../comp/FlexFlow/FlexFlow"
import FlexGrow from "../comp/FlexGrow/FlexGrow"
import FlexShrink from "../comp/FlexShrink/FlexShrink"
import FlexWrap from "../comp/FlexWrap/FlexWrap"
import Gap from "../comp/Gap/Gap"
import JustifyContent from "../comp/JustifyContent/JustifyContent"
import Order from "../comp/Order/Order"

export default function Home() {
  return (
    <>
      <p>Flexbox, also known as the CSS Flexible Box Layout, is a powerful layout module in CSS that allows you to create flexible and responsive web layouts. It provides a convenient way to distribute space and align elements within a container.</p>
      <p>In this article, we will check each properties with a detailed explanation of Flexbox along with examples.</p>
      <h2>Properties for the parent (flex container) element</h2>
      <FlexContainer/>
      <FlexDirection/>
      <FlexWrap/>
      <FlexFlow/>
      <JustifyContent/>
      <AlignItems/>
      <AlignContent/>
      <Gap/>
      <h2>Properties for the children (flex items)</h2>
      <Order/>
      <FlexGrow/>
      <FlexShrink/>
      <FlexBasis/>
    </>
  )
}