export default function Dashboard({ children }) {
  return (
    <section
      className="row-start-1 bg-gradient-to-t dashboard"
      style={{ gridColumnStart: 5, gridColumnEnd: -1, gridRowEnd: -1 }}
    >
      {children}
    </section>
  )
}
