import styles from './Container.module.scss'

interface IContainer {
  children: JSX.Element | JSX.Element[],
  className?: string,
}

export default function Container({
  children,
  className,
}: IContainer) {
  return (
    <section className={className}>
      { children }
    </section >
  )
}
