import React from 'react'
import Layout from '../layouts/layout';
import Menu from '../layouts/menuBar';
import Hero from '../layouts/hero';
import Recipes from '../layouts/recipes';
import Paralax from '../layouts/paralax';
import Gallery from '../layouts/gallery';
import Newsletter from '../layouts/newsletter';
import Maps from '../layouts/map';
import Footer from '../layouts/footer';

const IndexPage = () => (
  <Layout>
        <Menu />
        <Hero />
        <Recipes />
        <Paralax />
        <Gallery />
        <Newsletter />
        <Maps />
        <Footer />
  </Layout>
)

export default IndexPage
