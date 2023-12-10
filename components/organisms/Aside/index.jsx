import styles from './Aside.module.scss'

const Para = ({ p }) => {
  return (
    <p>{p}</p>
  )
}

const AsideSection = ({ section }) => {
  return (
    <section className="asideSection">
      {
        section?.header && (
          <header className="asideSectionHeader">
            Section header
          </header>
        )
      }
      {
        section?.body && Array.isArray(section.body) && (
          <div className="asideSectionBody">
            {section.body.map((p, i) => <Para key={i} p={p} />)
            }
          </div>
        )
      }

      {
        section?.footer && (
          <footer className="asideSectionFooter">
            {<Para p={section.footer} />}
          </footer>
        )

      }
    </section>
  )
}

export default function Aside({ sections = [] }) {
  return (

    <aside className={styles.aside}>
      {!!sections &&
        Array.isArray(sections) &&
        sections.map((section) => {
          return <AsideSection key={section.id} section={section} />
        })}

    </aside>
  );
}
