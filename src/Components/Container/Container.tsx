import styles from './Container.module.scss'

interface IContainer {
  children: JSX.Element | JSX.Element[],
  sectionStyle?: string,
}

export default function Container({
  children,
  sectionStyle,
}: IContainer) {
  return (
    <section className={`${styles.container} ${sectionStyle} ${sectionStyle}`}>
      { children }
    </section >
  )
}
