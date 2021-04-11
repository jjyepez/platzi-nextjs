import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'

const avoFacts = [
  {
    title: 'Mojitos come from Cuba',
    content:
      'If you have ever visited Cuba before you will see first-hand just how much Cubans love mojitos. It pairs perfectly with authentic Cuban cuisine.',
  },
  {
    title: 'Earnest Hemmingway loved mojitos',
    content:
      'Sure, the famed author was known for loving a lot of different types of drinks, but the writer was particularly found of mojitos, especially after all of the time that he spent in Cuba.',
  },
  {
    title: 'This drink is more than 500 years old',
    content:
      'The mojito is one of the oldest mixed drinks that is still consumed today. While the exact history of this cocktail is still a little murky, it is estimated that it first originated in the 1500s.',
  },
  {
    title: 'The name has roots in African language',
    content:
      'The name mojito comes from the word “mojo” which means talisman or magic charm. Some believe that the name actually came from African slaves who worked in Cuba.',
  },
  {
    title: 'The mojito used to be used for medicinal purposes',
    content:
      'Pirates used to actually create a drink with sugar lime, mint and aguardiente (early rum) for medicinal purposes to treat scurvy and dysentery. When aguardiente was switched out for real rum, the classic mojito officially made its debut!',
  },
  {
    title: 'You can thank James Bond for their recent resurgence in popularity',
    content:
      'In the 2002 movie Die Another Day, James Bond and Jinx enjoy a mojito beachside, and the now famous scene with Halle Berry and Pierce Brosnan helped bring this drink back in terms of popularity. In fact there was a noticeable spike in mojito sales when the movie came out.',
  },
  {
    title: 'They’re big outside of Cuba',
    content:
      'Most Americans know about mojitos, but many people don’t realize that they are actually really popular in Poland and Great Britain.',
  },
  {
    title: 'There are special mojito ice cubes',
    content:
      'Experts will tell you that normal ice cubes can melt and water down your mojito, which is why there are actually special mojito cubes that are made of water, sugar and lime juice that will help keep the flavor of the mojitos in tact.',
  },
  {
    title: 'You can swap out flavors',
    content:
      'There are so many different variations of the mojito. Just swap out the lime for other fruits and you can make a fruity cocktail that is sure to impress.',
  },
  {
    title: 'There are tequila mojitos too',
    content:
      'Since mojitos are very popular in Mexican and Cuban restaurants, many people started to make their mojitos with tequila. While they are supposed to be made with rum, this is a fresh and fun take on the cocktail that many people love.',
  },
].slice(0, 7)

const AboutPage = () => {
  return (
    <Layout>
      <section>
        <Header as="h1" textAlign="center">
          7 Thinks you may not know about Mojitos
        </Header>
        <figure>
          <Image
            width="100%"
            src="/images/mojito-facts.jpg"
            alt="Avocados on a table"
          />
          <figcaption>
            Originally from{' '}
            <a
              target="_blank"
              href="https://lionfishsd.com/10-things-you-may-not-know-about-mojitos/"
            >
              lionfishsd.com
            </a>
          </figcaption>
        </figure>
        <ol>
          {avoFacts.map(({ title, content }) => (
            <li key={title}>
              <h3 className="ui header">{title}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      </section>

      <style jsx>{`
        figure,
        ol {
          padding: 0;
          margin: 0;
        }

        figure {
          margin: 2rem auto 3rem;
          text-align: center;
        }
        figcaption {
          margin-top: 0.5rem;
          font-site: 0.7rem;
          color: grey;
        }

        ol {
          list-style: none;

          // Look ma! Responsive grid with no Media queries :)
          // https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-gap: 4.5rem 3rem;

          // Look ma! A CSS Counter :)
          // https://moderncss.dev/totally-custom-list-styles/
          counter-reset: orderedlist;
        }
        li::before {
          counter-increment: orderedlist;
          content: counter(orderedlist);

          // Boring stuff
          position: absolute;
          top: -43px;
          left: -5px;
          color: #cecece;
          font-size: 5rem;
          font-weight: bold;
        }

        li {
          position: relative;
        }
        h3:first-child {
          // why the first-child selector you may ask...
          // to gain specificity and thus avoid using '!important' :)
          padding-left: 40px;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default AboutPage
