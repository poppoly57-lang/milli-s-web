import '../styles/shoppingExperience.css'

const experienceHighlights = [
  {
    number: '01',
    title: 'BEAUTY, THOUGHTFULLY EXPLORED',
    description:
      'Explore different beauty essentials and discover products that interest you.',
  },
  {
    number: '02',
    title: 'YOUR EVERYDAY BEAUTY RITUAL',
    description:
      'Find inspiration for routines that make everyday beauty feel special.',
  },
  {
    number: '03',
    title: 'A LITTLE SOMETHING FOR YOU',
    description: 'Explore beauty essentials and discover your next favorite.',
  },
]

function ShoppingExperience() {
  return (
    <section className="shopping-experience" aria-labelledby="shopping-experience-heading">
      <div className="shopping-experience__inner">
        <header className="shopping-experience__header">
          <div className="shopping-experience__intro">
            <p className="shopping-experience__eyebrow">THE MILI&apos;S EXPERIENCE</p>
            <h2 className="shopping-experience__heading" id="shopping-experience-heading">
              Beauty shopping, made personal.
            </h2>
          </div>
          <p className="shopping-experience__support">
            Discover, explore, and find the essentials that feel right for you.
          </p>
        </header>

        <div className="shopping-experience__highlights">
          {experienceHighlights.map((highlight) => (
            <article className="experience-highlight" key={highlight.number}>
              <div className="experience-highlight__marker" aria-hidden="true">
                <span>{highlight.number}</span>
              </div>
              <h3 className="experience-highlight__title">{highlight.title}</h3>
              <p className="experience-highlight__description">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShoppingExperience