import React from 'react'
import Layout from '../layouts/layout';
import Menu from '../layouts/menuBar';
import Hero from '../layouts/hero';
import Recipes from '../layouts/recipes';
import Paralax from '../layouts/paralax';
import Gallery from '../layouts/gallery';

const IndexPage = () => (
  <Layout>
        <Menu />
        <Hero />
        <Recipes />
        <Paralax />
        <Gallery />
  </Layout>
)

export default IndexPage
