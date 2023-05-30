import React from 'react'
import './about.css'
import ME from '../../assets/Vini-picture.jpeg'

import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


function About() {
  return (
    <section id='about'>
      <h5>Venha saber</h5>
      <h2>Sobre mim?</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='Otávio Vinícius'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>3+ anos de trabalho</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>200+ clientes</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>80+ projetos finalizados</small>
            </article>
          </div>
          <p>
            As experiências acumuladas demonstram que a consulta aos diversos militantes estimula a padronização do sistema de participação geral. A prática cotidiana prova que o entendimento das metas propostas acarreta um processo de reformulação e modernização dos modos de operação convencionais.
          </p>
          <a href='#contact'>Vamos falar</a>
        </div>
      </div>
    </section>
  )
}

export default About
