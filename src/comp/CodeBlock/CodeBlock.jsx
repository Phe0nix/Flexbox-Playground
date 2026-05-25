import cb from './cb.module.scss';

export default function CodeBlock({children}) {
  return (
    <div className={cb.codeblock}>
      {children}
    </div>
  )
}