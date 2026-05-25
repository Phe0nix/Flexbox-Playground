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
import { useEffect, useMemo } from "react"
import useUrlState from "../hooks/useUrlState"

const LESSONS = [
  { id: 'flex-container', label: 'Flex Container', type: 'container', Component: FlexContainer },
  { id: 'flex-direction', label: 'Flex Direction', type: 'container', Component: FlexDirection },
  { id: 'flex-wrap', label: 'Flex Wrap', type: 'container', Component: FlexWrap },
  { id: 'flex-flow', label: 'Flex Flow', type: 'container', Component: FlexFlow },
  { id: 'justify-content', label: 'Justify Content', type: 'container', Component: JustifyContent },
  { id: 'align-items', label: 'Align Items', type: 'container', Component: AlignItems },
  { id: 'align-content', label: 'Align Content', type: 'container', Component: AlignContent },
  { id: 'gap', label: 'Gap', type: 'container', Component: Gap },
  { id: 'order', label: 'Order', type: 'item', Component: Order },
  { id: 'flex-grow', label: 'Flex Grow', type: 'item', Component: FlexGrow },
  { id: 'flex-shrink', label: 'Flex Shrink', type: 'item', Component: FlexShrink },
  { id: 'flex-basis', label: 'Flex Basis', type: 'item', Component: FlexBasis }
]

export default function Home() {
  const [query, setQuery] = useUrlState('q', '')
  const [group, setGroup] = useUrlState('g', 'all')

  const filteredLessons = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return LESSONS.filter((lesson) => {
      const matchesGroup = group === 'all' || lesson.type === group
      const matchesQuery = normalizedQuery.length === 0 || lesson.label.toLowerCase().includes(normalizedQuery)
      return matchesGroup && matchesQuery
    })
  }, [group, query])

  useEffect(() => {
    if (typeof window === 'undefined' || !window.location.hash) {
      return
    }

    const targetId = window.location.hash.slice(1)
    const target = document.getElementById(targetId)

    if (!target) {
      return
    }

    const details = target.querySelector('details')

    if (details) {
      details.open = true
    }

    window.requestAnimationFrame(() => {
      if (typeof target.scrollIntoView === 'function') {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }, [filteredLessons])

  const containerCount = LESSONS.filter((lesson) => lesson.type === 'container').length
  const itemCount = LESSONS.length - containerCount

  return (
    <main id="guide" className="contentWrap">
      <section className="introCard">
        <p>
          Flexbox, also known as the CSS Flexible Box Layout, is a layout model that helps you build
          responsive interfaces with less code and better alignment.
        </p>
        <p>
          Use this playground to test each property live, understand behavior quickly, and build stronger layout intuition.
        </p>
      </section>

      <section className="controlPanel" id="playground">
        <div className="controlTop">
          <h2>Flex Playground</h2>
          <p>{filteredLessons.length} lessons visible</p>
        </div>

        <div className="chipRow" role="tablist" aria-label="Filter lessons by property group">
          <button className={`chip ${group === 'all' ? 'chipActive' : ''}`} onClick={() => setGroup('all')}>All ({LESSONS.length})</button>
          <button className={`chip ${group === 'container' ? 'chipActive' : ''}`} onClick={() => setGroup('container')}>Container ({containerCount})</button>
          <button className={`chip ${group === 'item' ? 'chipActive' : ''}`} onClick={() => setGroup('item')}>Items ({itemCount})</button>
        </div>

        <label htmlFor="lesson-search" className="searchLabel">Search property</label>
        <input
          id="lesson-search"
          className="searchInput"
          type="text"
          placeholder="Type: wrap, grow, align..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </section>

      <section className="lessonGrid" aria-live="polite">
        {filteredLessons.length === 0 && (
          <div className="emptyState">
            <h3>No matching lesson</h3>
            <p>Try another keyword or switch the lesson group filter.</p>
          </div>
        )}

        {filteredLessons.map((lesson) => {
          const LessonComponent = lesson.Component
          return (
            <article key={lesson.id} id={lesson.id} className="lessonCard">
              <div className="lessonMeta">
                <span className="pill">{lesson.type === 'container' ? 'Container Property' : 'Item Property'}</span>
                <a href={`#${lesson.id}`} className="jumpLink">#link</a>
              </div>
              <LessonComponent />
            </article>
          )
        })}
      </section>
    </main>
  )
}